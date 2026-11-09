# Float

把内容钉在父级的边上或角上。父级需要 `relative`，否则会贴到更外层。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/float
```

## Usage

## Props

| 属性        | 说明                                                                       | 类型                                                                                                                 | 默认值        |
| ----------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------- |
| `as`        | 渲染为的元素或组件（Reka UI `Primitive`）                                  | `AsTag \| Component`                                                                                                 | `'div'`       |
| `asChild`   | 合并到子元素上渲染（Reka UI composition）                                  | `boolean`                                                                                                            | `false`       |
| `placement` | 相对父级的位置                                                             | `'top-left' \| 'top' \| 'top-right' \| 'left' \| 'center' \| 'right' \| 'bottom-left' \| 'bottom' \| 'bottom-right'` | `'top-right'` |
| `offset`    | 两轴共用的偏移。写入 `--offset`，并作为 `--offset-x` / `--offset-y` 的回退 | `string`                                                                                                             | `'0'`         |
| `offsetX`   | 水平偏移，写入 `--offset-x`。未设时用 `offset`                             | `string`                                                                                                             | —             |
| `offsetY`   | 垂直偏移，写入 `--offset-y`。未设时用 `offset`                             | `string`                                                                                                             | —             |
| `class`     | 根节点额外 class                                                           | `any`                                                                                                                | —             |

## Slots

| 插槽      | 说明             |
| --------- | ---------------- |
| `default` | 浮在父级上的内容 |
