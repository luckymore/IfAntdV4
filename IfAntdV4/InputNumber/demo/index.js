import React from 'react';
import InputNumber from '../index.js';
import { Icon, Select, Form, Row, Col, Tag } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

const FormDemoInputNumber = Form.create({ name: 'miemie' })((props) => {
  const { getFieldDecorator } = props.form;

  return (
    <Form>
      <Form.Item label="InputNumber">
        {getFieldDecorator('input-number', {
          initialValue: 3,
          rules: [{ required: true }],
        })(<InputNumber min={1} max={10} />)}
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="InputNumber2">
        {getFieldDecorator('input-number2', {
          initialValue: '',
          rules: [{ required: true }],
        })(
          <InputNumber
            addonBefore="+"
            addonAfter="$"
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />
        )}
        <span className="ant-form-text"> machines</span>
      </Form.Item>
      <Form.Item label="InputNumber3">
        {getFieldDecorator('input-number3', {
          initialValue: 3,
          rules: [{ required: true }],
        })(
          <InputNumber
            addonBefore="+"
            addonAfter={selectAfter}
            min={1}
            max={100000}
            defaultValue={3}
            onChange={onChange}
          />
        )}
      </Form.Item>
    </Form>
  );
});

const Demo = () => (
  <Row>
    <Col>
      普通的：
      <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
      <InputNumber
        size="middle"
        min={1}
        max={100000}
        decimalSeparator="点"
        precision={2}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber
        size="large"
        min={1}
        max={100000}
        step={0.1}
        precision={2}
        defaultValue={3}
        onChange={onChange}
      />
    </Col>
    <Col>
      带前后缀的：
      <InputNumber
        addonBefore="+"
        size="small"
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber
        addonAfter="$"
        size="middle"
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber
        addonBefore="+"
        addonAfter="$"
        size="large"
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber
        addonAfter={<Icon type="snippets" />}
        size="large"
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
      <InputNumber
        addonAfter={selectAfter}
        size="large"
        min={1}
        max={100000}
        defaultValue={3}
        onChange={onChange}
      />
    </Col>
    <Col>
      表单验证的：
      <FormDemoInputNumber />
    </Col>
  </Row>
);

export default Demo;
