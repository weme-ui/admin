import type {
  ConfigProviderProps as PrimitiveConfigProviderProps,
  TooltipProviderProps,
} from 'reka-ui'

export interface ConfigProviderProps extends PrimitiveConfigProviderProps {
  tooltip?: TooltipProviderProps
}
