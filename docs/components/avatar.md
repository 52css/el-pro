# Avatar 头像

## 基本用法

如果没有url显示alt的首字母

:::demo

```vue
<script lang="ts" setup>
  const src = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
</script>
<template>
  <el-pro-avatar alt="淘" />
  <el-pro-avatar shape="square" alt="淘" />
  <el-pro-avatar alt="前端" />
  <el-pro-avatar shape="square" alt="前端" />
  <el-pro-avatar alt="设计部" />
  <el-pro-avatar shape="square" alt="设计部" />
  <el-pro-avatar alt="Web" />
  <el-pro-avatar shape="square" alt="Web" />
  <el-pro-avatar alt="text" :src="src" />
  <el-pro-avatar shape="square" alt="text" :src="src" />
</template>
```

:::

## Avatar API

### Attributes

| Name    | Description                                               | Type                                                              | Default |
|---------|-----------------------------------------------------------|-------------------------------------------------------------------|---------|
| icon    | representation type to icon, more info on icon component. | ^[string] / ^[Component]                                          | —       |
| size    | avatar size.                                              | ^[number] / ^[enum]`'large' \| 'default' \| 'small'`              | default |
| shape   | avatar shape.                                             | ^[enum]`'circle' \| 'square'`                                     | circle  |
| src     | the source of the image for an image avatar.              | `string`                                                          | —       |
| src-set | native attribute `srcset` of image avatar.                | `string`                                                          | —       |
| alt     | native attribute `alt` of image avatar.                   | `string`                                                          | —       |
| fit     | set how the image fit its container for an image avatar.  | ^[enum]`'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | cover   |

### Events

| Name  | Description                    | Type                            |
|-------|--------------------------------|---------------------------------|
| error | trigger when image load error. | ^[Function]`(e: Event) => void` |

### Slots

| Name    | Description               |
|---------|---------------------------|
| default | customize avatar content. |

