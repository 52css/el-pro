import { ref, defineComponent, Slots, onMounted, watch, cloneVNode, VNode } from "vue";
import { ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem } from "element-plus";
import {
  ArrowDown
} from "@element-plus/icons-vue";

import './index.css';

export default defineComponent({
  name: 'ElProOperation',
  props: {
  },
  setup(props, { slots, attrs }) {
    const elProOperation = ref()
    const rightNode = ref<any[]>([])
    let width = 0
    const parentWidth = ref(Infinity)

    onMounted(() => {
      parentWidth.value = elProOperation.value.clientWidth
    })

    // console.log('index.value ', index.value )

    return () => (
      <div ref={elProOperation} class="el-pro-operation">
        {/** 没有找打如何watch slots.default()改变事件，写到tsx中，重新得到 rightNode */}
        {slots.default && slots.default().map((x:any, xIndex) => {
          if (xIndex === 0) {
            width = 0
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

          rightNode.value[xIndex] = x
          if (x.left) {
            return x
          }
        })}
        {rightNode.value.find(x => !x.left) && (
          <ElDropdown trigger="click" hideOnClick={false}>
            {{
              default: () => (<div class="el-pro-operation__arrow">
                <ElIcon>
                  <ArrowDown />
                </ElIcon>
              </div>),
              dropdown: () => (<ElDropdownMenu>
                {rightNode.value.filter(x => !x.left).map(x => <ElDropdownItem>{x}</ElDropdownItem>)}
              </ElDropdownMenu>)
            }}
          </ElDropdown>
        )}
      </div>
    );
  },
});
