import { ref, defineComponent, Slots, onMounted, Ref, VNode, nextTick } from "vue";
import { ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem } from "element-plus";
import {
  ArrowDown
} from "@element-plus/icons-vue";

import './index.css';

function useChildren(slots: Slots, elProOperation: Ref) {
  let width = 0
  const parentWidth = ref(Infinity)
  const showRight = ref(false)
  const rightNode: VNode[] = []
  // 没有找打如何watch slots.default()改变事件，写到tsx中，重新得到 rightNode
  const node = () => slots.default && slots.default().map((x:any, xIndex) => {
    if (xIndex === 0) {
      width = 0
      rightNode.length = 0
      // 重新获取右边信息
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

    x.left = width < parentWidth.value

    if (x.left) {
      return x
    }

    // 这个不能设置响应式数据，否则会死循环
    rightNode.push(x)
  })

  onMounted(() => {
    parentWidth.value = elProOperation.value.clientWidth
  })

  return {
    node,
    showRight,
    rightNode
  }

}

export default defineComponent({
  name: 'ElProOperation',
  props: {
  },
  setup(props, { slots, attrs }) {
    const elProOperation = ref()
    const { node, showRight, rightNode } = useChildren(slots, elProOperation)

    return () => (
      <div ref={elProOperation} class="el-pro-operation">
        {node()}
        {showRight.value && (
          <ElDropdown trigger="click" hideOnClick={false}>
            {{
              default: () => (<div class="el-pro-operation__arrow">
                <ElIcon>
                  <ArrowDown />
                </ElIcon>
              </div>),
              dropdown: () => (<ElDropdownMenu>
                {rightNode.map(x => <ElDropdownItem>{x}</ElDropdownItem>)}
              </ElDropdownMenu>)
            }}
          </ElDropdown>
        )}
      </div>
    );
  },
});
