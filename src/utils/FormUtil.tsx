import { Row } from 'antd';
import Col, { ColProps } from 'antd/lib/col';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import IFormItemData from '../interfaces/IFormItemData';

class FormUtil {
  /**
   * 渲染表单项
   * @param formItemList 表单数据源
   *    * @param columnCount 列数，默认为2
   * @param defaultLabelSpan 每个表单项的标签默认占用的列数
   */
  static renderFormItems(
    formItemList: IFormItemData[],
    columnCount: number = 2,
    defaultLabelSpan = 6,
  ) {
    if (!formItemList || !formItemList.length) {
      return null;
    }

    const defaultSpan = 24 / columnCount;

    const rows: { totalSpan: number; cols: { span: number; formItem: React.ReactNode }[] }[] = [];
    // 循环表单项
    for (let i = 0; i < formItemList.length; i++) {
      const item = formItemList[i];

      // 获取一个表单项占多少span，优先级从高到低为
      // 1. item.span
      // 2. item.label.length > 6? 占一整行：defaultSpan
      let span = item.span;
      if (!span) {
        if (item.label && item.label.length > 6) {
          span = 24;
        } else {
          span = defaultSpan;
        }
      }
      span = Math.min(24, span);

      // 创建formItem
      // 获取 label占用的空间，优先用item设置的值，未设置，则根据defaultSpan取一个合适的值，以确定对齐
      // 例如：defaultSpan是12, defaultLabelSpan=6，而当前item.span = 8, 则当前item的labelspan= 12*6/8
      const labelSpan = Math.min(
        24,
        item.labelSpan ? item.labelSpan : (defaultLabelSpan * defaultSpan) / span,
      );
      // 如果表单项有label，则设置labelCol；否则，设置offsetCol，以确保表单元素是对齐的
      const itemProps: { labelCol?: ColProps; wrapperCol?: ColProps } = {};
      if (item.label) {
        itemProps.labelCol = { span: labelSpan };
        itemProps.wrapperCol = { span: 24 - labelSpan };
      } else {
        itemProps.wrapperCol = { offset: labelSpan };
      }

      const formItem = item.content ? (
        <FormItem label={item.label} {...itemProps} {...item.formItemProps}>
          {item.content}
        </FormItem>
      ) : null;

      // 创建col
      const col = {
        span,
        formItem,
      };

      // 获取合适的row
      // 先获取已存在的最后一个row，如果不存在，或者span装不下当前col，则新建一个
      let row;
      if (rows.length) {
        row = rows[rows.length - 1];
      }

      if (!row || row.totalSpan + span > 24) {
        row = { totalSpan: 0, cols: [] };
        rows.push(row);
      }

      row.totalSpan += span;
      row.cols.push(col);
    }

    // 循环row，渲染react节点
    return rows.map((row, rowIndex) => {
      return (
        <Row key={rowIndex}>
          {row.cols.map((col, colIndex) => {
            return (
              <Col key={colIndex} span={col.span}>
                {col.formItem}
              </Col>
            );
          })}
        </Row>
      );
    });
  }
}

export default FormUtil;
