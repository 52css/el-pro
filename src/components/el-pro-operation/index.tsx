import { ref, defineComponent, Slots, onMounted, Ref, VNode, nextTick, renderSlot } from "vue";
import { ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem } from "element-plus";
import {
  ArrowDown
} from "@element-plus/icons-vue";
import { getChildren } from "../../utils"

import './index.css';

function useParentWidth(elProOperation: Ref) {
  const parentWidth = ref(Infinity)

  onMounted(() => {
    parentWidth.value = elProOperation.value.clientWidth
  })

  return parentWidth
}

function getLeftNodeAndRightNode(children: any, parentWidth: Ref, showRight: Ref) {
  let width = 0;
  let leftNode:VNode[] = [];
  let rightNode:VNode[] = [];

  children.forEach((x: any, xIndex: number) => {
    if (xIndex === 0) {
      width = 0;
      rightNode.length = 0;

      nextTick(() => {
        showRight.value = rightNode.length > 0
      })
    }

    const textLen = x.children.default && x.children.default()[0].children.length || 0
    const marginLeft = width === 0 ? 0 : 12
    const paddingLeft = 2;
    const textWidth = textLen * 15;
    const paddingRight = 2;
    if (textLen > 0) {
      width += marginLeft + paddingLeft + textWidth + paddingRight
    }

    if (width < parentWidth.value) {
      leftNode.push(x)
    } else {
      rightNode.push(x)
    }
  });

  return {
    leftNode,
    rightNode
  }
}

export default defineComponent({
  name: 'ElProOperation',
  props: {
  },
  setup(props, { slots, attrs }) {
    const elProOperation = ref()
    const parentWidth = useParentWidth(elProOperation)
    const showRight = ref(false)

    return () => {
      const children = getChildren(renderSlot(slots, 'default', { key: 0 }, () => []))
      const { leftNode, rightNode } = getLeftNodeAndRightNode(children, parentWidth, showRight)

      return <div ref={elProOperation} class="el-pro-operation">
        {leftNode}
        {showRight.value && (
          <ElDropdown trigger="click" hideOnClick={false}>
            {{
              default: () => (<div class="el-pro-operation__arrow">
                <ElIcon>
                  <ArrowDown />
                </ElIcon>
              </div>),
              dropdown: () => (<ElDropdownMenu>
                {rightNode.map((x: VNode) => <ElDropdownItem>{x}</ElDropdownItem>)}
              </ElDropdownMenu>)
            }}
          </ElDropdown>
        )}
      </div>
    };
  },
});
