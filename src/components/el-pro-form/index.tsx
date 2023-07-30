import {
  defineComponent,
  cloneVNode,
  VNode,
  Slots,
  ref,
  Ref,
  onMounted,
  onUnmounted,
  PropType,
  renderSlot,
  VNodeArrayChildren,
  VNodeChild,
  createVNode,
  isVNode,
  Fragment,
} from "vue";
import { ElForm, ElCol } from "element-plus";
import Item from './item'
import type { FormInstance, FormRules } from 'element-plus'
import "./index.css";
import { getChildren, extractChildren } from "../../utils"

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目
export type Col = boolean | number

function useCol(col: Col, elProForm: Ref, emit: (event: 'col', ...args: any[]) => void) {
  const defaultCol = ref();
  const setCol = () => {
    const el = elProForm.value?.$el;

    if (el.clientWidth >= 1380) {
      defaultCol.value = 3;
    } else if (el.clientWidth >= 1016) {
      defaultCol.value = 4;
    } else {
      defaultCol.value = 6;
    }
    emit('col', defaultCol.value)
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
    defaultCol.value = col
    emit('col', col)
  }

  return {
    defaultCol
  }
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
    const { defaultCol } = useCol(props.col, elProForm, emit)

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

    return () => {
      const children = getChildren(renderSlot(slots, 'default', { key: 0 }, () => []))
      const extractChild = extractChildren(children, Item, (x) => ({
        span: (x?.props?.col ?? defaultCol.value) * 2,
      }))

      return <ElForm ref={elProForm} {...attrs} class="el-pro-form">
        {extractChild}
      </ElForm>
    };
  },
});
