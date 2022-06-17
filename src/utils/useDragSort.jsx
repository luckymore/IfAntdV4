import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'
import { useCallback, useRef } from 'react';

const useRefFunction = (reFunction) => {
  const ref = useRef(null);
  ref.current = reFunction;
  return useCallback((...rest) => {
      return ref.current?.(...rest);
  }, []);
};


export function useDragSort(props) {
  const { dataSource = [], onDragSortEnd, dragSortKey } = props

  const SortableItem = SortableElement(props => <tr {...props} />)
  const SortableBody = SortableContainer(props => <tbody {...props} />)

  const onSortEnd = useRefFunction(({ oldIndex, newIndex }) => {
    console.log('onSortEnd', oldIndex, newIndex, dataSource)
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(dataSource.slice(), oldIndex, newIndex).filter(el => !!el)
      console.log('Sorted items: ', newData)
      onDragSortEnd?.(newData)
    }
  })

  const DraggableContainer = useRefFunction(props => (
    <SortableBody useDragHandle disableAutoscroll helperClass="row-dragging" onSortEnd={onSortEnd} {...props} />
  ))

  const DraggableBodyRow = useRefFunction(({ className, style, ...restProps }) => {
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x[props.rowKey ?? 'index'] === restProps['data-row-key'])
    return <SortableItem index={index} {...restProps} />
  })
  const components = props.components || {}

  if (dragSortKey) {
    components.body = {
      ...(props.components?.body || {}),
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
    }
  }

  return {
    components,
  }
}
