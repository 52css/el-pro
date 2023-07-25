import { ref, defineComponent, Slots, onMounted, Ref } from "vue";
import { ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem } from "element-plus";
import {
  ArrowDown
} from "@element-plus/icons-vue";

import './index.css';

function useChildren(slots: Slots, elProButtonGroup: Ref) {
  const children = slots && slots.default && slots.default();

  onMounted(() => {
    console.log('elProButtonGroup', elProButtonGroup.value.clientWidth)
    console.log('children', children)
    children?.forEach((child) => {
      console.log('child', child?.el)
    })
  })

  return {
    leftNode: () => children,
    rightNode: () => []
  }
}

export default defineComponent({
  name: 'ElProButtonGroup',
  props: {
  },
  setup(props, { slots, attrs }) {
    const elProButtonGroup = ref()
    const { leftNode, rightNode } = useChildren(slots, elProButtonGroup)
    // const children = slots && slots.default && slots.default();
    // children?.forEach((child) => {
    //   console.log('child', child)
    // })
    return () => (
      <div ref={elProButtonGroup} class="el-pro-button-group">
        {leftNode()}
        <ElDropdown>
          {{
            default: () => (<div class="el-pro-button-group__arrow">
              <ElIcon>
                <ArrowDown />
              </ElIcon>
            </div>),
            dropdown: () => (<ElDropdownMenu>
              {rightNode().map(x => <ElDropdownItem>{x}</ElDropdownItem>)}
            </ElDropdownMenu>)
          }}
        </ElDropdown>
      </div>
    );
  },
});
