import style from './Nav.module.css'
import Link from 'next/link';
import StyleMode from '../StyleMode/StyleMode';
import { GrContact } from "react-icons/gr";

export default function Nav() {
    return (
        <nav className={`${style.nav}`}>
            <Link href="/" style={{ all: 'unset' }}>
                <h3 className={style.sub}>Perfil de Usuario</h3>
            </Link>
            <div className={style.etiquetas}>
                <Link href="/contact" style={{ all: 'unset' }}>
                    <h3 className={`${style.sub} ${style.contactL}`}>Contactame</h3>
                    <h3 className={style.contact}><GrContact /></h3>
                </Link>
                {/*Toggle de estilos */}
                <StyleMode />
            </div>
        </nav>

    )
}