import { defineComponent, h, renderSlot } from 'vue'
import { ElCol } from 'element-plus'

const ElProFormItem = defineComponent({
  // name: 'ElProFormItem',

  props: {
    span: {
      type: Number,
      default: 24,
    },
  },

  setup(props, { slots }) {
    return () => {
      const span = props.span
      const width = (24 / span) * 100 + '%'
      return <ElCol span={span} class="el-pro-form__item" style={{ width }}>
        {renderSlot(slots, 'default')}
      </ElCol>
    }
  },
})

export default ElProFormItem
