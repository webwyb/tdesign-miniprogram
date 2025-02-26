import simulate from 'miniprogram-simulate';
import path from 'path';

const textRowCol = [
  { width: '686rpx', height: '32rpx' },
  2,
  3,
  [
    { width: '38rpx', height: '32rpx', marginRight: '20rpx', marginLeft: '20rpx' },
    { width: '38rpx', height: '32rpx' },
  ],
  { width: '440rpx' },
];

const textRowCol2 = [
  { width: 343, height: 16 },
  2,
  3,
  [{ width: 14, height: 16, marginRight: 10, marginLeft: 10 }, { size: 'small' }],
  { width: 220 },
];

describe('skeleton', () => {
  const skeleton = simulate.load(path.resolve(__dirname, `../skeleton`), 't-skeleton', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  describe('Props', () => {
    it(':text rowCol', () => {
      const id = simulate.load({
        template: `<t-skeleton class="skeleton" rowCol="{{rowCol}}" loading="{{loading}}"></t-skeleton>`,
        usingComponents: {
          't-skeleton': skeleton,
        },
        data: {
          rowCol: textRowCol,
          loading: true,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.toJSON()).toMatchSnapshot();
    });

    it(':loading rowCol', async () => {
      const id = simulate.load({
        template: `<t-skeleton class="skeleton" rowCol="{{rowCol}}" loading="{{loading}}"></t-skeleton>`,
        usingComponents: {
          't-skeleton': skeleton,
        },
        data: {
          rowCol: textRowCol,
          loading: true,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $content = comp.querySelector('.skeleton >>> .t-skeleton__content');
      expect($content.toJSON().children.length).not.toBe(0);

      comp.setData({
        loading: false,
      });
      await simulate.sleep(20);
      const $content2 = comp.querySelector('.skeleton >>> .t-skeleton__content');
      expect($content2.toJSON().children.length).toBe(0);
    });

    it(':inner rowCol', () => {
      const id = simulate.load({
        template: `<t-skeleton class="skeleton" loading="{{loading}}"></t-skeleton>`,
        usingComponents: {
          't-skeleton': skeleton,
        },
        data: {
          loading: true,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.toJSON()).toMatchSnapshot();
    });

    it(':text rowCol2', () => {
      const id = simulate.load({
        template: `<t-skeleton class="skeleton" rowCol="{{rowCol}}" loading="{{loading}}"></t-skeleton>`,
        usingComponents: {
          't-skeleton': skeleton,
        },
        data: {
          rowCol: textRowCol2,
          loading: true,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.toJSON()).toMatchSnapshot();
    });
  });
});
