import style from './Header.module.css'
import Description from '../Description/Description'
import Interesting from '../Interesting/Interesting'

export default function Header({user}) {
    return (
        user &&
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
            <Description description={user.description}/>
             {/*seccion de interes*/}
             <Interesting interesting={user.interesting}/>
        </header>
    )
}