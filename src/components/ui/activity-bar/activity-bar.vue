<script lang="ts" setup>
import type { ActivityBarEmits, ActivityBarItem, ActivityBarProps } from './activity-bar.props'
import { createReusableTemplate, useVModel } from '@vueuse/core'
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

const props = withDefaults(defineProps<ActivityBarProps>(), { as: 'nav' })
const emits = defineEmits<ActivityBarEmits>()

const active = useVModel<ActivityBarProps, 'active', 'update:active'>(
  props,
  'active',
  emits,
  { defaultValue: props.defaultActive },
)

const ui = useActivityBarStyle()
const groups = toRef(() => props.groups)

const contentGroups = computed(() => groups.value?.filter(group => group.slot === 'content'))
const footerGroups = computed(() => groups.value?.filter(group => group.slot === 'footer'))

const [
  DefineActivityBarItem,
  ReuseActivityBarItem,
] = createReusableTemplate<{ item: ActivityBarItem }>()

async function handleActiveChange(item: ActivityBarItem) {
  if (item.disabled) {
    return
  }

  if (item.onActive) {
    await item.onActive(item)
  }

  active.value = item.id
  emits('update:active', item.id)
}

useForwardExpose()
</script>

<template>
  <DefineActivityBarItem v-slot="{ item }">
    <Tooltip :content="active === item.id ? item.label : item.tooltip || item.label" side="right" as-child>
      <RovingFocusItem
        as="button"
        :aria-label="item.tooltip || item.label"
        :aria-current="toBoolAriaValue(active === item.id)"
        :disabled="item.disabled"
        :class="cn(ui.item(), props.ui?.item, item.class)"
        @click="handleActiveChange(item)"
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

    <div :class="cn(ui.content(), props.ui?.content)">
      <slot name="content-top" />

      <template v-for="(group, gIdx) in contentGroups" :key="`c-${gIdx}`">
        <RovingFocusGroup orientation="vertical" :class="cn(ui.group(), props.ui?.group)">
          <template v-for="(item, idx) in group.items" :key="`c-${gIdx}-${idx}`">
            <ReuseActivityBarItem :item="item" />
          </template>
        </RovingFocusGroup>
      </template>

      <slot name="content-bottom" />
    </div>

    <footer v-if="footerGroups && footerGroups.length > 0" :class="cn(ui.footer(), props.ui?.footer)">
      <template v-for="(group, gIdx) in footerGroups" :key="`f-${gIdx}`">
        <RovingFocusGroup orientation="vertical" :class="cn(ui.group(), props.ui?.group)">
          <template v-for="(item, idx) in group.items" :key="`f-${gIdx}-${idx}`">
            <ReuseActivityBarItem :item="item" />
          </template>
        </RovingFocusGroup>
      </template>
    </footer>
  </Primitive>
</template>
