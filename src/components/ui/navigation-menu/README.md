# Navigation Menu

侧边导航。项可以是标签、链接或分隔线，链接能再套两层。

顺便一提，点链接不会改当前项，也不会发 `update:active`。`active` 或 `defaultActive` 只用来和某一项的 `to`、`id` 比较。对上了，那一项带 `data-active`。

## Installation

```bash
pnpm dlx @weme-ui/weme-ui add weme-ui/slim/navigation-menu
```

## Usage

## Props

| 属性            | 说明                                                                                                                     | 类型                                             | 默认值                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------- |
| `active`        | 当前项。等于某一项的 `to` 或 `id` 时，那一项带 `data-active`。传了它就不再用 `defaultActive`                             | `string`                                         | —                               |
| `defaultActive` | 没传 `active` 时用来比较的值。点击不会改它                                                                               | `string`                                         | —                               |
| `items`         | 一项的数组，或数组的数组。后者每一组成一个列表。不传就不渲染列表。字段见 Navigation Menu Item，数据里还可以有 `children` | `NavigationMenuItem[] \| NavigationMenuItem[][]` | —                               |
| `externalIcon`  | 外链右侧图标（Iconify）。`to` 是字符串且以 `http` 开头才算外链                                                           | `IconifyIconProps['icon']`                       | `'mingcute:external-link-line'` |
| `class`         | 根节点额外 class                                                                                                         | `any`                                            | —                               |
| `ui`            | 覆盖 slots 样式。模板只用 `root`                                                                                         | `Partial<NavigationMenuStyleSlots>`              | —                               |

## Events

| 事件            | 说明                                                    | 参数                          |
| --------------- | ------------------------------------------------------- | ----------------------------- |
| `update:active` | 声明了这个事件。模板没有写入 `active`，点击链接不会触发 | `active: string \| undefined` |

## Slots

| 插槽          | 说明                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `default`     | 有内容时替换生成的列表。作用域是 `{ groups, active, isActive }`。`groups` 是分好组的项，`active` 是当前值，`isActive` 用 `to` 或 `id` 判断一项是否当前 |
| `icon-<id>`   | 有 `id` 时的图标插槽。作用域是 `{ item, active }`，`active` 是当前值。没写时用 `icon` 字段                                                             |
| `label-<id>`  | 有 `id` 时的文案插槽。作用域同上。没写时用 `label`                                                                                                     |
| `append-<id>` | 有 `id` 时的右侧插槽。作用域同上。没写时用 `chip`、`badge` 或外链图标                                                                                  |
| `icon`        | 没有 `id` 时的图标插槽。几项都没有 `id` 时共用。作用域同上                                                                                             |
| `label`       | 没有 `id` 时的文案插槽。几项都没有 `id` 时共用。作用域同上                                                                                             |
| `append`      | 没有 `id` 时的右侧插槽。几项都没有 `id` 时共用。作用域同上                                                                                             |

## Navigation Menu List

一组列表。根节点是 Reka UI `Primitive`。类型里的 `asChild` 没有绑上去。默认插槽放这一组的项，没有作用域。

| 属性        | 说明                                                         | 类型                 | 默认值 |
| ----------- | ------------------------------------------------------------ | -------------------- | ------ |
| `as`        | 渲染成的元素或组件                                           | `AsTag \| Component` | `'ul'` |
| `isSubmenu` | 为真时左侧缩进，class 带 `pl-6`。否则带 `py-1`。两种都是纵向 | `boolean`            | —      |
| `class`     | 额外 class                                                   | `any`                | —      |

## Navigation Menu Item

一项。数据上的 `children` 不是这个组件的 prop。菜单最多再套两层，用默认插槽放下一层列表。顶层 `type` 为 `'label'` 时，菜单把 `variant` 设成 `'muted'`。

类型里的 `asChild` 没有绑上去。`link` 用 `Link` 渲染，`unstyled`，并关掉 `Link` 自己的外链图标。`label` 和 `separator` 不是链接。`separator` 只留一条线，不渲染里面的内容。

`icon`、`label`、`append` 的作用域是 `{ item, active }`。这里的 `active` 是布尔。`item` 去掉了 `as`、`asChild`、`ui`、`class`、`active`、`variant`。默认插槽没有作用域。

| 属性           | 说明                                                                                                                                          | 类型                                             | 默认值      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| `as`           | 根节点渲染成的元素或组件                                                                                                                      | `AsTag \| Component`                             | `'li'`      |
| `type`         | `'label' \| 'link' \| 'separator'`                                                                                                            | `NavigationMenuItemType`                         | `'link'`    |
| `variant`      | `'default' \| 'muted'`                                                                                                                        | `'default' \| 'muted'`                           | `'default'` |
| `id`           | 和当前值比较。有值时菜单插槽是 `icon-<id>`、`label-<id>`、`append-<id>`。没有时用 `icon`、`label`、`append`，几项共用                         | `string`                                         | —           |
| `label`        | 文案。类型上必填。没提供 `label` 插槽时显示它                                                                                                 | `string`                                         | —           |
| `icon`         | 图标（Iconify）。和 `activeIcon` 同时有、且 `type` 为 `'link'` 时用 `AnimatedToggleIcon`，否则用 `Icon`                                       | `IconifyIconProps['icon']`                       | —           |
| `activeIcon`   | 当前项图标（Iconify）                                                                                                                         | `IconifyIconProps['icon']`                       | —           |
| `badge`        | 字符串当作文案，或 `Badge` 的部分 props（不含 `asChild`）。尺寸默认 `'sm'`。当前项 `variant` 是 `'inverted'`，否则 `'soft'`。对象可盖过这些值 | `string \| Partial<Omit<BadgeProps, 'asChild'>>` | —           |
| `chip`         | `true` 时只给 `size: 'sm'`。对象会合并上去。优先于 `badge`                                                                                    | `boolean \| Partial<Omit<ChipProps, 'asChild'>>` | —           |
| `to`           | 链接目标（Vue Router）。字符串且以 `http` 开头算外链                                                                                          | `RouteLocationRaw`                               | —           |
| `target`       | 链接的 `target`。外链没写时用 `'_blank'`                                                                                                      | `string`                                         | —           |
| `rel`          | 链接的 `rel`。只在传入时带上                                                                                                                  | `string`                                         | —           |
| `disabled`     | 为真时根节点加 `is-disabled`。链接没有 `disabled`，仍然可以点                                                                                 | `boolean`                                        | —           |
| `active`       | 为真时带 `data-active`。菜单用 `to` 或 `id` 计算。第三层传入的是上一层的结果，不看自己                                                        | `boolean`                                        | —           |
| `externalIcon` | 外链右侧图标（Iconify）。没有 `chip` 和 `badge` 时才画。菜单会传入根上的 `externalIcon`                                                       | `IconifyIconProps['icon']`                       | —           |
| `class`        | 加在链接或标签那一行，不在 `li` 上                                                                                                            | `any`                                            | —           |
| `ui`           | 覆盖 slots 样式。模板会用 `root` / `base` / `icon` / `label` / `append`                                                                       | `Partial<NavigationMenuItemStyleSlots>`          | —           |

## Accessibility

根节点是 `div`，`data-slot="navigation-menu"`。类型里的 `as`、`asChild` 没有绑到根节点。每一组是 `ul`。每一项是 `li`，`data-slot="navigation-menu-item"`，`data-type` 为 `label`、`link` 或 `separator`。链接是 `<a>`。当前项有 `data-active`。子菜单再缩进一层，带 `pl-6`。`label` 和 `separator` 不能聚焦。

### Keyboard Interactions

| Key     | Description              |
| ------- | ------------------------ |
| `Enter` | 激活当前聚焦的链接并导航 |
