<script lang="ts" setup>
import type { BreadcrumbItem, BreadcrumbProps } from './breadcrumb.props'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { toBoolDataAttrValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'
import Link from '../link/link.vue'
import { useBreadcrumbStyle } from './breadcrumb.style'

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
})

const uniqueItems = computed(() => {
  const items: BreadcrumbItem[] = []
  for (const item of props.items) {
    if (items.every((i) => i.label !== item.label)) {
      items.push(item)
    }
  }
  return items
})

const ui = computed(() => useBreadcrumbStyle())
</script>

<template>
  <Primitive :as="as" data-slot="breadcrumb" :class="cn(ui.root(), props.ui?.root, props.class)">
    <slot name="start" />
    <ul :class="cn(ui.list(), props.ui?.list)">
      <template v-for="(item, index) in uniqueItems" :key="index">
        <li
          :data-active="toBoolDataAttrValue(index === uniqueItems.length - 1)"
          :class="
            cn(
              ui.item({
                active: index === uniqueItems.length - 1,
                disabled: item.disabled,
              }),
              props.ui?.item,
            )
          "
        >
          <slot :item="item" :active="index === uniqueItems.length - 1">
            <Primitive
              :as="item.to ? Link : 'span'"
              :to="item.to ?? undefined"
              :unstyled="item.to ? true : undefined"
              :class="
                cn(
                  ui.link({
                    active: index === uniqueItems.length - 1,
                    linkable: !!item.to,
                  }),
                  props.ui?.link,
                )
              "
            >
              <Icon v-if="item.icon" :name="item.icon" :class="cn(ui.icon(), props.ui?.icon)" />
              {{ item.label }}
            </Primitive>
          </slot>

          <slot v-if="index < uniqueItems.length - 1" name="separator">
            <Icon
              v-if="separatorIcon"
              :name="separatorIcon"
              :class="cn(ui.separatorIcon(), props.ui?.separatorIcon)"
            />
            <span v-else :class="cn(ui.separator(), props.ui?.separator)">{{ separator }}</span>
          </slot>
        </li>
      </template>
    </ul>
    <slot name="end" />
  </Primitive>
</template>
