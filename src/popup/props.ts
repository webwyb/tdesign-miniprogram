/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPopupProps } from './type';
const props: TdPopupProps = {
  /** 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮 */
  closeBtn: {
    type: Boolean,
  },
  /** 点击遮罩层是否关闭 */
  closeOnOverlayClick: {
    type: Boolean,
    value: true,
  },
  /** 浮层里面的内容 */
  content: {
    type: String,
  },
  /** 弹出层的自定义样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 遮罩层的属性，透传至 overlay */
  overlayProps: {
    type: Object,
    value: {},
  },
  /** 浮层出现位置 */
  placement: {
    type: String,
    value: 'top',
  },
  /** 防止滚动穿透 */
  preventScrollThrough: {
    type: Boolean,
    value: true,
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    value: true,
  },
  /** 动画效果定义 */
  transitionProps: {
    type: Object,
  },
  /** 是否显示浮层 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 */
  zIndex: {
    type: Number,
    value: 11500,
  },
};

export default props;
