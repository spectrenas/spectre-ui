import { useNavigate } from '@solidjs/router'

import { Ghost } from '@/components/icon/Ghost'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div class='w-full h-full flex justify-center items-center'>
      <Ghost
        class='select-none text-200px cursor-pointer hover:text-[var(--text-brand-hover)] active:text-[var(--text-brand-active)]'
        onClick={() => navigate('en/guides/getting-started')}>
      </Ghost>
    </div>
  )
}