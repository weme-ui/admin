# Tooltip

悬停或聚焦时弹出一句说明。基于 Reka UI `Tooltip`。外层要包 `TooltipProvider`。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/tooltip
```

## Usage

## Props

| 属性                      | 说明                                                                                          | 类型                                                                                                     | 默认值             |
| ------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| `open`                    | 受控开关；可用 `v-model:open`                                                                 | `boolean`                                                                                                | —                  |
| `defaultOpen`             | 非受控初始开关                                                                                | `boolean`                                                                                                | `false`            |
| `delayDuration`           | 指针进入后延迟打开的毫秒数（覆盖 `TooltipProvider`）                                          | `number`                                                                                                 | `20`               |
| `disableHoverableContent` | 为真时指针移到内容上会关闭；未传时继承 `TooltipProvider`                                      | `boolean`                                                                                                | `false`            |
| `disableClosingTrigger`   | 为真时点击触发器不关闭                                                                        | `boolean`                                                                                                | `false`            |
| `disabled`                | 是否禁用                                                                                      | `boolean`                                                                                                | `false`            |
| `ignoreNonKeyboardFocus`  | 为真时仅 `:focus-visible`（键盘焦点）才打开                                                   | `boolean`                                                                                                | `false`            |
| `side`                    | 弹出方向；带 `-left` / `-right` 时 `align` 为 `start` / `end`                                 | `'top' \| 'right' \| 'bottom' \| 'left' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top'`            |
| `content`                 | 浮层文案；有 `content` 插槽时不展示                                                           | `string`                                                                                                 | —                  |
| `icon`                    | 浮层前置图标（Iconify）；`loading` 为真时不展示                                               | `IconifyIconProps['icon']`                                                                               | —                  |
| `loadingIcon`             | 加载中图标（Iconify）                                                                         | `IconifyIconProps['icon']`                                                                               | `'ri:loader-line'` |
| `loading`                 | 是否加载中；为真时显示 `loadingIcon` 并旋转                                                   | `boolean`                                                                                                | —                  |
| `asChild`                 | 合并到触发器子元素上渲染（Reka UI composition）；包 `Button` 时常用                           | `boolean`                                                                                                | —                  |
| `triggerProps`            | 透传至 `TooltipTrigger`（默认 `as: 'button'`）                                                | `Partial<TooltipTriggerProps>`                                                                           | —                  |
| `portalProps`             | 透传至 `TooltipPortal`（挂载目标默认 `body`）                                                 | `Partial<TooltipPortalProps>`                                                                            | —                  |
| `contentProps`            | 透传至 `TooltipContent`（默认 `sideOffset: 6`、`collisionPadding: 6`）；`side` 由 `side` 覆盖 | `Partial<Omit<TooltipContentProps, 'as' \| 'asChild'>> & Partial<EmitsToProps<TooltipContentEmits>>`     | —                  |
| `arrowProps`              | 为真时渲染箭头；对象则透传至 `TooltipArrow`                                                   | `boolean \| Partial<Omit<TooltipArrowProps, 'as' \| 'asChild'>>`                                         | `true`             |
| `class`                   | 浮层内容额外 class                                                                            | `any`                                                                                                    | —                  |
| `ui`                      | 覆盖 slots 样式（`trigger` / `content` / `icon` / `arrow`）                                   | `Partial<TooltipStyleSlots>`                                                                             | —                  |

## Events

| 事件          | 说明                                                            | 参数             |
| ------------- | --------------------------------------------------------------- | ---------------- |
| `update:open` | 开关变更时触发（含 `v-model:open`）；由 Reka `TooltipRoot` 转发 | `value: boolean` |

## Slots

| 插槽      | 说明                                   |
| --------- | -------------------------------------- |
| `default` | 触发器内容；作用域参数 `{ open }`      |
| `content` | 自定义浮层内容；未传时回退到 `content` |

## Accessibility

基于 Reka UI `Tooltip`（`TooltipRoot` / `TooltipTrigger` / `TooltipContent`）。触发器默认原生 `button`，打开时带 `aria-describedby`。内容里有 `role="tooltip"` 的隐藏节点给读屏。浮层设置 `data-slot="tooltip-content"`。

### Keyboard Interactions

| Key      | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `Tab`    | 焦点到触发器时打开（`ignoreNonKeyboardFocus` 为真时仅键盘焦点） |
| `Escape` | 关闭提示                                                        |
