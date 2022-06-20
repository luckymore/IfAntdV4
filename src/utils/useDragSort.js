import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { useCallback, useRef } from 'react';
import { sortData } from './index'; 

const useRefFunction = (reFunction) => {
  const ref = useRef(null);
  ref.current = reFunction;
  return useCallback((...rest) => {
      return ref.current?.(...rest);
  }, []);
};


export function useDragSort(props) {
  const { dataSource = [], disabled, onDragSortEnd, dragSortKey } = props;
  // 拖拽排序相关逻辑
  const SortableItem = SortableElement((p) => <tr {...p}/>);
  const SortContainer = SortableContainer((p) => <tbody {...p}/>);
  /* istanbul ignore next */
  const handleSortEnd = useRefFunction((params) => {
      /* istanbul ignore next */
      const newDataSource = sortData(params, dataSource);
      /* istanbul ignore next */
      if (newDataSource && onDragSortEnd) {
          /* istanbul ignore next */
          onDragSortEnd(newDataSource);
      }
  });
  const DraggableContainer = useRefFunction((p) => (<SortContainer useDragHandle disableAutoscroll helperClass="row-dragging" onSortEnd={handleSortEnd} {...p}/>));
  const DraggableBodyRow = useRefFunction((p) => {
      const { className: DraggableBodyRowClassName, style: DraggableBodyRowStyle, ...restProps } = p;
      // function findIndex base on Table rowKey props and should always be a right array index
      const index = dataSource.findIndex((item) => item[props.rowKey ?? 'index'] === restProps['data-row-key']);
      console.log('DraggableBodyRow', index)
      return <SortableItem disabled={disabled} index={index} {...restProps}/>;
  });
  const components = props.components || {};
  if (dragSortKey) {
      components.body = {
          ...(props.components?.body || {}),
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
      };
  }
  return {
      components,
  };
}
