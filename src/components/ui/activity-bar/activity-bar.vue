<script lang="ts" setup>
import type { ActivityBarEmits, ActivityBarItem, ActivityBarProps } from './activity-bar.props'
import { createReusableTemplate, useVModel } from '@vueuse/core'
import { Motion } from 'motion-v'
import { Primitive, RovingFocusGroup, RovingFocusItem, useForwardExpose } from 'reka-ui'
import { computed, toRef } from 'vue'
import { toBoolAriaValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import AnimatedToggleIcon from '../animated-toggle-icon/animated-toggle-icon.vue'
import Float from '../float/float.vue'
import Tooltip from '../tooltip/tooltip.vue'
import { useActivityBarStyle } from './activity-bar.style'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ActivityBarProps>(), { as: 'aside' })
const emits = defineEmits<ActivityBarEmits>()

const active = useVModel<ActivityBarProps, 'active', 'update:active'>(props, 'active', emits, {
  defaultValue: props.defaultActive,
})

const ui = useActivityBarStyle()
const groups = toRef(() => props.groups)

const startGroups = computed(() => groups.value?.filter((group) => group.slot === 'start'))
const endGroups = computed(() => groups.value?.filter((group) => group.slot === 'end'))

const [DefineActivityBarItem, ReuseActivityBarItem] = createReusableTemplate<{
  item: ActivityBarItem
}>()

async function handleActiveChange(item: ActivityBarItem) {
  if (item.disabled) {
    return
  }

  await item.onActive?.(item)

  active.value = item.id
  emits('update:active', item.id)
}

useForwardExpose()
</script>

<template>
  <DefineActivityBarItem v-slot="{ item }">
    <Tooltip
      :content="active === item.id ? item.label : item.tooltip || item.label"
      :ui="{ trigger: cn(ui.item(), props.ui?.item, item.class) }"
      side="right"
      as-child
    >
      <RovingFocusItem
        :aria-label="item.tooltip || item.label"
        :aria-current="toBoolAriaValue(active === item.id)"
        :disabled="item.disabled"
        @click="handleActiveChange(item)"
        as-child
      >
        <Motion
          as="button"
          :while-hover="
            active !== item.id ? { scale: 1.2, transition: { duration: 0.2 } } : undefined
          "
          :while-press="
            active !== item.id ? { scale: 0.9, transition: { duration: 0.2 } } : undefined
          "
        >
          <Float v-if="item.chipped" placement="top-right" offset="1px">
            <span :class="cn(ui.itemChip(), props.ui?.itemChip)" />
          </Float>

          <AnimatedToggleIcon
            v-if="item.icon"
            :active="active === item.id"
            :icon="item.icon"
            :active-icon="item.activeIcon"
          />
        </Motion>
      </RovingFocusItem>
    </Tooltip>
  </DefineActivityBarItem>

  <Primitive
    :as="as"
    :as-child="asChild"
    :data-slot="$attrs['data-slot'] || 'activity-bar'"
    :class="cn(ui.root(), props.ui?.root, props.class)"
  >
    <header v-if="!!$slots.header" :class="cn(ui.header(), props.ui?.header)">
      <slot name="header" />
    </header>

    <slot name="content-top" />

    <div :class="cn(ui.content(), props.ui?.content)">
      <template v-for="(group, gIdx) in startGroups" :key="`g-${gIdx}`">
        <RovingFocusGroup orientation="vertical" :class="cn(ui.group(), props.ui?.group)">
          <template v-for="(item, idx) in group.items" :key="`g-${gIdx}-${idx}`">
            <ReuseActivityBarItem :item="item" />
          </template>
        </RovingFocusGroup>
      </template>
    </div>

    <slot name="content-bottom" />

    <footer v-if="endGroups && endGroups.length > 0" :class="cn(ui.footer(), props.ui?.footer)">
      <template v-for="(group, gIdx) in endGroups" :key="`g-${gIdx}`">
        <RovingFocusGroup orientation="vertical" :class="cn(ui.group(), props.ui?.group)">
          <template v-for="(item, idx) in group.items" :key="`g-${gIdx}-${idx}`">
            <ReuseActivityBarItem :item="item" />
          </template>
        </RovingFocusGroup>
      </template>
    </footer>
  </Primitive>
</template>
