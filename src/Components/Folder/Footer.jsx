import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div>
                    <ul>
                        {/* dejo una seccion para los enlaces, mi info, y el repositorio */}
                        <li><a href="https://portafolio-v2-blue.vercel.app/">{'Acerca de mi (Developer)'}</a></li>
                        <li><a href="/contact">Contacta a Max</a></li>
                        <li><a href="https://github.com/hlrivero18/User-profile">Repositorio</a></li>
                    </ul>
                </div>
                <hr />
                <span>@2024 Hector Luis Rivero - Frontend Developer</span>
            </div>
        </footer>
    )
}
