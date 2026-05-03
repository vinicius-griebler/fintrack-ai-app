import Image, { StaticImageData } from 'next/image'

import Food from '@/assets/food-icon.png'
import Box from '@/assets/box-icon.png'
import Tv from '@/assets/tv-icon.png'

interface TransactionIconProps {
  type: 'DEPOSIT' | 'EXPENSE' | 'INVESTMENT'
}

const ICON_CONFIG: Record<
  TransactionIconProps['type'],
  {
    icon: StaticImageData
    bg: string
    color: string
  }
> = {
  DEPOSIT: {
    icon: Box,
    bg: 'bg-emerald-100 dark:bg-emerald-500/20',
    color: 'text-emerald-600 dark:text-emerald-400',
  },
  EXPENSE: {
    icon: Food,
    bg: 'bg-rose-100 dark:bg-rose-500/20',
    color: 'text-rose-600 dark:text-rose-400',
  },
  INVESTMENT: {
    icon: Tv,
    bg: 'bg-blue-100 dark:bg-blue-500/20',
    color: 'text-blue-600 dark:text-blue-400',
  },
}

export function TransactionIcon({ type }: TransactionIconProps) {
  const config = ICON_CONFIG[type]

  return (
    <div className={`p-3 rounded-xl ${config.bg}`}>
      <Image
        src={config.icon}
        alt={type}
        width={20}
        height={20}
        className={config.color}
      />
    </div>
  )
}