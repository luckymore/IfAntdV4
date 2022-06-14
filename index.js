import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import InputNumber from './IfAntdV4/InputNumber/demo';
import { Collapse, Tag } from 'antd';

const { Panel } = Collapse;

ReactDOM.render(
  <>
    <h2>IfAntdV4: 在antd@3.x版本上的功能增强</h2>
    <Collapse accordion defaultActiveKey={['1']}>
      <Panel
        header={
          <>
            数字输入框：<Tag color="green">addonAfter</Tag>
            <Tag color="green">addonBefore</Tag>
          </>
        }
        key="1"
      >
        <InputNumber />
      </Panel>
      <Panel
        header={
          <>
            拖拽表格：<Tag color="green">canDrag</Tag>
          </>
        }
        key="2"
      >
        拖拽表格
      </Panel>
    </Collapse>
  </>,
  document.getElementById('container')
);
