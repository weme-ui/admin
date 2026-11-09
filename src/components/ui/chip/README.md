# Chip

状态点。圆点表示状态，旁边可以带一小段文字。`animate` 时圆点外有一圈扩散。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/chip
```

## Usage

## Props

| 属性      | 说明                                                                   | 类型                                                                                | 默认值      |
| --------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| `as`      | 渲染为的元素或组件（Reka UI `Primitive`）                              | `AsTag \| Component`                                                                | `'span'`    |
| `asChild` | 合并到子元素上渲染（Reka UI composition）                              | `boolean`                                                                           | `false`     |
| `variant` | 圆点颜色                                                               | `'default' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |
| `size`    | 尺寸                                                                   | `'sm' \| 'md' \| 'lg'`                                                              | `'md'`      |
| `label`   | 圆点旁的文案。没有默认插槽时显示                                       | `string`                                                                            | —           |
| `animate` | 为真时圆点外圈播放 ping 动画                                           | `boolean`                                                                           | —           |
| `class`   | 加在圆点上，不是根节点                                                 | `any`                                                                               | —           |
| `ui`      | 覆盖 slots 样式（`root` / `indicatorWrapper` / `indicator` / `label`） | `Partial<ChipStyleSlots>`                                                           | —           |

## Slots

| 插槽      | 说明                                             |
| --------- | ------------------------------------------------ |
| `default` | 圆点旁的内容。提供后替换 `label`；都没有时不渲染 |

## Accessibility

默认是 `span`（Reka UI `Primitive`）。根节点 `aria-label` 默认用 `label`，传入的 `aria-label` 会覆盖它。根节点设置 `data-slot="chip"`。只有圆点、没有可见文案时请加 `aria-label`。
