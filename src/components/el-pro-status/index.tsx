import { ref, defineComponent, PropType, computed } from "vue";

import './index.css'

export type Status = 'success' | 'error' | 'info' | 'processing' | 'warning'
export type Type = 'dot' | 'color' | 'background' | 'round' | 'border'
export type Color = 'pink' | 'red' | 'yellow' | 'orange' | 'cyan' | 'green' | 'blue' | 'purple' | 'geekblue' | 'magenta' | 'volcano' | 'gold' | 'lime'
export type ColorMap = {
  [key in string]: string
}

export default defineComponent({
  name: 'ElProStatus',
  props: {
    status: {
      type: String,
      default: 'info'
    },
    type: {
      type: String as PropType<Type>,
      default: 'dot'
    }
  },
  setup(props, { slots, attrs }) {
    const statusColor = computed(() => {
      const colorMap:ColorMap = {
        'success': '#52c41a',
        'error': '#f5222d',
        'info': '#d9d9d9',
        'processing': '#1890ff',
        'warning': '#faad14',
        'pink': '#eb2f96',
        'red': '#f5222d',
        'yellow': '#fadb14',
        'orange': '#fa8c16',
        'cyan': '#13c2c2',
        'green': '#52c41a',
        'blue': '#1890ff',
        'purple': '#722ed1',
        'geekblue': '#2f54eb',
        'magenta': '#eb2f96',
        'volcano': '#fa541c',
        'gold': '#faad14',
        'lime': '#a0d911'
      }

      return colorMap[props.status] || props.status
    })
    return () => <div class="el-pro-status" data-status={props.status} data-type={props.type} style={{'--status-color': statusColor.value}}>
      {slots && slots.default && slots.default()}
    </div>;
  },
});
