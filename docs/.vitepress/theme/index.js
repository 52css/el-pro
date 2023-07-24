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
import '../../../src/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.use(ElementPlus)
    ctx.app.component(ElProButton.name, ElProButton)
    ctx.app.component(ElProForm.name, ElProForm)
    ctx.app.component(ElProQuery.name, ElProQuery)
    ctx.app.component(ElProTable.name, ElProTable)
  }
}
