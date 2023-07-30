import {
  defineComponent,
  ref,
  VNode,
  PropType,
  Comment,
  nextTick,
  renderSlot,
} from "vue";
import ElProForm from '../el-pro-form'
import { ElForm, ElButton, ElIcon } from "element-plus";
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowDown } from "@element-plus/icons-vue";
import { getChildren, extractChildren } from "../../utils"
import Item from './item'
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
    const showIndex = ref(-1);
    let extractChild: any[] = []
    const defaultCol = ref()
    const handleReset = () => {
      elProQuery.value?.resetFields()
      emit('reset')
    }
    const handleQuery = () => {
      elProQuery.value?.validate((valid, fields) => {
        if (valid) {
          emit('query', fields)
        } else {
          console.log('error submit!', fields)
        }
      })
    }
    const handleCol = (col:number) => {
      defaultCol.value = col
      showIndex.value = props.line * (12 / col) - 1;
      const childrenLength = extractChild.filter(x => x.type !== Comment).length || 0
      hasMore.value = childrenLength > showIndex.value;
    }
    return () => {
      const children = getChildren(renderSlot(slots, 'default', { key: 0 }, () => []))
      extractChild = extractChildren(children, Item)

      return <div class="el-pro-query">
        <ElProForm ref={elProQuery} col={props.col} {...attrs} class="el-pro-query__form" onCol={handleCol}>
          {{default: () => extractChild.map((child: VNode, childIndex: number) => {
            if (childIndex === 0) {
              nextTick(() => {
                defaultCol.value && handleCol(defaultCol.value)
              })
            }
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
    };
  },
});
