import './Tabs.scss'
import { useNavigate } from 'react-router-dom'
import { Icon } from '~/components/Icons'

interface ITabsProps {
  viewCurrent: string
}

export function Tabs({ viewCurrent }: ITabsProps) {
  const navigate = useNavigate()

  function routeActive(view: string): string {
    if (viewCurrent === view) return 'active'
    else return ''
  }

  return (
    <footer className="Tabs">
      <ul>
        <li className={routeActive('')} onClick={() => navigate('/')}>
          <Icon.Home />
        </li>

        <li className={routeActive('plan')} onClick={() => navigate('/plan')}>
          <Icon.Calendar />
        </li>

        <li className={routeActive('shopping')} onClick={() => navigate('/shopping')}>
          <Icon.Cart />
        </li>

        <li className={routeActive('profile')} onClick={() => navigate('/profile')}>
          <Icon.User />
        </li>
      </ul>
    </footer>
  )
}
