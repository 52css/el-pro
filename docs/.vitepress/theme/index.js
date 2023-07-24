import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import ElProButton from '../../../src/components/el-pro-button/index.tsx'
import ElProForm from '../../../src/components/el-pro-form/index.tsx'
import '../../../src/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.component(ElProButton.name, ElProButton)
    ctx.app.component(ElProForm.name, ElProForm)
  }
}
