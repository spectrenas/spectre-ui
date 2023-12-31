import { mergeProps, splitProps } from 'solid-js'

import { ScrollBarProps } from './scrollbar.props'
import { customEventHandlersName } from '../../events'

export interface VerticalScrollbarProps extends ScrollBarProps {
  
  height: number
  sliderX?: number
  sliderY: number
  sliderHeight: number
}

export function generateProps(propsRaw: VerticalScrollbarProps) {
  return splitProps(mergeProps({ sliderX: 0 }, propsRaw), customEventHandlersName)
}