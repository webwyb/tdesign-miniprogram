import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdDropdownMenuProps } from './type';

const { prefix } = config;
const name = `${prefix}-dropdown-menu`;

export interface DropdownMenuProps extends TdDropdownMenuProps {}

@wxComponent()
export default class DropdownMenu extends SuperComponent {
  properties = props; // todo: zindex activeColor

  data = {
    prefix,
    classPrefix: name,
    nodes: null,
    menus: null,
    activeIdx: -1,
    bottom: 0,
  };

  relations: RelationsOptions = {
    './dropdown-item': {
      type: 'child',
    },
  };

  lifetimes = {
    ready() {
      this.getAllItems();
    },
  };

  methods = {
    getAllItems() {
      const nodes = this.getRelationNodes('./dropdown-item');
      const menus = nodes.map((a) => a.data);

      this.setData({
        nodes,
        menus,
      });
    },
    toggleDropdown(e: WechatMiniprogram.BaseEvent) {
      const { index: idx } = e.target.dataset;
      const { activeIdx } = this.data;
      const prevItem = this.data.nodes[activeIdx];
      const currItem = this.data.nodes[idx];

      if (currItem.data.disabled) return;

      if (activeIdx !== -1) {
        prevItem.triggerEvent('close');
        prevItem.setData(
          {
            show: false,
          },
          () => {
            setTimeout(() => {
              prevItem.triggerEvent('closed');
            }, 240);
          },
        );
      }

      if (activeIdx === idx) {
        this.setData({
          activeIdx: -1,
        });
      } else {
        currItem.triggerEvent('open');
        this.setData({
          activeIdx: idx,
        });
        currItem.setData(
          {
            show: true,
          },
          () => {
            setTimeout(() => {
              currItem.triggerEvent('opened');
            }, 240);
          },
        );
      }
    },
  };
}
