import {
  defineComponent,
  ref,
  cloneVNode,
  VNode,
  Slots,
  onMounted,
  Ref,
  onUnmounted,
} from "vue";
import { ElForm, ElFormItem, ElButton, ElIcon } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
import "./index.css";

function useChildren(elProQuery: Ref, slots: Slots) {
  const col = ref(4);
  const line = 1;
  const hasMore = ref(false);
  const showMore = ref(false);
  const setCol = () => {
    let count;
    const el = elProQuery.value;

    if (el.clientWidth >= 1380) {
      count = 4;
    } else if (el.clientWidth >= 1016) {
      count = 3;
    } else {
      count = 2;
    }

    col.value = 12 / count;
  };
  // 页面监控变化取得col值
  onMounted(() => {
    const observer = new ResizeObserver(function () {
      setCol();
    });

    observer.observe(elProQuery.value);

    onUnmounted(() => {
      observer.disconnect();
    });
  });
  return {
    node: () =>
      slots &&
      slots.default &&
      slots.default().map((child: VNode, childIndex) => {
        const showCol = line * (12 / col.value) - 1;
        const pr = (100 * (child?.props?.col || col.value)) / 12;

        hasMore.value = childIndex >= showCol;

        return cloneVNode(child, {
          style: {
            display: childIndex >= showCol && !showMore.value ? "none" : "flex",
            maxWidth: `${pr}%`,
            flex: `0 0 ${pr}%`,
          },
        });
      }),
    col,
    hasMore,
    showMore,
    moreNode: () =>
      hasMore.value && (
        <div
          onClick={() => {
            showMore.value = !showMore.value;
          }}
          class="el-pro-query__more"
        >
          {showMore.value ? "收起" : "展开"}
          <ElIcon
            class={`el-pro-query__arrow ${
              showMore.value && "el-pro-query__arrow--fan"
            }`}
          >
            <ArrowDown />
          </ElIcon>
        </div>
      ),
  };
}

export default defineComponent({
  name: 'ElProQuery',
  setup(props, { slots, attrs }) {
    const elProQuery = ref();
    const { node, moreNode } = useChildren(elProQuery, slots);
    return () => (
      <div ref={elProQuery} class="el-pro-query">
        <ElForm {...attrs} class="el-pro-query__form">
          {node()}
          <ElFormItem class="el-pro-query__btn">
            <ElButton type="default">重置</ElButton>
            <ElButton type="primary">查询</ElButton>
            {moreNode()}
          </ElFormItem>
        </ElForm>
      </div>
    );
  },
});
