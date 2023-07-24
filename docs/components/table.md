# Table 表格

## 普通表格

左边、右边固定、固定最小宽度

:::demo

```vue
<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
</script>
<template>
  <el-pro-table :data="tableData">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 多选

:::demo

```vue
<script lang="ts" setup>
import type { Key } from "@/components/el-pro-table";
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handleRowSelect = (selectedRowKeys: Key[]) => {
  console.log("selectedRowKeys", selectedRowKeys);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :row-selection="{
      type: 'checkbox',
      selectedRowKeys: [1, 2],
      onChange: handleRowSelect,
    }"
  >
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 单选

:::demo

```vue
<script lang="ts" setup>
import type { Key } from "@/components/el-pro-table";
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handleRowSelect = (selectedRowKeys: Key[]) => {
  console.log("selectedRowKeys", selectedRowKeys);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :row-selection="{
      type: 'radio',
      selectedRowKeys: [],
      onChange: handleRowSelect,
    }"
  >
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 后端分页

:::demo

```vue
<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handlePaginationSizeChange = (val: number) => {
  console.log("pageSize", val);
};
const handlePaginationCurrentChange = (val: number) => {
  console.log("currentPage", val);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :pagination="{
      total: 100,
      onSizeChange: handlePaginationSizeChange,
      onCurrentChange: handlePaginationCurrentChange,
    }"
  >
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 前端分页

:::demo

```vue
<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handlePaginationSizeChange = (val: number) => {
  console.log("pageSize", val);
};
const handlePaginationCurrentChange = (val: number) => {
  console.log("currentPage", val);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :pagination="{
      virtual: true,
      pageSize: 2,
      onSizeChange: handlePaginationSizeChange,
      onCurrentChange: handlePaginationCurrentChange,
    }"
  >
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 支持拖拽

:::demo

```vue
<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handleSortableDrag = ({oldIndex, newIndex, dataSource}) => {
  console.log("oldIndex", oldIndex);
  console.log("newIndex", newIndex);
  console.log("dataSource", dataSource);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :sortable="{
      drag: true,
      onDrag: handleSortableDrag,
    }"
  >
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 支持toolbar

:::demo

```vue
<script lang="ts" setup>
const tableData = [
  {
    id: 1,
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 0,
  },
  {
    id: 2,
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 1,
  },
  {
    id: 3,
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
    status: 2,
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
    status: 0,
  },
];
const handleToolbarRefresh = (refresh) => {
  console.log("refresh", refresh);
};
const handleToolbarFullScreen = (fullScreen) => {
  console.log("fullScreen", fullScreen);
};
const handleToolbarSetting = (setting) => {
  console.log("setting", setting);
};
</script>
<template>
  <el-pro-table
    :data="tableData"
    :toolbar="{
      refresh: true,
      onRefresh: handleToolbarRefresh,
      fullScreen: true,
      onFullScreen: handleToolbarFullScreen,
      setting: true,
      onSetting: handleToolbarSetting,
    }"
    title="查询表格"
  >
    <template v-slot:btn>
      <el-button type="primary" icon="plus"> 新增 </el-button>
    </template>
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## 支持固定

表头固定、分页固定

:::demo

```vue
<script lang="ts" setup>
const tableData = [];
// 模拟数据
for (let index = 0; index < 49; index++) {
  tableData.push({
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  });
}
</script>
<template>
  <el-pro-table
    :data="tableData"
    :fixed="{
      header: true,
      footer: true,
    }"
    :pagination="{ total: 100, pageSize: 50 }"
  >
    <template v-slot:btn>
      <el-button type="primary" icon="plus"> 新增 </el-button>
    </template>
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleClick">
          编辑
        </el-button>
        <el-button v-if="row.status === 2" link type="primary" size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-pro-table>
</template>
```

:::

## Table API

### Attributes

```ts
export type Key = number | string;

export interface Data {
  id: Key;
  [key: string]: any;
}

export interface RowSelection {
  type?: "checkbox" | "radio";
  selectedRowKeys?: Key[];
  onChange?: (selectedRowKeys: Key[], selectedRows: Data[]) => void;
}

export interface Pagination {
  total?: number; // 后端分页必须传递total
  pageSize?: number;
  virtual?: boolean; // 前端分页必须设置true
  onSizeChange?: (pageSize: number) => void;
  onCurrentChange?: (currentPage: number) => void;
}

export interface Toolbar {
  refresh?: boolean;
  fullScreen?: boolean;
  setting?: boolean;
  onFullScreen?: (fullScreen: boolean) => void;
  onRefresh?: (refresh: boolean) => void;
  onSetting?: (setting: boolean) => void;
}

export interface Drag {
  oldIndex: number;
  newIndex: number;
  dataSource: Data[];
}

export interface Sortable {
  drag?: boolean;
  onDrag?: (drag: Drag) => void;
}

export interface Fixed {
  header?: boolean;
  onHeaderFixed?: () => void;
  onHeaderUnfixed?: () => void;
  footer?: boolean;
  onFooterFixed?: () => void;
  onFooterUnfixed?: () => void;
}
```

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| data    | 数据列表   | Data[]  | —                               | `[]` |
| rowSelection    | 选中(单选和多选)   | RowSelection  | — | `{selectedRowKeys: []}` |
| pagination    | 分页   | Pagination  | — | `{pageSize: 10}` |
| sortable    | 排序  | Sortable  | — | `{}` |
| toolbar    | 操作按钮   | Toolbar  | — | `{}` |
| title    | 标题   | string  | — | `''` |
| fixed    | 固定   | Fixed  | — | `{}` |
<!-- | type    | 类型   | string  | primary / success / warning / info / danger / text | primary | -->
<!-- | loading | 加载中 | boolean | —                                                  | false   | -->

