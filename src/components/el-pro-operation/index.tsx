import { ref, defineComponent, Slots, onMounted } from "vue";
import { ElDropdown, ElIcon, ElDropdownMenu, ElDropdownItem } from "element-plus";
import {
  ArrowDown
} from "@element-plus/icons-vue";

import './index.css';

// function useChildren(slots: Slots, elProOperation: Ref) {
//   const children = slots && slots.default && slots.default();

//   onMounted(() => {
//     console.log('elProOperation', elProOperation.value.clientWidth)
//     console.log('children', children)
//     children?.forEach((child) => {
//       console.log('child', child?.el)
//     })
//   })

//   return {
//     leftNode: () => children,
//     rightNode: () => []
//   }
// }

function useChildren(slots: Slots) {
  let width = 0
  const children = slots &&
    slots.default &&
    slots.default().map((x: any) => {
      const textLen = x.children.default && x.children.default()[0].children.length || 0
      const marginLeft = width === 0 ? 0 : 12
      const paddingLeft = 2;
      const textWidth = textLen * 15;
      const paddingRight = 2;
      if (textLen > 0) {
        width += marginLeft + paddingLeft + textWidth + paddingRight
      }
      x.width = width
      return x;
    });

  return children;
}

export default defineComponent({
  name: 'ElProOperation',
  props: {
  },
  setup(props, { slots, attrs }) {
    const elProOperation = ref()
    const children = useChildren(slots) || []
    const index = ref(-1)

    onMounted(() => {
      const parentWidth = elProOperation.value.clientWidth

      children?.forEach((child, childIndex) => {
        if (child.width < parentWidth) {
          index.value = childIndex
        }
      })
    })

    // console.log('index.value ', index.value )

    return () => (
      <div ref={elProOperation} class="el-pro-operation">
        {children?.slice(0, index.value + 1)}
        {index.value < children.length - 1 && (
          <ElDropdown trigger="click" hideOnClick={false}>
            {{
              default: () => (<div class="el-pro-operation__arrow">
                <ElIcon>
                  <ArrowDown />
                </ElIcon>
              </div>),
              dropdown: () => (<ElDropdownMenu>
                {children?.slice(index.value + 1).map(x => <ElDropdownItem>{x}</ElDropdownItem>)}
              </ElDropdownMenu>)
            }}
          </ElDropdown>
        )}
      </div>
    );
  },
});
