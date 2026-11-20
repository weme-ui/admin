# Avatar

头像。有 `src` 就显示图片，没有或者加载失败就回到文字或图标。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add avatar
```

## Usage

## Props

| 属性             | 说明                                                                 | 类型                                                                                                                                                                                     | 默认值           |
| ---------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `as`             | 根节点渲染为的元素或组件（Reka UI `AvatarRoot`）                     | `AsTag \| Component`                                                                                                                                                                     | `'span'`         |
| `color`          | 回退内容的颜色                                                       | `'default' \| 'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'inverse'`                                                                                         | `'default'`      |
| `size`           | 尺寸                                                                 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'`                                                                                                                        | `'md'`           |
| `src`            | 图片地址。有值才渲染 `AvatarImage`                                   | `string`                                                                                                                                                                                 | —                |
| `fallback`       | 回退文案。没有 `fallback` 插槽时显示                                 | `string`                                                                                                                                                                                 | —                |
| `icon`           | 没有 `fallback` 插槽、也没有 `fallback` 时的图标（Iconify）          | `IconifyIconProps['icon']`                                                                                                                                                               | `'ri:user-line'` |
| `delayMs`        | 延迟显示回退内容的毫秒数（Reka UI `AvatarFallback`）。不传则马上显示 | `number`                                                                                                                                                                                 | —                |
| `crossOrigin`    | 图片 `crossorigin`（透传 Reka UI `AvatarImage`）                     | `'' \| 'anonymous' \| 'use-credentials'`                                                                                                                                                 | —                |
| `referrerPolicy` | 图片 `referrerpolicy`（透传 Reka UI `AvatarImage`）                  | `'' \| 'no-referrer' \| 'no-referrer-when-downgrade' \| 'origin' \| 'origin-when-cross-origin' \| 'same-origin' \| 'strict-origin' \| 'strict-origin-when-cross-origin' \| 'unsafe-url'` | —                |
| `class`          | 根节点额外 class                                                     | `any`                                                                                                                                                                                    | —                |
| `ui`             | 覆盖 slots 样式（`root` / `image` / `fallback` / `icon`）            | `Partial<AvatarStyleSlots>`                                                                                                                                                              | —                |

## Events

| 事件                  | 说明                                                       | 参数                                                |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------- |
| `loadingStatusChange` | 图片加载状态变化。有 `src` 时由 Reka UI `AvatarImage` 转发 | `value: 'idle' \| 'loading' \| 'loaded' \| 'error'` |

## Slots

| 插槽       | 说明                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| `default`  | 自定义 `AvatarFallback` 的内容。提供后不再渲染 `fallback` 和 `icon`                                      |
| `fallback` | 自定义回退内容。未提供 `default` 且没有该插槽时显示 `fallback`。有插槽或有 `fallback` 时渲染，否则不渲染 |
| `icon`     | 自定义回退图标。仅在没有 `default`、没有 `fallback` 插槽且没有 `fallback` 时渲染；未提供插槽时用 `icon`  |
| `extend`   | 跟在图片和回退内容后面                                                                                   |

## Accessibility

根节点是 Reka UI `AvatarRoot`，默认 `span`。图片加载完成后是 `img`，带 `role="img"`，组件没有设置 `alt`。没有 `src`，或图片还没加载完时，显示 `AvatarFallback`（默认 `span`）。
