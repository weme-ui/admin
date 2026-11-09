<script lang="ts" setup>
import type { NavigationMenuItem as NavigationMenuItemType } from './navigation-menu-item.props'
import type { NavigationMenuEmits, NavigationMenuProps } from './navigation-menu.props'
import { useVModel } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '~/utils/styles'
import NavigationMenuItem from './navigation-menu-item.vue'
import NavigationMenuList from './navigation-menu-list.vue'
import { useNavigationMenuStyle } from './navigation-menu.style'

const props = withDefaults(defineProps<NavigationMenuProps>(), { externalIcon: 'mingcute:external-link-line' })
const emits = defineEmits<NavigationMenuEmits>()

const active = useVModel<NavigationMenuProps, 'active', 'update:active'>(props, 'active', emits, {
  defaultValue: props.defaultActive,
})

const groups = computed(() => {
  if (props.items === undefined) {
    return []
  }

  if (Array.isArray(props.items) && props.items.every(item => Array.isArray(item))) {
    return props.items
  }

  return [props.items]
})

const ui = useNavigationMenuStyle()

function isActive(item: NavigationMenuItemType): boolean {
  return item.to === active.value || item.id === active.value
}
</script>

<template>
  <Primitive
    :data-slot="$attrs['data-slot'] || 'navigation-menu'"
    :class="cn(ui.root(), props.ui?.root, props.class)"
  >
    <slot v-bind="{ groups, active, isActive }">
      <template v-for="(group, gIdx) in groups" :key="`g-${gIdx}`">
        <NavigationMenuList>
          <NavigationMenuItem
            v-for="(item, idx) in group"
            :key="`g-${gIdx}-${idx}`"
            v-bind="item"
            :variant="item.type === 'label' ? 'muted' : 'default'"
            :external-icon="externalIcon"
            :active="isActive(item)"
          >
            <template #icon>
              <slot :name="`${item.id ? `icon-${item.id}` : 'icon'}`" :item="item" :active="active" />
            </template>

            <template #label>
              <slot :name="`${item.id ? `label-${item.id}` : 'label'}`" :item="item" :active="active" />
            </template>

            <template #append>
              <slot :name="`${item.id ? `append-${item.id}` : 'append'}`" :item="item" :active="active" />
            </template>

            <NavigationMenuList
              v-if="item.children && item.children.length > 0"
              :key="`g-${gIdx}-${idx}-children`"
            >
              <NavigationMenuItem
                v-for="(child, cIdx) in item.children"
                :key="`g-${gIdx}-${idx}-${cIdx}`"
                v-bind="child"
                :external-icon="externalIcon"
                :active="isActive(child)"
              >
                <template #icon>
                  <slot :name="`${child.id ? `icon-${child.id}` : 'icon'}`" :item="child" :active="active" />
                </template>

                <template #label>
                  <slot :name="`${child.id ? `label-${child.id}` : 'label'}`" :item="child" :active="active" />
                </template>

                <template #append>
                  <slot :name="`${child.id ? `append-${child.id}` : 'append'}`" :item="child" :active="active" />
                </template>

                <NavigationMenuList
                  v-if="child.children && child.children.length > 0"
                  :key="`g-${gIdx}-${idx}-${cIdx}-children`"
                  is-submenu
                >
                  <NavigationMenuItem
                    v-for="(sub, subIdx) in child.children"
                    v-bind="sub"
                    :key="`g-${gIdx}-${idx}-${cIdx}-${subIdx}`"
                    :external-icon="externalIcon"
                    :active="isActive(child)"
                  >
                    <template #icon>
                      <slot :name="`${sub.id ? `icon-${sub.id}` : 'icon'}`" :item="sub" :active="active" />
                    </template>

                    <template #label>
                      <slot :name="`${sub.id ? `label-${sub.id}` : 'label'}`" :item="sub" :active="active" />
                    </template>

                    <template #append>
                      <slot :name="`${sub.id ? `append-${sub.id}` : 'append'}`" :item="sub" :active="active" />
                    </template>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuItem>
        </NavigationMenuList>
      </template>
    </slot>
  </Primitive>
</template>
