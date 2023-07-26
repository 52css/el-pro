import {
  defineComponent,
  ref,
  cloneVNode,
  VNode,
  Slots,
  onMounted,
  Ref,
  onUnmounted,
  PropType,
} from "vue";
import { ElForm, ElButton, ElIcon } from "element-plus";
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowDown } from "@element-plus/icons-vue";
import "./index.css";

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目
export type Col = boolean | number

function useChildren(slots: Slots, col: Col, elProQuery: Ref) {
  const defaultCol = ref(col);
  const line = 1;
  const hasMore = ref(false);
  const showMore = ref(false);
  const setCol = () => {
    const el = elProQuery.value;

    if (el.clientWidth >= 1380) {
      defaultCol.value = 3;
    } else if (el.clientWidth >= 1016) {
      defaultCol.value = 4;
    } else {
      defaultCol.value = 6;
    }
  };

  // 页面监控变化取得col值
  col === true && onMounted(() => {
    const observer = new ResizeObserver(function () {
      setCol();
    });

    observer.observe(elProQuery.value.$el);

    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return {
    node: () =>
      slots &&
      slots.default &&
      slots.default().map((child: VNode, childIndex) => {
        const halfSpan = (child?.props?.col ?? defaultCol.value)
        const showIndex = line * (12 / halfSpan) - 1;
        const pr = (100 * halfSpan) / 12;

        hasMore.value = childIndex >= showIndex;

        return <div class="el-pro-query__form-item" style={{
          display: childIndex >= showIndex && !showMore.value ? "none" : "block",
          float: "left",
          width: `${pr}%`,
        }}>
          {child}
        </div>
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
  emits: ['reset', 'query'],
  props: {
    col: {
      type: [Boolean, Number] as PropType<Col>,
      default: true
    },
  },
  setup(props, { slots, attrs, emit }) {
    const elProQuery = ref<FormInstance>();
    const { node, moreNode } = useChildren(slots,props.col, elProQuery);
    const handleReset = () => {
      elProQuery.value?.resetFields()
      emit('reset')
    }
    const handleQuery = () => {
      elProQuery.value?.validate().then(() => {
        emit('query')
      })
    }
    return () => (
      <ElForm ref={elProQuery} {...attrs} class="el-pro-query">
        <div>
          {node()}
        </div>
        <div class="el-pro-query__btn">
          <ElButton type="default" onClick={handleReset}>重置</ElButton>
          <ElButton type="primary" onClick={handleQuery}>查询</ElButton>
          {moreNode()}
        </div>
      </ElForm>
    );
  },
});
