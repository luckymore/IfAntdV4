import React, { useState } from 'react'
import { Switch } from 'antd'
import DragTable from '../index'

const columns = [
  {
    title: '排序',
    key: 'sort'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    className: 'drag-visible',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

const App = () => {
  const [dataSource1, setDatasource1] = useState(data)
  const [canDrag, setCanDrag] = useState(true)

  const handleDragSortEnd1 = newDataSource => {
    console.log('排序后的数据', newDataSource)
    setDatasource1(newDataSource)
  }

  return (
    <>
      允许拖拽：<Switch checked={canDrag} onChange={setCanDrag}></Switch>
      <DragTable
        dataSource={dataSource1}
        columns={columns}
        rowKey="key"
        dragSortKey="sort"
        disabled={!canDrag}
        onDragSortEnd={handleDragSortEnd1}
      />
    </>
  )
}

export default App
