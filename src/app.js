import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import InputNumber from './components/InputNumber/demo';
import DragTable from './components/DragTable/demo';
import { Collapse, Tag } from 'antd';

const { Panel } = Collapse;

// ReactDOM.render(
//   <div>
//     <h2>IfAntdV4: 在antd@3.x版本上的功能增强</h2>
//     <Collapse accordion defaultActiveKey={['1']}>
//       <Panel
//         header={
//           <div>
//             数字输入框：<Tag color="green">addonAfter</Tag>
//             <Tag color="green">addonBefore</Tag>
//           </div>
//         }
//         key="1"
//       >
//         <InputNumber />
//       </Panel>
//       <Panel
//         header={
//           <div>
//             拖拽表格：<Tag color="green">canDrag</Tag>
//           </div>
//         }
//         key="2"
//       >
//         拖拽表格
//         <DragTable />
//       </Panel>
//     </Collapse>
//   </div>,
//   document.getElementById('root')
// );
