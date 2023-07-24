import ElProButton from './components/el-pro-button'
import ElProForm from './components/el-pro-form'
import ElProQuery from './components/el-pro-query'
import ElProTable from './components/el-pro-table'

const components = [ElProButton, ElProForm, ElProQuery, ElProTable]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}
export default {
  install,
}
