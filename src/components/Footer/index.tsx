import style from './style.module.css'
import { Copyright } from 'lucide-react'

export function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        2024 <Copyright size={14} /> Todos os direitos reservados
      </p>
      <strong>MKT Virtus</strong>
    </footer>
  )
}
