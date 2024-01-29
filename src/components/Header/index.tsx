import Logo from '../../assets/logomkt.png'
import style from './style.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <img className={style.logo} alt="Logo" src={Logo} />
    </header>
  )
}
