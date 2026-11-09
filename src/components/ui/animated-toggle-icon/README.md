---
dependencies:
  - motion-v
---

# Animated Toggle Icon

两个图标来回切，进场出场缩一下。底下是 `Icon` 和 `motion-v`。没列出来的属性经 `$attrs` 传给 `Motion`。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/animated-toggle-icon
```

## Usage

## Props

| 属性         | 说明                                             | 类型                       | 默认值 |
| ------------ | ------------------------------------------------ | -------------------------- | ------ |
| `icon`       | 未激活态图标（Iconify）；必填                    | `IconifyIconProps['icon']` | —      |
| `activeIcon` | 激活态图标（Iconify）；未传时激活态回退到 `icon` | `IconifyIconProps['icon']` | —      |
| `active`     | 是否为激活态；切换时触发进出场动画               | `boolean`                  | —      |
| `class`      | 根节点额外 class                                 | `any`                      | —      |

## Accessibility

经 `Motion`（`as-child`）画成 `Icon`，带着 `data-slot="animated-toggle-icon"` 和 `data-active`。根节点 `pointer-events-none`。没有自己的键盘操作。有含义就在旁边写字。
