import {
  defineComponent,
  cloneVNode,
  ref,
  toRaw,
  computed,
  PropType,
  VNode,
  Ref,
  Slots,
  onMounted,
  onUnmounted,
} from "vue";
import {
  ElTable,
  ElTableColumn,
  ElIcon,
  ElPopover,
  ElCheckbox,
  ElRadio,
  ElPagination,
} from "element-plus";
import {
  Menu,
  RefreshRight,
  FullScreen,
  Setting,
} from "@element-plus/icons-vue";
import Sortablejs from "sortablejs";
import "./index.css";

export type Key = number | string;

export interface Data {
  id: Key;
  [key: string]: any;
}
export interface Scope {
  row: Data;
}

export interface RowSelection {
  type?: "checkbox" | "radio";
  selectedRowKeys?: Key[];
  onChange?: (selectedRowKeys: Key[], selectedRows: Data[]) => void;
}

export interface Pagination {
  total?: number;
  pageSize?: number;
  virtual?: boolean;
  onSizeChange?: (pageSize: number) => void;
  onCurrentChange?: (currentPage: number) => void;
}

export interface Toolbar {
  refresh?: boolean;
  fullScreen?: boolean;
  setting?: boolean;
  onFullScreen?: (fullScreen: boolean) => void;
  onRefresh?: (refresh: boolean) => void;
  onSetting?: (setting: boolean) => void;
}

export interface Drag {
  oldIndex: number;
  newIndex: number;
  dataSource: Data[];
}

export interface Sortable {
  drag?: boolean;
  onDrag?: (drag: Drag) => void;
}

export interface Fixed {
  header?: boolean;
  onHeaderFixed?: () => void;
  onHeaderUnfixed?: () => void;
  footer?: boolean;
  onFooterFixed?: () => void;
  onFooterUnfixed?: () => void;
}

function useChildren(slots: Slots) {
  const items = slots && slots.default ? slots.default() : [];
  return items.map((tableColumn: VNode, tableColumnIndex: number) => {
    let fixed: boolean | string = false;
    tableColumnIndex === 0 && (fixed = "left");
    tableColumnIndex === items.length - 1 && (fixed = "right");

    return cloneVNode(tableColumn, {
      fixed,
      minWidth: tableColumn?.props?.minWidth || 128,
    });
  });
}

function useCheckbox(rowSelection: RowSelection, dataSource: Ref<Data[]>) {
  const checkedIds = ref<Key[]>(rowSelection.selectedRowKeys || []);
  const isAllChecked = computed(() => {
    return dataSource.value.every((row) => checkedIds.value.includes(row.id));
  });
  const hasChecked = computed(() => {
    return dataSource.value.some((row) => checkedIds.value.includes(row.id));
  });
  const onChange = () => {
    if (rowSelection.onChange) {
      rowSelection.onChange(
        toRaw(checkedIds.value),
        dataSource.value.filter((x) => checkedIds.value.includes(x.id))
      );
    }
  };
  const handleCheckboxChange = (id: Key) => {
    const index = checkedIds.value.indexOf(id);
    if (index >= 0) {
      checkedIds.value.splice(index, 1);
    } else {
      checkedIds.value.push(id);
    }
    onChange();
  };
  const handleAllCheckboxChange = () => {
    const ids = dataSource.value.map((x) => x.id);

    if (isAllChecked.value) {
      checkedIds.value = checkedIds.value.filter((id) => !ids.includes(id));
    } else {
      // 当前页，不在checkedIds，去选中
      dataSource.value
        .filter((row) => !checkedIds.value.includes(row.id))
        .forEach((row) => {
          checkedIds.value.push(row.id);
        });
    }
    onChange();
  };
  const node = rowSelection.type === "checkbox" && (
    <ElTableColumn width="40" prop="id" fixed>
      {{
        header: () => (
          <ElCheckbox
            modelValue={isAllChecked.value}
            indeterminate={isAllChecked.value ? false : hasChecked.value}
            onChange={handleAllCheckboxChange}
          />
        ),
        default: (scope: Scope) => (
          <ElCheckbox
            modelValue={checkedIds.value.includes(scope.row.id)}
            onChange={() => handleCheckboxChange(scope.row.id)}
          />
        ),
      }}
    </ElTableColumn>
  );
  return {
    node,
    checkedIds,
    isAllChecked,
    hasChecked,
    handleCheckboxChange,
    handleAllCheckboxChange,
  };
}

function useRadio(rowSelection: RowSelection, dataSource: Ref<Data[]>) {
  const radioId = ref(rowSelection.selectedRowKeys?.[0]);
  const onChange = () => {
    if (rowSelection.onChange) {
      const checkedIds = ref(radioId.value ? [radioId.value] : []);
      rowSelection.onChange(
        toRaw(checkedIds.value),
        dataSource.value.filter((x) => checkedIds.value.includes(x.id))
      );
    }
  };
  const handleRadioChange = (id: Key) => {
    radioId.value = id;
    onChange();
  };
  const node = rowSelection.type === "radio" && (
    <ElTableColumn width="40" prop="id" fixed>
      {(scope: Scope) => (
        <ElRadio
          modelValue={radioId.value}
          label={scope.row.id}
          onChange={() => handleRadioChange(scope.row.id)}
        >
          {" "}
        </ElRadio>
      )}
    </ElTableColumn>
  );
  return {
    node,
    radioId,
    handleRadioChange,
  };
}

function usePagination(pagination: Pagination, data: Data[]) {
  const basePageSize = pagination.pageSize || 10;
  const pageSizes = [
    basePageSize,
    basePageSize * 2,
    basePageSize * 3,
    basePageSize * 5,
  ];
  const currentPage = ref(1);
  const pageSize = ref(basePageSize);
  const handleSizeChange = (ps: number) => {
    currentPage.value = 1;
    pageSize.value = ps;
    pagination?.onSizeChange && pagination?.onSizeChange(ps);
  };
  const handleCurrentChange = (cp: number) => {
    currentPage.value = cp;
    pagination?.onCurrentChange && pagination?.onCurrentChange(cp);
  };
  const showPagination =
    pagination.virtual || (pagination?.total as number) > 0;
  // https://element-plus.org/zh-CN/component/pagination.html 有个warning提示
  // layout 有sizes，使用 @update:page-size
  const node = () =>
    showPagination && (
      <ElPagination
        pageSize={pageSize.value}
        pageSizes={pageSizes}
        total={pagination.virtual ? data.length : pagination?.total}
        layout="->, total, sizes, prev, pager, next, jumper"
        background
        onUpdate:page-size={handleSizeChange}
        onUpdate:current-page={handleCurrentChange}
        style="margin-top: 12px;"
      />
    );
  const dataSource = computed(() => {
    if (!pagination.virtual) {
      return data;
    }

    const val = (currentPage.value - 1) * pageSize.value;

    return data.slice(val, val + pageSize.value);
  });

  return {
    node,
    dataSource,
    pageSizes,
    handleSizeChange,
  };
}

function useSortable(
  sortable: Sortable,
  elProTable: Ref,
  dataSource: Ref<Data[]>
) {
  const drag = sortable.drag;
  const onDrag = sortable.onDrag;

  drag &&
    onMounted(() => {
      const tbody = elProTable?.value?.querySelector(
        ".el-table__body-wrapper tbody"
      );
      const sortable =
        tbody &&
        Sortablejs.create(tbody, {
          handle: ".sortable-handle", // Restricts sort start click/touch to the specified element
          ghostClass: "sortable-ghost", // Class name for the drop placeholder,
          setData: function (dataTransfer: any) {
            // to avoid Firefox bug
            // Detail see : https://github.com/RubaXa/Sortable/issues/1012
            dataTransfer.setData("Text", "");
          },
          onEnd: (evt: any) => {
            const targetRow = dataSource.value.splice(evt.oldIndex, 1)[0];
            dataSource.value.splice(evt.newIndex, 0, targetRow);

            onDrag &&
              onDrag({
                oldIndex: evt.oldIndex,
                newIndex: evt.newIndex,
                dataSource: dataSource.value,
              });

            // for show the changes, you can delete in you code
            // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
            // this.newList.splice(evt.newIndex, 0, tempIndex);
          },
        });
      onUnmounted(() => {
        sortable.destroy();
      });
    });

  const node = drag && (
    <ElTableColumn width="40" fixed>
      <ElIcon class="sortable-handle">
        <Menu />
      </ElIcon>
    </ElTableColumn>
  );

  return { node };
}

function useTitle(title = "") {
  const node = title && (
    <div class="title">
      <span>{title}</span>
    </div>
  );
  return {
    node,
  };
}

function useFullScreen(toolbar: Toolbar) {
  const fullScreen = ref(false);
  const handleClick = () => {
    fullScreen.value = !fullScreen.value;
    toolbar && toolbar.onFullScreen && toolbar.onFullScreen(fullScreen.value);
  };
  const node = toolbar.fullScreen && (
    <div onClick={handleClick}>
      <ElIcon
        size="16px"
        color={
          fullScreen.value
            ? "var(--el-color-primary-dark-2)"
            : "rgba(0,0,0,.75)"
        }
      >
        <FullScreen />
      </ElIcon>
    </div>
  );
  return {
    fullScreen,
    node,
  };
}

function useRefresh(toolbar: Toolbar) {
  const refresh = ref(false);
  const handleClick = () => {
    refresh.value = !refresh.value;
    toolbar && toolbar.onRefresh && toolbar.onRefresh(refresh.value);
  };
  const node = toolbar.refresh && (
    <div onClick={handleClick}>
      <ElIcon size="16px">
        <RefreshRight />
      </ElIcon>
    </div>
  );
  return {
    node,
  };
}

function useSetting(toolbar: Toolbar) {
  const node = toolbar.setting && (
    <>
      <ElPopover
        trigger="hover"
        content="this is content, this is content, this is content"
      >
        {{
          reference: () => (
            <div>
              <ElIcon size="16px">
                <Setting />
              </ElIcon>
            </div>
          ),
          default: () => <div>一个list，有拖拽排序、选中</div>,
        }}
      </ElPopover>
    </>
  );
  return {
    node,
  };
}

function useFixed(fixed: Fixed = {}, elProTable: Ref) {
  const getScrollElement = (el: any, root = window) => {
    let node = el;
    const overflowScrollReg = /scroll|auto/i;
    const rtv = [];

    while (
      node &&
      node.tagName !== "HTML" &&
      node.nodeType === 1 &&
      node !== root
    ) {
      const { overflowY } = window.getComputedStyle(node);

      if (overflowScrollReg.test(overflowY)) {
        if (node.tagName !== "BODY") {
          rtv.push(node);
        }

        // see: https://github.com/youzan/vant/issues/3823
        const { overflowY: htmlOverflowY } = window.getComputedStyle(
          node.parentNode
        );

        if (overflowScrollReg.test(htmlOverflowY)) {
          rtv.push(node);
        }
      }
      node = node.parentNode;
    }

    // 需要返回最近的一个，el-main也是overflow：auto 但是没有滚动条，只有app-main才有滚动条
    return rtv.length ? rtv[rtv.length - 1] : root;
  };
  const getElementStyle = (
    element: HTMLElement,
    styleKey: keyof CSSStyleDeclaration
  ) => window.getComputedStyle(element)[styleKey];

  (fixed.header || fixed.footer) &&
    onMounted(() => {
      const el = elProTable.value;
      const tableElement = el.querySelector(".el-table");
      const paginationElement = el.querySelector(".el-pagination");
      const tableHeaderElement = el.querySelector(".el-table__header-wrapper");
      const tableBodyElement = el.querySelector(".el-table__body-wrapper");
      const tableInnerWrapperElement = el.querySelector(
        ".el-table__inner-wrapper"
      );
      const scrollElement = getScrollElement(el);
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const headerHeight = tableHeaderElement.clientHeight;
            const rect = el.querySelector(".el-table").getBoundingClientRect();
            const maxZIndex = Array.from(
              tableElement.querySelectorAll("*")
            ).reduce((maxZIndex, element) => {
              const zIndex = getElementStyle(element as HTMLElement, "zIndex");
              return Math.max(
                maxZIndex as number,
                parseInt(zIndex as string) || 0
              );
            }, 0);
            const bodyWidth = getElementStyle(tableBodyElement, "width");

            if (fixed.header && tableHeaderElement) {
              if (rect.top <= 0 && rect.bottom >= headerHeight) {
                fixed.onHeaderFixed && fixed.onHeaderFixed();
                // console.log("fixed-header", bodyWidth);
                tableHeaderElement.style.position = "fixed";
                tableHeaderElement.style.zIndex = `${maxZIndex}`;
                tableHeaderElement.style.top = 0 + "px";
                tableHeaderElement.style.transition = "top .3s";
                tableHeaderElement.style.width = bodyWidth;
                tableInnerWrapperElement.style.marginTop =
                  tableHeaderElement.offsetHeight + "px";
              } else {
                fixed.onHeaderUnfixed && fixed.onHeaderUnfixed();
                tableHeaderElement.style.width = "auto";
                tableInnerWrapperElement.style.marginTop = 0;
                tableHeaderElement.style.position = "static";
              }
            }

            // console.log("rect.top", rect.top, rect.bottom);

            if (fixed.footer && paginationElement) {
              if (
                rect.top <=
                  scrollElement.innerHeight -
                    tableHeaderElement.offsetHeight -
                    paginationElement.offsetHeight &&
                rect.bottom >= scrollElement.innerHeight + 12
              ) {
                fixed.onFooterFixed && fixed.onFooterFixed();
                paginationElement.style.position = "fixed";
                paginationElement.style.padding = "12px 0";
                paginationElement.style.background = "#fff";
                paginationElement.style.zIndex = `${maxZIndex}`;
                paginationElement.style.bottom = 0;
                paginationElement.style.transition = "bottom .3s";
                paginationElement.style.width = bodyWidth;
                tableInnerWrapperElement.style.marginBottom =
                  paginationElement.offsetHeight + "px";
              } else {
                fixed.onFooterUnfixed && fixed.onFooterUnfixed();
                paginationElement.style.width = "auto";
                tableInnerWrapperElement.style.marginBottom = 0;
                paginationElement.style.position = "static";
              }
            }

            ticking = false;
          });
        }
        ticking = true;
      };
      // scrollElementOnScroll
      scrollElement.addEventListener("scroll", onScroll, false);
      onUnmounted(() => {
        scrollElement.removeEventListener("scroll", onScroll, false);
      });

      // tableElementResizeObserver
      const observer = new ResizeObserver(() => {
        // console.log("resize");
        onScroll();
      });
      observer.observe(tableElement);
      onUnmounted(() => {
        observer.disconnect();
      });
    });
}

export default defineComponent({
  name: 'ElProTable',
  props: {
    data: {
      type: Array as PropType<Data[]>,
      default: () => [],
    },
    rowSelection: {
      type: Object as PropType<RowSelection>,
      default: () => ({
        selectedRowKeys: [],
      }),
    },
    pagination: {
      type: Object as PropType<Pagination>,
      default: () => ({
        pageSize: 10,
        virtual: false,
      }),
    },
    sortable: {
      type: Object as PropType<Sortable>,
      default: () => ({}),
    },
    toolbar: {
      type: Object as PropType<Toolbar>,
      default: () => ({
        refresh: false,
        fullScreen: false,
        setting: false,
      }),
    },
    title: {
      type: String,
      default: "",
    },
    fixed: {
      type: Object as PropType<Fixed>,
      default: () => ({}),
    },
  },
  setup(props, { slots }) {
    const children = useChildren(slots);
    const { node: paginationNode, dataSource } = usePagination(
      props.pagination,
      props.data
    );
    const { node: checkboxNode } = useCheckbox(props.rowSelection, dataSource);
    const { node: radioNode } = useRadio(props.rowSelection, dataSource);
    const elProTable = ref();
    const { node: sortableNode } = useSortable(
      props.sortable,
      elProTable,
      dataSource
    );
    const { fullScreen, node: fullScreenNode } = useFullScreen(props.toolbar);
    const { node: titleNode } = useTitle(props.title);
    const { node: refreshNode } = useRefresh(props.toolbar);
    const { node: settingNode } = useSetting(props.toolbar);
    const hasToolbar = computed(() => {
      return (
        props.title ||
        props.toolbar.refresh ||
        props.toolbar.fullScreen ||
        props.toolbar.setting
      );
    });

    useFixed(props.fixed, elProTable);

    return () => (
      <div
        ref={elProTable}
        class="el-pro-table"
        data-full-screen={fullScreen.value}
      >
        {hasToolbar.value && (
          <div class="toolbar">
            <div class="toolbar__left">{titleNode}</div>
            <div class="toolbar__right">
              {slots && slots.btn && slots.btn()}
              {refreshNode}
              {fullScreenNode}
              {settingNode}
            </div>
          </div>
        )}
        <ElTable data={dataSource.value}>
          {sortableNode}
          {checkboxNode}
          {radioNode}
          {children}
        </ElTable>
        {paginationNode()}
      </div>
    );
  },
});
