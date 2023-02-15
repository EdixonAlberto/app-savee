import './LayoutMain.scss'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs } from '~/components/Tabs'

interface ILayoutMainProps {
  children: ReactNode
}

export function LayoutMain({ children }: ILayoutMainProps) {
  const { pathname } = useLocation()
  const viewCurrent = pathname.split('/')[1]

  return (
    <div className="Layout-Main">
      {children}
      <Tabs viewCurrent={viewCurrent} />
    </div>
  )
}
