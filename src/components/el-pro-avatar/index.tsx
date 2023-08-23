import { ref, defineComponent, renderSlot } from "vue";
import { ElAvatar } from "element-plus";

import './index.css'

export default defineComponent({
  name: 'ElProAvatar',
  props: {
    alt: {
      type: String,
    },
    altType: {
      type: String,
      default: 'text', // 可选 cqw
    }
  },
  setup(props, { slots, attrs }) {
    return () => {
      return <ElAvatar
        {...attrs}
        data-alt={props.alt}
        data-alt-type={props.altType}
        data-empty={attrs.src ? 'false' : 'true'}
      >
        {(props.altType === 'cqw' && !attrs.src) && (
          <div class="cqw__inner" data-alt={props.alt}>
            <div class="cqw__container">
              <span class="cqw__content">
                {props.alt}
              </span>
            </div>
          </div>
        )}
      </ElAvatar>
    };
  },
});
