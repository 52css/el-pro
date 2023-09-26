import { ElCheckbox, ElCheckboxGroup, ElFormItem, ElInput, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus';
import { FormItem } from './create-form-item'
import { defineComponent, PropType } from 'vue'


const ElProFormItem = defineComponent({
  name: 'ElProFormItem',

  props: {
    formState: {
      type: Object as PropType<FormItem>,
      default: null
    },
    formModel: {
      type: Object,
      default: () => ({})
    }
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
            required={props.formState.payload.required}
            prop={props.formState.payload.prop}
            rules={props.formState.payload.rules}
          >
            {props.formState.type === 'input' && (
              <ElInput v-model={props.formModel[props.formState.payload.prop]} />
            )}
            {props.formState.type === 'checkbox' && (
              <ElCheckboxGroup v-model={props.formModel[props.formState.payload.prop]}>
                {props.formState.payload.options.map(x => <ElCheckbox label={x.value}>{x.label}</ElCheckbox>)}
              </ElCheckboxGroup>
            )}
            {props.formState.type === 'radio' && (
              <ElRadioGroup v-model={props.formModel[props.formState.payload.prop]}>
                {props.formState.payload.options.map(x => <ElRadio label={x.value}>{x.label}</ElRadio>)}
              </ElRadioGroup>
            )}
            {props.formState.type === 'select' && (
              <ElSelect v-model={props.formModel[props.formState.payload.prop]}>
                {props.formState.payload.options.map(x => <ElOption label={x.label} value={x.value}></ElOption>)}
              </ElSelect>
            )}
          </ElFormItem>
          <ElProFormItem form-state={getNext()} form-model={props.formModel} />
        </>
      )
    }
  },
})

export default ElProFormItem