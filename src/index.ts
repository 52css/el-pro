import type { App } from 'vue';
import {
  ElProButton,
  // ElProCurd,
  ElProForm,
  ElProOperation,
  ElProQuery,
  ElProStatus,
  ElProTable,
} from "./components";

const components = [
  ElProButton,
  // ElProCurd,
  ElProForm,
  ElProOperation,
  ElProQuery,
  ElProStatus,
  ElProTable,
]

export default {
  install: (app: App) => {
    components.forEach(component => {
      app.component(component.name, component);
    })
  }
};

export {
  ElProButton,
  // ElProCurd,
  ElProForm,
  ElProOperation,
  ElProQuery,
  ElProStatus,
  ElProTable,
};