import style from './Modal.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ mensaje, successfully, error, setModalActive, modalActive, reset}) {
    //convierto los valores de mi objeto "error", a un array de valores
    const listErrors = Object.values(error)
    //esta funcion se encarga de cerrar el modal, si esta true, pasar a false y viceversa
    //ademas ejecuta el reset del componente padre
    const handleClose = () => {
        setModalActive(!modalActive)
        reset()
    }

    return (
        <div id='background' className={style.fullScreen} onClick={handleClose}>
            {/*con event.stop cancelo el handleClose dentro de la ventana modal*/}
            <div className={style.window} onClick={(event) => event.stopPropagation()}>
                {/*Si hay algo en el parametro mensaje se muestra este bloque */}
                {mensaje && <p className={style.texto}>{mensaje}</p>}
                {/*Si hay algo en el parametro error se muestra este bloque */}
                {listErrors.length > 0 &&
                    <div className={style.error}>
                        <span>
                            <IoIosCloseCircleOutline />
                        </span>
                        {listErrors.map((error, indice) => {
                            return (
                                <p key={indice}>{error}.</p>
                            );
                        })}
                    </div>}
                  {/*Si hay algo en el parametro successfully se muestra este bloque */}
                  {successfully &&
                    <div className={style.successfully}>
                        <span>
                            <IoMdCheckmarkCircleOutline />
                        </span>
                        <p>Mensaje enviado con exito!</p>
                    </div>}
            </div>
        </div>
    )
}