import { mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'

export type DrawerPosition = 'left' | 'top' | 'right' | 'bottom'

export interface DrawerProps extends ComponentParentProps<HTMLDivElement> {
  value?: boolean
  position?: DrawerPosition
  width?: string
  change?: ValueChanged<boolean>
}

export function generateProps(propsRaw: DrawerProps) {
  return splitProps(mergeProps({ value: false, position: 'left', width: '30%' }, propsRaw), customEventHandlersName)
}