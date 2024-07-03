import style from './Header.module.css'
import perfil from '../../../public/img/perfil.jpg'
import portada from '../../../public/img/portada.jpg'
import Description from '../Description/Description'

export default function Header() {
    //establezco un objeto definido, simulando un dato que me llegaria por servidor
    const user = {
        name: 'Max Lopez 🐾',
        username: '@maquinadelmal2000',
        imagenPerfil: perfil.src,
        imagenPortada: portada.src
    }
    return (
        <header className={style.container}>
            {/*Foto de Portada*/}
            <div className={style.portada}>
                <img src={user.imagenPortada} alt="" />
            </div>
            {/* Foto del usuario */}
            <div className={style.perfil}>
                <img src={user.imagenPerfil} alt="foto de perfil" />
            </div>
            {/* Nombre del usuario */}
            <div className={style.username}>
                <h3>{user.name}</h3>
                <h5>{user.username}</h5>
            </div>
            {/*Descripcion del usuario*/}
            <Description/>
        </header>
    )
}