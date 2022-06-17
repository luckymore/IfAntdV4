/*
 * @Author: miemie
 * @Date: 2022-04-29 18:40:40
 * @Last Modified by: znn
 * @Last Modified time: 2022-05-05 19:27:06
 */
import React, { forwardRef } from 'react';
import { InputNumber } from 'antd';
import classnames from 'classnames';
import './index.less';
import 'antd/es/input/style/index'

/**
 * - 支持 addonAfter/addonBefore
 */
const BetterInputNumber = (props, ref) => {
  const { addonAfter, addonBefore, ...rest } = props;

  return (
    <div className="ifantdv4-input-number">
      {addonBefore && (
        <div className="ant-input-group-addon">{addonBefore}</div>
      )}
      <InputNumber
        className={classnames({
          addonAfter,
          addonBefore,
        })}
        {...rest}
      />
      {addonAfter && <div className="ant-input-group-addon">{addonAfter}</div>}
    </div>
  );
};

export default forwardRef(BetterInputNumber);
