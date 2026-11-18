# Button

按钮。点一下做一件事。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add button
```

## Usage

## Props

| 属性          | 说明                                               | 类型                                                                                                      | 默认值             |
| ------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------ |
| `as`          | 渲染为的元素或组件（Reka UI `Primitive`）          | `AsTag \| Component`                                                                                      | `'button'`         |
| `asChild`     | 合并到子元素上渲染（Reka UI composition）          | `boolean`                                                                                                 | `false`            |
| `variant`     | 外观变体                                           | `'solid' \| 'soft' \| 'outline' \| 'ghost' \| 'plain' \| 'inverse'`                                       | `'solid'`          |
| `color`       | 语义色（与 `variant` 组合）                        | `'default' \| 'accent' \| 'neutral' \| 'info' \| 'error' \| 'success' \| 'warning'`                       | `'default'`        |
| `size`        | 尺寸                                               | `'sm' \| 'md' \| 'lg'`                                                                                    | `'md'`             |
| `scalable`    | 按下时是否启用缩放动效（禁用 / loading 时不生效）  | `boolean`                                                                                                 | `true`             |
| `type`        | 原生 button 类型                                   | `'button' \| 'submit' \| 'reset'`                                                                         | `'button'`         |
| `icon`        | 前置图标（Iconify）                                | `IconifyIconProps['icon']`                                                                                | —                  |
| `label`       | 按钮文案                                           | `string`                                                                                                  | —                  |
| `loadingIcon` | 加载中图标（Iconify）                              | `IconifyIconProps['icon']`                                                                                | `'ri:loader-line'` |
| `loadingText` | 加载中文案；未传时回退到 `label`                   | `string`                                                                                                  | —                  |
| `tabIndex`    | 焦点顺序                                           | `number`                                                                                                  | `0`                |
| `disabled`    | 是否禁用                                           | `boolean`                                                                                                 | —                  |
| `loading`     | 是否加载中                                         | `boolean`                                                                                                 | —                  |
| `unstyled`    | 移除样式变体类，仅保留结构                         | `boolean`                                                                                                 | `false`            |
| `class`       | 根节点额外 class                                   | `any`                                                                                                     | —                  |
| `ui`          | 覆盖 slots 样式（`root` / `icon`）                 | `Partial<ButtonStyleSlots>`                                                                               | —                  |
| `onClick`     | 点击回调（支持异步；异步执行期间自动进入 loading） | `((event: MouseEvent) => void \| Promise<void>) \| Array<((event: MouseEvent) => void \| Promise<void>)>` | —                  |

## Slots

| 插槽           | 说明                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `label`        | 文案。作用域参数：`{ label }`。未提供插槽时显示 `label`。loading 时不渲染                                                           |
| `icon`         | 前置图标。作用域参数：`{ icon }`。未提供插槽且有 `icon` 时渲染 `Icon`。loading 时不渲染                                             |
| `loading-icon` | 加载图标。作用域参数：`{ loadingIcon }`。仅 loading 时渲染；未提供插槽时用 `loadingIcon`                                            |
| `loading-text` | 加载文案。作用域参数：`{ label, loadingText }`。仅 loading 且有 `loadingText` 或 `label` 时渲染；未提供插槽时优先显示 `loadingText` |
| `default`      | 跟在图标和文案后面，loading 时也渲染。不替换 `label`                                                                                |

## Accessibility

默认是原生 `button`（Reka UI `Primitive`）。按下时 `aria-pressed`，加载中 `aria-busy`，禁用或加载中 `aria-disabled`。根节点设置 `data-slot="button"`。

### Keyboard Interactions

| Key     | Description                         |
| ------- | ----------------------------------- |
| `Enter` | 激活按钮（`as` 为原生 `button` 时） |
| `Space` | 激活按钮（`as` 为原生 `button` 时） |
