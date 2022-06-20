import { useState } from 'react'
import { message, Icon } from 'antd'
import DragSortTable from '../index'

const data = [
  {
    key: 'keykey1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: 'keykey2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    index: 1,
  },
  {
    key: 'keykey3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    index: 2,
  },
]
export default () => {
  const columns = [
    {
      title: '排序',
      dataIndex: 'sort',
      render: (dom, rowData, index) => {
        return <span className="customRender">{`自定义Render[${rowData.name}-${index}]`}</span>
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      className: 'drag-visible',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
  ]
  const columns2 = [
    {
      title: '排序',
      dataIndex: 'sort',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      className: 'drag-visible',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
  ]
  const [dataSource1, setDatasource1] = useState(data)
  const [dataSource2, setDatasource2] = useState(data)
  const handleDragSortEnd1 = newDataSource => {
    console.log('排序后的数据', newDataSource)
    setDatasource1(newDataSource)
    message.success('修改列表排序成功')
  }
  const handleDragSortEnd2 = newDataSource => {
    console.log('排序后的数据', newDataSource)
    setDatasource2(newDataSource)
    message.success('修改列表排序成功')
  }
  const dragHandleRender = (rowData, idx) => (
    <>
      <Icon type="menu" style={{ cursor: 'grab', color: 'gold' }} />
      &nbsp;{idx + 1} - {rowData.name}
    </>
  )
  return (
    <>
      <h4>默认把手</h4>
      <DragSortTable
        columns={columns}
        rowKey="key"
        dataSource={dataSource1}
        dragSortKey="sort"
        onDragSortEnd={handleDragSortEnd1}
      />
      <h4>自定义把手</h4>
      <DragSortTable
        columns={columns2}
        rowKey="index"
        dataSource={dataSource2}
        dragSortKey="sort"
        dragSortHandlerRender={dragHandleRender}
        onDragSortEnd={handleDragSortEnd2}
      />
    </>
  )
}
