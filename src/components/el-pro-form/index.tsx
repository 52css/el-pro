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

function getChildren(children: any) {
  if ((children.children ?? []).length === 0) return []

  if (Array.isArray(children.children)) {
    return children.children
  }

  return [children.children]
}

export function isArray<T>(val: unknown): val is Array<T> {
  return Array.isArray(val)
}


export function isFragment(node: VNode): boolean
export function isFragment(node: unknown): node is VNode
export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment
}

export function isText(node: VNode): boolean
export function isText(node: unknown): node is VNode
export function isText(node: unknown): node is VNode {
  return isVNode(node) && node.type === Text
}

export function isComment(node: VNode): boolean
export function isComment(node: unknown): node is VNode
export function isComment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Comment
}

const TEMPLATE = 'template'
export function isTemplate(node: VNode): boolean
export function isTemplate(node: unknown): node is VNode
export function isTemplate(node: unknown): node is VNode {
  return isVNode(node) && node.type === TEMPLATE
}

/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export function isValidElementNode(node: VNode): boolean
export function isValidElementNode(node: unknown): node is VNode
export function isValidElementNode(node: unknown): node is VNode {
  return isVNode(node) && !isFragment(node) && !isComment(node)
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

    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go deeper until the child is not the Fragment type
    function extractChildren(
      children: VNodeArrayChildren,
      parentKey = '',
      extractedChildren: VNode[] = []
    ) {
      children.forEach((child, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              if (isFragment(nested) && isArray(nested.children)) {
                extractChildren(
                  nested.children,
                  `${parentKey + key}-`,
                  extractedChildren
                )
              } else {
                extractedChildren.push(
                  createVNode(
                    Item,
                    {
                      span: (nested?.props?.col ?? defaultCol.value) * 2,
                      key: `nested-${parentKey + key}`,
                    },
                    {
                      default: () => [nested],
                    },
                  )
                )
              }
            })
          }
          // if the current child is valid vnode, then append this current vnode
          // to item as child node.
        } else if (isValidElementNode(child)) {
          extractedChildren.push(
            createVNode(
              Item,
              {
                span: (child?.props?.col ?? defaultCol.value) * 2,
                key: `LoopKey${parentKey + loopKey}`,
              },
              {
                default: () => [child],
              },
            )
          )
        }
      })

      return extractedChildren
    }

    return () => {
      const children = getChildren(renderSlot(slots, 'default', { key: 0 }, () => []))
      const extractChild = extractChildren(children)

      return <ElForm ref={elProForm} {...attrs} class="el-pro-form">
        {extractChild}
      </ElForm>
    };
  },
});
