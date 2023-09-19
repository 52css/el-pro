# 优雅写hooks

## 1. script标签

* 引用、页面hooks放这里

## 2. script下的setup标签

* 页面变量、方法放这里

## 查看示例

:::demo

```vue
<script lang="ts">
// 1. 导入放最前面
import { ref, computed, watch } from 'vue'
// 正常是import进来的请求，这里为了演示，写成promise
const userInfoApi = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));
const userSchoolListApi = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));

// 2. 公用函数都定义到下面
export function useUserInfo() {
  const userInfo = ref();
  const setUserInfo = () => {
    userInfo.value = null;
    userInfoApi(1000).then((res) => {
      userInfo.value = {
        id: 1,
        name: "张三",
        age: Math.floor(Math.random() * 99) + 1,
      };
    });
  }

  setUserInfo();

  return [userInfo, setUserInfo];
}
export function useDoubleAge(userInfo) {
  return computed(() => (userInfo.value?.age || 0) * 2)
}

export function useUserSchoolList(userInfo) {
  const schoolList = ref();
  const setSchoolList = () => {
    userSchoolListApi(1000).then((res) => {
      schoolList.value = [{
        id: 1,
        date: "2023-01-12",
        school: "清华大学",
      }, {
        id: 2,
        date: "2000-10-12",
        school: "中国人民大学",
      }];
    });
  }
  watch(() => userInfo.value?.id, (id) => {
    if (!id) {
      schoolList.value = [];
      return;
    }

    setSchoolList();
  })

  return schoolList;
}
</script>
<script lang="ts" setup>
// 3. 页面方法都放到这里
const [userInfo, setUserInfo] = useUserInfo();
const doubleAge = useDoubleAge(userInfo);
const userSchoolList = useUserSchoolList(userInfo);
const onReload = () => {
  setUserInfo();
}
</script>
<template>
  <a href="javascript:void(0)" @click="onReload">再次请求</a>
  <h3>基本信息</h3>
  <ul>
    <li>用户名称：{{userInfo?.name}} </li>
    <li>用户年龄：{{userInfo?.age}} </li>
    <li>双倍年龄：{{doubleAge}} </li>
  </ul>
  <h3>学校列表</h3>
  <ul>
    <li v-for="item in userSchoolList" :key="item.id">
      {{item.date}} - {{item.school}}
    </li>
  </ul>
</template>
```

:::
