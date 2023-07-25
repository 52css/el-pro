import { ref, defineComponent } from "vue";
import { ElButton, ElPopconfirm } from "element-plus";

function useClick(onClick: any) {
  const loading = ref(false);
  const isPromise = (obj: any) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const AsyncFunction = (async () => {}).constructor;
    return obj instanceof Promise || obj instanceof AsyncFunction === true;
  };
  const handleClick = () => {
    const fn = onClick;
    if (!fn || loading.value) {
      return;
    }

    loading.value = true;

    const execFn = fn.call(null, event);

    if (isPromise(execFn)) {
      execFn.finally(() => {
        loading.value = false;
      });
    } else {
      // 延迟300ms，关闭loading
      setTimeout(() => {
        loading.value = false;
      }, 300);
    }
  };

  return {
    loading,
    handleClick,
  };
}

export default defineComponent({
  name: 'ElProButton',
  props: {
    confirm: String,
    onConfirm: Function,
    onCancel: Function,
    onClick: Function,
  },
  setup(props, { slots, attrs }) {
    const { loading, handleClick } = useClick(props.onClick);
    const children = slots && slots.default && slots.default();
    const handleConfirm = (event: Event) => {
      props?.onConfirm?.(event)
    }
    const handleCancel = (event: Event) => {
      props?.onCancel?.(event)
    }
    return () => props.confirm ? 
      <ElPopconfirm title={props.confirm} onConfirm={handleConfirm} onCancel={handleCancel}>
        {{
          reference: () => (<ElButton {...attrs} loading={loading.value} onClick={handleClick}>
            {children}
          </ElButton>)
        }}
      </ElPopconfirm> :
      <ElButton {...attrs} loading={loading.value} onClick={handleClick}>
        {children}
      </ElButton>;
  },
});
