import { defineComponent, cloneVNode, VNode, Slots } from "vue";
import { ElForm } from "element-plus";
import "./index.css";

function useChildren(slots: Slots) {
  return (
    slots &&
    slots.default &&
    slots.default().map((child: VNode) => {
      const pr = (100 * (child?.props?.col || 12)) / 12;
      return cloneVNode(child, {
        style: {
          maxWidth: `${pr}%`,
          flex: `0 0 ${pr}%`,
        },
      });
    })
  );
}

export default defineComponent({
  name: 'ElProForm',
  setup(props, { slots, attrs }) {
    const children = useChildren(slots);
    return () => (
      <ElForm {...attrs} class="el-pro-form">
        {children}
      </ElForm>
    );
  },
});
