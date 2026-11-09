# Scroll Area

内容超出时换成自定义滚动条。底下是 Reka UI `ScrollArea`，原生滚动还在。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/scroll-area
```

## Usage

## Props

| 属性              | 说明                                                                                                        | 类型                                                     | 默认值    |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------- |
| `as`              | 渲染为的元素或组件（Reka UI `Primitive`）                                                                   | `AsTag \| Component`                                     | `'div'`   |
| `orientation`     | 滚动条方向；未传时横向和纵向都渲染                                                                          | `'horizontal' \| 'vertical'`                             | —         |
| `type`            | 滚动条何时可见：`auto` 溢出时、`always` 始终、`scroll` 滚动时、`hover` 悬停或滚动、`glimpse` 进入时短暂显示 | `'auto' \| 'always' \| 'scroll' \| 'hover' \| 'glimpse'` | `'hover'` |
| `scrollHideDelay` | 停止交互后隐藏滚动条的毫秒数。`type` 不是 `'scroll'` 时未传按 `0`；`'scroll'` 且未传时走 Reka 的 `600`      | `number`                                                 | `0`       |
| `dir`             | 阅读方向；未传时继承 `ConfigProvider`，否则按 LTR                                                           | `'ltr' \| 'rtl'`                                         | —         |
| `class`           | 根节点额外 class                                                                                            | `any`                                                    | —         |
| `ui`              | 覆盖 slots 样式（`root` / `viewport` / `scrollbar` / `thumb`）                                              | `Partial<ScrollAreaStyleSlots>`                          | —         |

## Slots

| 插槽      | 说明     |
| --------- | -------- |
| `default` | 滚动内容 |

## Accessibility

基于 Reka UI `ScrollArea`（`ScrollAreaRoot` / `ScrollAreaViewport`）。保留浏览器原生滚动，键盘滚动也走原生，平台之间不完全一样。
