export type SystemThemeType = 'light' | 'dark'

export interface Theme extends BaseTheme, ButtonTheme, CheckboxTheme {
  [key: string]: string | undefined
}

export interface BaseTheme {
  '--text-common-primary'?: string
  '--text-common-secondary'?: string
  '--text-common-tertiary'?: string
  '--text-common-quaternary'?: string
  '--text-common-disabled'?: string
  '--text-brand-default'?: string
  '--text-brand-hover'?: string
  '--text-brand-active'?: string
  '--text-brand-disabled'?: string
  '--text-danger-default'?: string
  '--text-danger-hover'?: string
  '--text-danger-active'?: string
  '--text-danger-disabled'?: string
  '--text-success-default'?: string
  '--text-success-hover'?: string
  '--text-success-active'?: string
  '--text-success-disabled'?: string
  '--text-warn-default'?: string
  '--text-warn-hover'?: string
  '--text-warn-active'?: string
  '--text-warn-disabled'?: string
  '--text-link-default'?: string
  '--text-link-hover'?: string
  '--text-link-active'?: string
  '--text-link-visted'?: string
  '--text-link-disabled'?: string
  '--text-static-primary'?: string
  '--text-static-secondary'?: string
  '--text-static-tertiary'?: string
  '--text-static-disabled'?: string
  '--text-reverse-default'?: string
  '--bg-common-lower'?: string
  '--bg-common-default'?: string
  '--bg-common-high'?: string
  '--bg-common-highest'?: string
  '--bg-bgless-hover'?: string
  '--bg-bgless-active'?: string
  '--bg-controls-default'?: string
  '--bg-controls-hover'?: string
  '--bg-controls-active'?: string
  '--bg-controls-disabled'?: string
  '--bg-controls-elevate-default'?: string
  '--bg-controls-elevate-high'?: string
  '--bg-controls-degrade-default'?: string
  '--bg-controls-degrade-high'?: string
  '--bg-tag-default'?: string
  '--bg-tag-hover'?: string
  '--bg-tag-active'?: string
  '--bg-tag-disabled'?: string
  '--bg-scrollbar-default'?: string
  '--bg-scrollbar-hover'?: string
  '--bg-scrollbar-active'?: string
  '--bg-mask-default'?: string
  '--bg-brand-default'?: string
  '--bg-brand-hover'?: string
  '--bg-brand-active'?: string
  '--bg-brand-disabled'?: string
  '--bg-brand-light-default'?: string
  '--bg-brand-light-hover'?: string
  '--bg-brand-light-active'?: string
  '--bg-brand-light-disabled'?: string
  '--bg-danger-default'?: string
  '--bg-danger-hover'?: string
  '--bg-danger-active'?: string
  '--bg-danger-disabled'?: string
  '--bg-danger-light-default'?: string
  '--bg-danger-light-hover'?: string
  '--bg-danger-light-active'?: string
  '--bg-danger-light-disabled'?: string
  '--bg-success-default'?: string
  '--bg-success-hover'?: string
  '--bg-success-active'?: string
  '--bg-success-disabled'?: string
  '--bg-success-light-default'?: string
  '--bg-success-light-hover'?: string
  '--bg-success-light-active'?: string
  '--bg-success-light-disabled'?: string
  '--bg-warn-default'?: string
  '--bg-warn-hover'?: string
  '--bg-warn-active'?: string
  '--bg-warn-disabled'?: string
  '--bg-warn-light-default'?: string
  '--bg-warn-light-hover'?: string
  '--bg-warn-light-active'?: string
  '--bg-warn-light-disabled'?: string
  '--bg-static-light'?: string
  '--bg-static-dark-low'?: string
  '--bg-static-dark-default'?: string
  '--bg-static-dark-high'?: string
  '--bg-reverse-default'?: string
  '--bg-gradient-horizontal'?: string
  '--bg-gradient-vertical'?: string
  '--border-common-default'?: string
  '--border-common-hover'?: string
  '--border-common-active'?: string
  '--border-common-disabled'?: string
  '--border-grid-vertical'?: string
  '--border-grid-horizontal'?: string
  '--border-brand-default'?: string
  '--border-brand-hover'?: string
  '--border-brand-active'?: string
  '--border-brand-disabled'?: string
  '--border-onbrand-default'?: string
  '--border-onbrand-light'?: string
  '--border-danger-default'?: string
  '--border-danger-hover'?: string
  '--border-danger-active'?: string
  '--border-danger-disabled'?: string
  '--border-ondanger-default'?: string
  '--border-ondanger-light'?: string
  '--border-success-default'?: string
  '--border-success-hover'?: string
  '--border-success-active'?: string
  '--border-success-disabled'?: string
  '--border-onsuccess-default'?: string
  '--border-onsuccess-light'?: string
  '--border-warn-default'?: string
  '--border-warn-hover'?: string
  '--border-warn-active'?: string
  '--border-warn-disabled'?: string
  '--border-onwarn-default'?: string
  '--border-onwarn-light'?: string
}

export interface AlertTheme {
  '--sp-alert-padding'?: string
  '--sp-alert-border-width'?: string
  '--sp-alert-border-style'?: string
  '--sp-alert-border-color'?: string
  '--sp-alert-border-radius'?: string
  '--sp-alert-bg-color'?: string
  '--sp-alert-text-color'?: string

  '--sp-alert-title-font'?: string
  '--sp-alert-description-font'?: string
}

export interface BadgeTheme {
  '--sp-badge-padding'?: string
  '--sp-badge-radius'?: string
  '--sp-badge-font'?: string
  '--sp-badge-bg-color'?: string
  '--sp-badge-text-color'?: string
  '--sp-badge-size'?: string
  '--sp-badge-dot-size'?: string
}

export interface ButtonTheme {

  /*button base*/
  '--sp-button-border'?: string
  '--sp-button-border-radius'?: string
  '--sp-button-padding'?: string
  '--sp-button-font'?: string

  /* button background */
  '--sp-button-bg-color'?: string
  '--sp-button-bg-color-hover'?: string
  '--sp-button-bg-color-active'?: string
  '--sp-button-bg-color-disable'?: string

  /* button text */
  '--sp-button-text-color'?: string
  '--sp-button-text-color-hover'?: string
  '--sp-button-text-color-active'?: string
  '--sp-button-text-color-disable'?: string
}

export interface CheckboxTheme {
  '--sp-checkbox-size'?: string
  '--sp-checkbox-border-width'?: string
  '--sp-checkbox-border-style'?: string
  '--sp-checkbox-border-radius'?: string

  /* checkbox unchecked border */
  '--sp-checkbox-border-color'?: string
  '--sp-checkbox-border-color-hover'?: string
  '--sp-checkbox-border-color-active'?: string
  '--sp-checkbox-border-color-disable'?: string

  /* checkbox half unchecked */
  '--sp-checkbox-indeterminate-padding'?: string
  '--sp-checkbox-indeterminate-radius'?: string
  '--sp-checkbox-indeterminate-bg-color'?: string
  '--sp-checkbox-indeterminate-bg-color-hover'?: string
  '--sp-checkbox-indeterminate-bg-color-active'?: string
  '--sp-checkbox-indeterminate-bg-color-disable'?: string

  /* checkbox checked */
  '--sp-checkbox-checked-padding'?: string
  '--sp-checkbox-checked-text-color'?: string
  '--sp-checkbox-checked-bg-color'?: string
  '--sp-checkbox-checked-bg-color-hover'?: string
  '--sp-checkbox-checked-bg-color-active'?: string
  '--sp-checkbox-checked-bg-color-disable'?: string
}

export interface InputTheme {
  '--sp-input-height'?: string
  '--sp-input-padding'?: string
  '--sp-input-border-radius'?: string
  '--sp-input-border-width'?: string
  '--sp-input-border-style'?: string
  '--sp-input-border-color'?: string
  '--sp-input-border-color-hover'?: string
  '--sp-input-border-color-focus'?: string
  '--sp-input-bg-color'?: string
  '--sp-input-text-color'?: string
  '--sp-input-font'?: string
}

export interface LinkTheme {
  '--sp-link-text-color'?: string
  '--sp-link-text-color-hover'?: string
  '--sp-link-text-color-active'?: string
  
  '--sp-link-underline-width'?: string
  '--sp-link-underline-style'?: string
  '--sp-link-underline-color'?: string
  '--sp-link-underline-color-hover'?: string
  '--sp-link-underline-color-active'?: string
}

export interface ListTheme {
  '--sp-list-item-font'?: string
  '--sp-list-item-border-radius'?: string
  '--sp-list-item-bg-color'?: string
  '--sp-list-item-bg-color-hover'?: string
  '--sp-list-item-bg-color-active'?: string
}

export interface PopoverTheme {
  '--sp-popover-shadow'?: string
  '--sp-popover-bg-color'?: string
  '--sp-popover-border-radius'?: string
  '--sp-popover-border-width'?: string
  '--sp-popover-border-style'?: string
  '--sp-popover-border-color'?: string
}

export interface ProgressTheme {
  '--sp-progress-height'?: string
  '--sp-progress-outer-border-radius'?: string
  '--sp-progress-outer-bg-color'?: string
  '--sp-progress-inner-border-radius'?: string
  '--sp-progress-inner-bg-color'?: string
}

export interface ScrollbarTheme {
  '--sp-vertical-scrollbar-width'?: string
  '--sp-vertical-scrollbar-border-radius'?: string
  '--sp-vertical-scrollbar-bg-color'?: string

  '--sp-vertical-scrollbar-slider-width'?: string
  '--sp-vertical-scrollbar-slider-border-radius'?: string
  '--sp-vertical-scrollbar-slider-bg-color'?: string

  '--sp-horizontal-scrollbar-height'?: string
  '--sp-horizontal-scrollbar-border-radius'?: string
  '--sp-horizontal-scrollbar-bg-color'?: string

  '--sp-horizontal-scrollbar-slider-height'?: string
  '--sp-horizontal-scrollbar-slider-border-radius'?: string
  '--sp-horizontal-scrollbar-slider-bg-color'?: string
}

export interface SwitchTheme {
  '--sp-switch-on-bg-color'?: string
  '--sp-switch-on-bg-color-hover'?: string

  '--sp-switch-off-bg-color'?: string
  '--sp-switch-off-bg-color-hover'?: string

  '--sp-switch-on-action-bg-color'?: string
  '--sp-switch-off-action-bg-color'?: string

  '--sp-switch-height'?: string
}

export interface TagTheme {

  /* tag base */
  '--sp-tag-border-width'?: string
  '--sp-tag-border-style'?: string
  '--sp-tag-border-color'?: string
  '--sp-tag-border-radius'?: string
  '--sp-tag-padding'?: string
  '--sp-tag-line-height'?: string
  '--sp-tag-font-size'?: string

  /* tag background */
  '--sp-tag-bg-color'?: string
  
  /* tag text */
  '--sp-tag-text-color'?: string

  /* tag close */
  '--sp-tag-closable-size'?: string
  '--sp-tag-closable-border-radius'?: string
  '--sp-tag-closable-bg-color'?: string
}