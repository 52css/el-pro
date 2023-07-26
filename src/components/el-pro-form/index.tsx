import { defineComponent, cloneVNode, VNode, Slots, ref, Ref, onMounted, onUnmounted, PropType, toRefs } from "vue";
import { ElForm, ElCol } from "element-plus";
import type { FormInstance, FormRules } from 'element-plus'
import "./index.css";

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目
export type Col = boolean | number

function useChildren(slots: Slots, col: Col, elProForm: Ref, emit: (event: 'col', ...args: any[]) => void) {
  const defaultCol = ref(col);
  const setCol = () => {
    const el = elProForm.value?.$el;

    if (el.clientWidth >= 1380) {
      defaultCol.value = 3;
    } else if (el.clientWidth >= 1016) {
      defaultCol.value = 4;
    } else {
      defaultCol.value = 6;
    }
    emit('col', defaultCol.value, elProForm.value?.$el)
  };

  if (col === true) {
    onMounted(() => {
      const observer = new ResizeObserver(function () {
        setCol();
      });

      observer.observe(elProForm.value?.$el);

      onUnmounted(() => {
        observer.disconnect();
      });
    });
  } else {
    emit('col', col, elProForm.value?.$el)
  }


  return () => (
    slots &&
    slots.default &&
    slots.default().map((child: VNode) => {
      const span = (child?.props?.col ?? defaultCol.value) * 2
      const width = 24 / span * 100 + '%'
      return <ElCol span={span} class="el-pro-form__item" style={{ width }}>{child}</ElCol>;
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
  emits: ['col'],
  setup(props, { slots, attrs, expose, emit }) {
    const elProForm = ref<FormInstance>();
    const node = useChildren(slots, props.col, elProForm, emit);

    // 表单校验
    const validate = async () => {
      if (!elProForm.value) return;
      return await elProForm.value.validate();
    };

    // 表单重置
    const resetFields = () => {
      if (!elProForm.value) return;
      elProForm.value.resetFields();
    };

    // 暴漏方法
    expose({
      validate,
      resetFields
    });

    return () => (
      <ElForm ref={elProForm} {...attrs} class="el-pro-form">
        {node()}
      </ElForm>
    );
  },
});
