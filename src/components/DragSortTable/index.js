import { Table, Icon } from 'antd'
import { useState, useMemo, useCallback, useRef } from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import { useDragSort } from '../../utils/useDragSort'
import './index.less'

const handleCreator = handle => SortableHandle(() => <>{handle}</>)

const DragTable = props => {
  const {
    dataSource: oriDs,
    columns: propsColumns,
    rowKey,
    dragSortKey,
    dragSortHandlerRender,
    onDragSortEnd,
    ...otherTableProps
  } = props

  // 默认拖拽把手
  const DragHandle = useMemo(
    () =>
      handleCreator(
        <Icon
          type="menu"
          style={{
            cursor: 'grab',
            color: '#999',
          }}
        />,
      ),
    [],
  )
  const isDragSortColumn = useCallback(
    item => {
      return item.key === dragSortKey || item.dataIndex === dragSortKey
    },
    [dragSortKey],
  )

  // 根据 dragSortKey 查找目标列配置
  const handleColumn = useMemo(() => {
    return propsColumns?.find(item => isDragSortColumn(item))
  }, [propsColumns, isDragSortColumn])

  // 记录原始列配置
  const originColumnRef = useRef({ ...handleColumn })

  // 使用自定义hooks获取拖拽相关组件的components集合
  const { components } = useDragSort({
    dataSource: oriDs?.slice(),
    dragSortKey,
    onDragSortEnd,
    components: props.components,
    rowKey,
  })

  // 重写列配置的render
  const columns = useMemo(() => {
    const originColumn = originColumnRef.current
    if (!handleColumn) return propsColumns
    const dargRender = (...args) => {
      const [dom, rowData, index, action, schema] = args
      const RealHandle = dragSortHandlerRender ? handleCreator(dragSortHandlerRender(rowData, index)) : DragHandle
      return (
        <div className="ifantdv4-table-drag-visible-cell">
          <>
            <RealHandle />
            {originColumn.render?.(dom, rowData, index, action, schema)}
          </>
        </div>
      )
    }
    // 重新生成数据
    return propsColumns?.map(item => {
      if (!isDragSortColumn(item)) {
        return item
      }
      return {
        ...item,
        render: dargRender,
      }
    })
  }, [DragHandle, dragSortHandlerRender, handleColumn, isDragSortColumn, propsColumns])

  return <Table {...otherTableProps} pagination={false} dataSource={oriDs} columns={[
    {
      key: 'sort',
      title: '排序',
      render: () => <DragHandle />
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
  ]} components={components} />
}

export default DragTable
