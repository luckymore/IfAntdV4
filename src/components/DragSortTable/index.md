# DragSortTable 拖动排序表格

`DragSortTable`排序采用的[react-sortable-hoc](https://www.npmjs.com/package/react-sortable-hoc)，需要提供`rowKey`来确定数据的唯一值，否则不能正常工作。


## Demo

### 拖拽排序
<code src="./demos/index.js"></code>

### row select
<code src="./demos/row-select.js" />

### 固定列
<!-- TODO: 不支持固定列 -->
<code src="./demos/fixed.js" />

### 自定义把手
<code src="./demos/custom-handle.js" />

### 拖拽排序编辑表格
<code src="./demos/edit.js" />

## API

| 属性                  | 描述                                                                                 | 类型                                            | 默认值                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| dragSortKey           | 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序                    | `any`                                           | -                                                                                              |
| dragSortHandlerRender | 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 | `(rowData: T, idx: number) => React.ReactNode`  | `<MenuOutlined className="dragSortDefaultHandle" style={{ cursor: 'grab', color: '#999' }} />` |
| onDragSortEnd         | 拖动排序完成回调                                                                     | `(newDataSource: T[]) => Promise<void> \| void` | -                                                                                              |

