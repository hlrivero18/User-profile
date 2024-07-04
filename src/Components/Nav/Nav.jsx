import { Roboto_Mono, Lexend, Alata } from 'next/font/google';
import style from './Nav.module.css'
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={`${style.nav}`}>
            <Link href="/" style={{ all: 'unset' }}>
                <h3 className={style.sub}>Perfil de Usuario</h3>
            </Link>
            <Link href="/contact" style={{ all: 'unset' }}>
                <button className={style.btn}>Contactame!</button>
            </Link>
        </nav>

    )
}