import {
  VNode,
  VNodeArrayChildren,
  createVNode,
  isVNode,
  Fragment,
  DefineComponent,
} from "vue";

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

// retrieve the children out via a simple for loop
// the edge case here is that when users uses directives like <v-for>, <v-if>
// we need to go deeper until the child is not the Fragment type
export function extractChildren(
  children: VNodeArrayChildren,
  Item: DefineComponent,
  props = (x: any) => ({}),
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
              Item,
              props,
              `${parentKey + key}-`,
              extractedChildren
            )
          } else {
            extractedChildren.push(
              createVNode(
                Item,
                {
                  ...props(nested),
                  // span: (nested?.props?.col ?? defaultCol.value) * 2,
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
            ...props(child),
            // span: (child?.props?.col ?? defaultCol.value) * 2,
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