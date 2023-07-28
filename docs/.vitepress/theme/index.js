import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import ElProButton from '../../../src/components/el-pro-button/index.tsx'
import ElProForm from '../../../src/components/el-pro-form/index.tsx'
import ElProQuery from '../../../src/components/el-pro-query/index.tsx'
import ElProTable from '../../../src/components/el-pro-table/index.tsx'
import ElProOperation from '../../../src/components/el-pro-operation/index.tsx'
import ElProStatus from '../../../src/components/el-pro-status/index.tsx'
import '../../../src/styles/index.css'

const components = [ElProButton, ElProForm, ElProQuery, ElProTable, ElProOperation, ElProStatus]

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.use(ElementPlus)
    components.forEach(component => {
      ctx.app.component(component.name, component)
    })
  }
}
