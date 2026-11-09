# Link Overlay

用 `::before` 把点击范围铺到定位祖先上。整张卡片都能点，链接还是那个 `<a>`。`href`、`target`、`rel` 走 `$attrs`。

顺便一提，父级得 `position: relative`，不然铺不满。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/link-overlay
```

## Usage

## Props

| 属性      | 说明                                      | 类型                 | 默认值 |
| --------- | ----------------------------------------- | -------------------- | ------ |
| `as`      | 渲染为的元素或组件（Reka UI `Primitive`） | `AsTag \| Component` | `'a'`  |
| `asChild` | 合并到子元素上渲染（Reka UI composition） | `boolean`            | —      |
| `class`   | 根节点额外 class                          | `any`                | —      |

## Slots

| 插槽      | 说明                       |
| --------- | -------------------------- |
| `default` | 链接内容（通常为标题文案） |

## Accessibility

默认是原生 `<a>`（Reka UI `Primitive`）。点的是伪元素铺开的区域，链接还在文档流里，读屏和键盘都找得到。

### Keyboard Interactions

| Key     | Description    |
| ------- | -------------- |
| `Enter` | 激活链接并导航 |
