<script lang="ts" setup>
import type { BadgeProps } from '../badge/badge.props'
import type { ChipProps } from '../chip/chip.props'
import type { NavigationMenuItemProps } from './navigation-menu-item.props'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { computed, toRef } from 'vue'
import { toBoolDataAttrValue, toBoolValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import AnimatedToggleIcon from '../animated-toggle-icon/animated-toggle-icon.vue'
import Badge from '../badge/badge.vue'
import Chip from '../chip/chip.vue'
import Icon from '../icon/icon.vue'
import Link from '../link/link.vue'
import { useNavigationMenuItemStyle } from './navigation-menu-item.style'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NavigationMenuItemProps>(), {
  as: 'li',
  type: 'link',
  variant: 'default',
})

const item = reactiveOmit(props, 'as', 'asChild', 'ui', 'class', 'active', 'variant')
const active = toRef(() => props.active)

const linkProps = computed(() => {
  if (props.type !== 'link') {
    return {}
  }

  return {
    to: props.to,
    target: props.target ?? (isExternalLink()
      ? '_blank'
      : undefined),
    rel: props.rel,
    hideExternalIcon: true,
    unstyled: true,
  }
})

const badgeProps = computed(() => {
  if (typeof item.badge === 'string') {
    return {
      size: 'sm',
      variant: active.value ? 'inverted' : 'soft',
      label: item.badge,
    } as BadgeProps
  }

  return item.badge && typeof item.badge === 'object'
    ? {
        size: 'sm',
        variant: active.value ? 'inverted' : 'soft',
        ...item.badge,
      } as BadgeProps
    : undefined
})

const chipProps = computed(() => {
  if (typeof item.chip === 'boolean' && !!item.chip) {
    return {
      size: 'sm',
    } as ChipProps
  }

  return item.chip && typeof item.chip === 'object'
    ? {
        size: 'sm',
        ...item.chip,
      } as ChipProps
    : undefined
})

const ui = computed(() => useNavigationMenuItemStyle({
  variant: props.variant,
  type: props.type,
  disabled: toBoolValue(props.disabled),
}))

function isExternalLink(): boolean {
  return item.type === 'link' && typeof item.to === 'string' && item.to?.startsWith('http')
}
</script>

<template>
  <Primitive
    :as="as"
    :data-slot="$attrs['data-slot'] || 'navigation-menu-item'"
    :data-type="type"
    :class="cn(ui.root(), props.ui?.root)"
  >
    <template v-if="type !== 'separator'">
      <Primitive
        v-bind="linkProps"
        :as="type === 'link' ? Link : 'div'"
        :data-active="toBoolDataAttrValue(active)"
        :class="cn(ui.base(), props.ui?.base, props.class)"
      >
        <slot
          v-if="!!$slots.icon || !!icon"
          name="icon"
          :item="item"
          :active="active"
        >
          <AnimatedToggleIcon
            v-if="type === 'link' && !!icon && !!activeIcon"
            :icon="icon"
            :active-icon="activeIcon"
            :active="active"
            :class="cn(ui.icon(), props.ui?.icon)"
          />
          <Icon v-else-if="icon" :name="icon" :class="cn(ui.icon(), props.ui?.icon)" />
        </slot>

        <span v-if="!!$slots.label || !!label" :class="cn(ui.label(), props.ui?.label)">
          <slot name="label" :item="item" :active="active">
            {{ label }}
          </slot>
        </span>

        <span
          v-if="!!$slots.append || !!badgeProps || !!chipProps || isExternalLink()"
          :class="cn(ui.append(), props.ui?.append)"
        >
          <slot name="append" :item="item" :active="active">
            <Chip v-if="chipProps" v-bind="chipProps" />
            <Badge v-else-if="badgeProps" v-bind="badgeProps" />
            <Icon v-else-if="isExternalLink() && !!externalIcon" :name="externalIcon" class="text-muted size-4" />
          </slot>
        </span>
      </Primitive>

      <slot />
    </template>
  </Primitive>
</template>
