import { ElCheckbox, ElCheckboxGroup, ElFormItem, ElInput, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus';
import { FormItem } from './form-item'
import { defineComponent, PropType } from 'vue'


const ElProDynamicForm = defineComponent({
  name: 'ElProDynamicForm',

  props: {
    formState: {
      type: Object as PropType<FormItem>,
      default: null
    },
  },

  setup(props) {

    function getNext(): FormItem | null {
      let current : FormItem | null = props.formState || null;

      if (!current) {
        return null;
      }

      const acients = [];

      acients.unshift(current);

      while ((current = current.parent)) {
        acients.unshift(current);
      }

      return props.formState!.next(props.formState!, acients);
    }

    return () => {
      return  props.formState && (
        <>
          <ElFormItem
            label={props.formState.payload.label}
            >
            {props.formState.type === 'input' && (
              <ElInput v-model={props.formState.payload.value} />
            )}
            {props.formState.type === 'checkbox' && (
              <ElCheckboxGroup v-model={props.formState.payload.value}>
                {props.formState.payload.options.map(x => <ElCheckbox label={x.value}>{x.label}</ElCheckbox>)}
              </ElCheckboxGroup>
            )}
            {props.formState.type === 'radio' && (
              <ElRadioGroup v-model={props.formState.payload.value}>
                {props.formState.payload.options.map(x => <ElRadio label={x.value}>{x.label}</ElRadio>)}
              </ElRadioGroup>
            )}
            {props.formState.type === 'select' && (
              <ElSelect v-model={props.formState.payload.value}>
                {props.formState.payload.options.map(x => <ElOption label={x.label} value={x.value}></ElOption>)}
              </ElSelect>
            )}
          </ElFormItem>
          <ElProDynamicForm form-state={getNext()} />
        </>
      )
    }
  },
})

export default ElProDynamicForm