---
dependencies:
  - '@iconify/vue'
---

# Icon

图标。包了 `@iconify/vue`。优先用 `name`，`icon` 也能当别名。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/icon
```

## Usage

## Props

| 属性         | 说明                                      | 类型                                 | 默认值 |
| ------------ | ----------------------------------------- | ------------------------------------ | ------ |
| `name`       | 图标名称或 Iconify 图标数据（必填）       | `IconifyIcon \| string`              | —      |
| `icon`       | `name` 的别名；同时传入时以 `icon` 为准   | `IconifyIcon \| string`              | —      |
| `class`      | 根节点额外 class                          | `any`                                | —      |
| `mode`       | 渲染模式（透传 `@iconify/vue`）           | `'style' \| 'bg' \| 'mask' \| 'svg'` | —      |
| `color`      | 图标颜色（透传）                          | `string`                             | —      |
| `width`      | 宽度（透传）                              | `string \| number \| null`           | —      |
| `height`     | 高度（透传）                              | `string \| number \| null`           | —      |
| `flip`       | 翻转（透传）                              | `string`                             | —      |
| `rotate`     | 旋转（透传）                              | `string \| number`                   | —      |
| `inline`     | 是否按 inline 对齐（透传）                | `boolean`                            | —      |
| `ariaHidden` | 是否对辅助技术隐藏（透传 `@iconify/vue`） | `boolean \| string`                  | —      |

没列出来的属性一样从 `@iconify/vue` 透传过来（`name` 替掉了必填的 `icon`）。

## Accessibility

基于 `@iconify/vue`。装饰用的可以 `ariaHidden` 藏起来。图标自己有含义时别藏，旁边得有字。
