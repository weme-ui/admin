# Activity Bar

竖条活动栏。图标按钮分成几组，点一下切换当前项。提示用 `Tooltip`，图标用 `AnimatedToggleIcon`。外面要有 `TooltipProvider`，`ConfigProvider` 里已经包了一层。

顺便一提，组件不自己记住选中项。要换项，用 `v-model:active`。只给 `defaultActive` 时，点下去会发事件，画面还停在原来的项。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/activity-bar
```

## Usage

## Props

| 属性            | 说明                                                                                                                                | 类型                             | 默认值  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| `as`            | 根节点渲染成的元素或组件（Reka UI `Primitive`）                                                                                     | `AsTag \| Component`             | `'nav'` |
| `asChild`       | 合并到子元素上渲染                                                                                                                  | `boolean`                        | `false` |
| `active`        | 当前项的 `id`。配合 `update:active` 做 `v-model`                                                                                    | `string`                         | —       |
| `defaultActive` | 没传 `active` 时画面上的初始项。点击不会改它                                                                                        | `string`                         | —       |
| `groups`        | 分组。每组有 `slot`（`'content' \| 'footer'`）和 `items`。`footer` 组放在底部，没有 `footer` 组时不渲染 `footer`                    | `ActivityBarGroup[]`             | —       |
| `class`         | 根节点额外 class                                                                                                                    | `any`                            | —       |
| `ui`            | 覆盖 slots 样式。模板会用 `root` / `header` / `content` / `footer` / `group` / `item` / `itemChip`。`itemIcon` 在类型里，模板没有用 | `Partial<ActivityBarStyleSlots>` | —       |

每一项有 `id`、`label`、`tooltip`、`icon`、`activeIcon`、`disabled`、`chipped`、`onActive`、`class`。提示内容是 `tooltip`，没有就用 `label`，固定出现在右侧。`label` 不会画在按钮上。有 `icon` 才渲染图标，当前项切到 `activeIcon`。`class` 加在这一项的按钮上。`chipped` 为真时，内容区按钮右上角多一个点，用 `Float` 放在 `top-right`，偏移 `2px`。底部项不画这个点。`disabled` 的项点了不切换，也不调用 `onActive`。`onActive` 会收到这一项，调用后不等待它结束。项要带 `id`，不然 `active` 变成 `undefined`，所有没 `id` 的项都会带上 `data-active`。

## Events

| 事件            | 说明                                                 | 参数                          |
| --------------- | ---------------------------------------------------- | ----------------------------- |
| `update:active` | 点了未禁用的项时触发。同一次点击会连着发两次，值一样 | `active: string \| undefined` |

## Slots

| 插槽             | 说明                            |
| ---------------- | ------------------------------- |
| `header`         | 顶栏。没有内容时不渲染 `header` |
| `content-top`    | 内容区里，分组上面              |
| `content-bottom` | 内容区里，分组下面              |

## Accessibility

根节点默认是 `nav`（Reka UI `Primitive`），`data-slot="activity-bar"`。每一项是 `type="button"` 的按钮。当前项带 `data-active`，禁用项带原生 `disabled`。按钮上没有可见文字，也没有 `aria-label`。`label` 和 `tooltip` 只进 `Tooltip`。

### Keyboard Interactions

| Key               | Description                        |
| ----------------- | ---------------------------------- |
| `Enter` / `Space` | 激活当前聚焦的按钮。禁用项不能聚焦 |
