# Badge

徽章。一小段文字，标状态或分类。可以带图标。`clickable` 或 `href` 时能点；有 `href` 时，点击区域由链接铺开。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/badge
```

## Usage

## Props

| 属性        | 说明                                                 | 类型                                                                                | 默认值      |
| ----------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| `as`        | 渲染为的元素或组件（Reka UI `Primitive`）            | `AsTag \| Component`                                                                | `'span'`    |
| `asChild`   | 合并到子元素上渲染（Reka UI composition）            | `boolean`                                                                           | `false`     |
| `variant`   | 外观变体                                             | `'solid' \| 'soft' \| 'outline' \| 'plain' \| 'inverted'`                           | `'solid'`   |
| `color`     | 语义色（与 `variant` 组合）                          | `'default' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |
| `size`      | 尺寸                                                 | `'sm' \| 'md' \| 'lg'`                                                              | `'md'`      |
| `icon`      | 前置图标（Iconify）                                  | `IconifyIconProps['icon']`                                                          | —           |
| `label`     | 文案。没有默认插槽时显示                             | `string`                                                                            | —           |
| `href`      | 有值时渲染 `LinkOverlay`，并使徽章可点击             | `string`                                                                            | —           |
| `target`    | 链接 `target`，传给 `LinkOverlay`                    | `string`                                                                            | —           |
| `rel`       | 链接 `rel`，传给 `LinkOverlay`                       | `string`                                                                            | —           |
| `clickable` | 为真时渲染 `LinkOverlay`。有 `href` 时也会视为可点击 | `boolean`                                                                           | —           |
| `class`     | 根节点额外 class                                     | `any`                                                                               | —           |
| `ui`        | 覆盖 slots 样式（`root` / `icon`）                   | `Partial<BadgeStyleSlots>`                                                          | —           |

## Slots

| 插槽      | 说明                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| `default` | 自定义内容。提供后不再渲染图标和 `label`                                        |
| `icon`    | 自定义图标。没有默认插槽，且提供了该插槽或 `icon` 时渲染；未提供插槽时用 `icon` |

## Accessibility

默认是 `span`（Reka UI `Primitive`）。`clickable` 或有 `href` 时，指针按下会设置 `aria-pressed`，并渲染 `LinkOverlay`（原生 `<a>`）铺开点击区域。根节点设置 `data-slot="badge"`。仅图标、没有可见文案时请加 `aria-label`。

### Keyboard Interactions

| Key     | Description                    |
| ------- | ------------------------------ |
| `Enter` | 激活链接并导航（有 `href` 时） |
