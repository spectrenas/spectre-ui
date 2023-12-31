import { mergeProps, splitProps, Accessor, Setter, JSX } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentParentProps, ValueChanged } from '../../types'

export interface ListItemData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  title?: string
  value?: string
  children?: ListItemData[]
  disabled?: boolean
}

export interface ListProps extends ComponentParentProps<HTMLDivElement> {
  items?: ListItemData[]
  indent?: number
  activeItem?: string
  expands?: string[] | 'all'
  selectItem?: ValueChanged<string>
  renderItem?: (item: ListItemData) => JSX.Element
}

export interface ItemValue {
  active?: Accessor<boolean>
  setActive?: Setter<boolean>

  expand?: Accessor<boolean>
  setExpand?: Setter<boolean>

  parentKey?: Accessor<string>
}

export interface ListProviderValue {
  indent: Accessor<number>
  defaultActiveItem: Accessor<string | undefined>
  expands: Accessor<string[] | 'all' | undefined>
  addItem: (value: ItemValue, key?: string) => string
  removeItem: ValueChanged<string>
  activeItem: ValueChanged<string>
  selectItem?: ValueChanged<string>
}

export function generateProps(propsRaw: ListProps) {
  return splitProps(mergeProps({ indent: 20 }, propsRaw), customEventHandlersName)
}