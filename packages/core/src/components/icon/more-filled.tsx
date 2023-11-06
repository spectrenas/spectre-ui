import type { JSX } from 'solid-js'

export function MoreFilled(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16' {...props}>
      <path d='M4.5 8C4.5 8.69036 3.94036 9.25 3.25 9.25C2.55964 9.25 2 8.69036 2 8C2 7.30964 2.55964 6.75 3.25 6.75C3.94036 6.75 4.5 7.30964 4.5 8Z' fill='currentColor' fill-opacity='0.85' />
      <path d='M9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75C8.69036 6.75 9.25 7.30964 9.25 8Z' fill='currentColor' fill-opacity='0.85' />
      <path d='M12.75 9.25C13.4404 9.25 14 8.69036 14 8C14 7.30964 13.4404 6.75 12.75 6.75C12.0596 6.75 11.5 7.30964 11.5 8C11.5 8.69036 12.0596 9.25 12.75 9.25Z' fill='currentColor' fill-opacity='0.85' />
    </svg>
  )
}