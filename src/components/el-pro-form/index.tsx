import { defineComponent, cloneVNode, VNode, Slots, ref, Ref, onMounted, onUnmounted, PropType } from "vue";
import { ElForm, ElCol } from "element-plus";
import "./index.css";

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目
export type Col = boolean | number

function useChildren(slots: Slots, col: Col, elProForm: Ref) {
  const defaultCol = ref(col);
  const setCol = () => {
    const el = elProForm.value;

    if (el.clientWidth >= 1380) {
      defaultCol.value = 3;
    } else if (el.clientWidth >= 1016) {
      defaultCol.value = 4;
    } else {
      defaultCol.value = 6;
    }
  };

  col === true && onMounted(() => {
    const observer = new ResizeObserver(function () {
      setCol();
    });

    observer.observe(elProForm.value?.$el);

    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return () => (
    slots &&
    slots.default &&
    slots.default().map((child: VNode) => {
      const span = (child?.props?.col ?? defaultCol.value) * 2
      return <ElCol span={span} class="el-pro-form__item">{child}</ElCol>;
    })
  );
}

export default defineComponent({
  name: 'ElProForm',
  props: {
    col: {
      type: [Boolean, Number] as PropType<Col>,
      default: 12
    },
  },
  setup(props, { slots, attrs }) {
    const elProForm = ref(null);
    const node = useChildren(slots, props.col, elProForm);
    return () => (
      <ElForm ref={elProForm} {...attrs} class="el-pro-form">
        {node()}
      </ElForm>
    );
  },
});
