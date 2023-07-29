import {
  defineComponent,
  ref,
  VNode,
  PropType,
  Comment,
} from "vue";
import ElProForm from '../el-pro-form'
import { ElForm, ElButton, ElIcon } from "element-plus";
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowDown } from "@element-plus/icons-vue";
import "./index.css";

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目
export type Col = boolean | number

export default defineComponent({
  name: 'ElProQuery',
  emits: ['reset', 'query'],
  props: {
    col: {
      type: [Boolean, Number] as PropType<Col>,
      default: true
    },
    line: {
      type: Number,
      default: 1
    }
  },
  setup(props, { slots, attrs, emit }) {
    const elProQuery = ref<FormInstance>();
    const hasMore = ref(false);
    const showMore = ref(false);
    const showIndex = ref(-1)
    // const { node, moreNode } = useChildren(slots,props.col, elProQuery);
    const handleReset = () => {
      elProQuery.value?.resetFields()
      emit('reset')
    }
    const handleQuery = () => {
      elProQuery.value?.validate().then(() => {
        emit('query')
      })
    }
    const handleCol = (col:number) => {
      showIndex.value = props.line * (12 / col) - 1;
      const childrenLength = slots.default && slots.default().filter(x => x.type !== Comment).length || 0
      hasMore.value = childrenLength > showIndex.value;
    }
    return () => (
      <div class="el-pro-query">
        <ElProForm ref={elProQuery} col={props.col} {...attrs} class="el-pro-query__form" onCol={handleCol}>
          {{default: () => slots.default && slots.default().map((child: VNode, childIndex) => {
            if (childIndex >= showIndex.value && !showMore.value) {
              return null;
            }

            return child
          })}}
        </ElProForm>
        <div class="el-pro-query__btn">
          <ElButton type="default" onClick={handleReset}>重置</ElButton>
          <ElButton type="primary" onClick={handleQuery}>查询</ElButton>
          { hasMore.value && (
            <div
              onClick={() => {
                showMore.value = !showMore.value;
              }}
              class="el-pro-query__more"
            >
              {showMore.value ? "收起" : "展开"}
              <ElIcon
                class={`el-pro-query__arrow ${
                  showMore.value && "el-pro-query__arrow--fan"
                }`}
              >
                <ArrowDown />
              </ElIcon>
            </div>)}
        </div>
      </div>
    );
  },
});
