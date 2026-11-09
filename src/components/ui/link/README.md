---
dependencies:
  - vue-router
---

# Link

Vue Router 的 `RouterLink`。能变色，能加前后图标。`custom` 我写死了，改不了。剩下的 HTML 属性走 `$attrs`。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/link
```

## Usage

## Props

| 属性               | 说明                                                    | 类型                                                                      | 默认值                    |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------- |
| `to`               | 目标路由或 URL（Vue Router `RouterLink`）               | `RouteLocationRaw`                                                        | —                         |
| `replace`          | 使用 `router.replace` 而非 `push`                       | `boolean`                                                                 | —                         |
| `activeClass`      | 激活态 class                                            | `string`                                                                  | —                         |
| `exactActiveClass` | 精确激活态 class                                        | `string`                                                                  | —                         |
| `ariaCurrentValue` | 精确激活时的 `aria-current` 值                          | `'page' \| 'step' \| 'location' \| 'date' \| 'time' \| 'true' \| 'false'` | `'page'`                  |
| `viewTransition`   | 是否将导航 Promise 交给 `document.startViewTransition`  | `boolean`                                                                 | —                         |
| `label`            | 链接文案（无默认插槽内容时使用）                        | `string`                                                                  | —                         |
| `prefixIcon`       | 前置图标（Iconify）                                     | `IconifyIconProps['icon']`                                                | —                         |
| `suffixIcon`       | 后置图标（Iconify）；传入时优先于 `externalIcon`        | `IconifyIconProps['icon']`                                                | —                         |
| `externalIcon`     | 外链后置图标（Iconify）                                 | `IconifyIconProps['icon']`                                                | `'ri:external-link-line'` |
| `hideExternalIcon` | 是否隐藏后置 / 外链图标                                 | `boolean`                                                                 | —                         |
| `color`            | 色彩                                                    | `'accent' \| 'neutral' \| 'info' \| 'success' \| 'warning' \| 'error'`    | `'accent'`                |
| `unstyled`         | 是否去掉默认表面样式                                    | `boolean`                                                                 | `false`                   |
| `class`            | 根节点额外 class                                        | `any`                                                                     | —                         |
| `ui`               | 覆盖 slots 样式（`root` / `prefixIcon` / `suffixIcon`） | `Partial<LinkStyleSlots>`                                                 | —                         |

## Slots

| 插槽      | 说明                                   |
| --------- | -------------------------------------- |
| `default` | 自定义链接文案；未提供时回退到 `label` |

## Accessibility

最后还是原生 `<a>`（`RouterLink` 的 `custom` 插槽）。精确激活时可用 `ariaCurrentValue` 设 `aria-current`。

### Keyboard Interactions

| Key     | Description    |
| ------- | -------------- |
| `Enter` | 激活链接并导航 |
