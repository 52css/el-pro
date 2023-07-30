import { defineComponent, h, renderSlot } from 'vue'

const ElProQueryItem = defineComponent({
  name: 'ElProQueryItem',

  props: {
  },

  setup(props, { slots }) {
    return () => {
      return renderSlot(slots, 'default')
    }
  },
})

export default ElProQueryItem
