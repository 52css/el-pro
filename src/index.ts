import ElProButton from './components/el-pro-button'
import ElProCurd from './components/el-pro-curd/index.vue'
import ElProForm from './components/el-pro-form'
import ElProOperation from './components/el-pro-operation'
import ElProQuery from './components/el-pro-query'
import ElProStatus from './components/el-pro-status'
import ElProTable from './components/el-pro-table'

const components = [
  ElProButton,
  ElProCurd,
  ElProForm,
  ElProOperation,
  ElProQuery,
  ElProStatus,
  ElProTable,
]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
}
