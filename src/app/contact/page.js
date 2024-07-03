'use client'
import { useState } from "react"
import style from './contact.module.css'
import validation from "@/Utils/Validator/validator"
import Modal from "@/Components/Modal/Modal"

export default function Contact() {
    //Declaro los estados y determino mi componente como uno
    //de usuario y no de servidor con 'use client'
    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    })
    //esta variable almacena los errores que detecte la funcion validadora
    const [error, setError] = useState({ name: 'Debes colocar un nombre' })
    //con esta variable creo un estado para saber si mi funcion de enviar datos aun esta cargando
    const [loading, setLoading] = useState(false)
    //con este estado controlo lo estados de mi ventana modal
    const [modalActive, setModalActive] = useState(false)
    //este estado es para certificar que la solicitud fue enviada con exito
    const [successfully, setSuccessfully] = useState(false)
    //esta funcion detecta todos los cambios de mi formulario y las guarda en mi estado "inputs"
    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...inputs, [name]: value }
        setInputs(newInput)
        //por cada cambio mis objeto va a pasar por el validador y asi saber si faltan datos o si los que hay son validos
        setError(validation(newInput))
    }
    //sendForm se encarga de enviar la info al servidor al darle click en "enviar
    const sendForm = (e) => {
        //esto se establece para que al darle click en enviar no recargue la pagina
        e.preventDefault();
        //verificamos que no haya errores asi le avisamos al cliente que debe rellenar los inputs con valores validos
        if (Object.keys(error).length === 0 && inputs.name.length > 0) {
            //simulamos que al dar click en "enviar" enviamos la informacion validada al servidor
            //activamos el estado loading
            setLoading(true)
            setTimeout(() => {
                //desactivamos el estado loading ya que al entrar aca significa qur todo esta cargado
                setLoading(false);
                //indicamos que la carga fue exitosa a travez de este estado 
                setSuccessfully(true)
                //por ultimo activamos el modal que nos dira que el envio fue exitoso
                setModalActive(true)
                //reseteamos
                setInputs({ name: '', lastName: '', email: '', message: '' })
            }, 2000);
        }
        if (Object.keys(error).length > 0) {
            setModalActive(true)
        }
    }

    const reset = () => {
        setError({ name: 'Debes colocar un nombre' })
        setSuccessfully(false)
    }

    return (
        <div className={style.container}>
            <div className={style.window}>
                <div className={style.titulo}>
                    <h3>Enviame un mensaje y me pondre en contacto contigo {':)'}</h3>
                </div>

                <form className={style.formulario} onSubmit={sendForm}>
                    <div className={style.groupi}>
                        <div className={style.inputGroup}>
                            <label className={style.label} htmlFor="name">Nombre</label>
                            <input className={style.input} autocomplete="off" id='name' type="text" name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className={style.inputGroup}>
                            <label className={style.label} htmlFor="lastName">Apellido</label>
                            <input className={style.input} autocomplete="off" id='lastName' type="text" name="lastName" value={inputs.lastName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={style.inputGroup}>
                        <label className={style.label} htmlFor="email">Email</label>
                        <input className={style.email} id='email' type="email" name="email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <div className={style.divMessage}>
                        <label className={style.label} htmlFor="message">Mensaje</label>
                        <textarea className={style.message} id='message' type="text" name="message" value={inputs.message} onChange={handleChange} />
                    </div>
                    {/* segun el estado de loading se aplicaran estilos y contenido a mi boton */}
                    <button className={loading ? style.btnLoading : style.btn} type="submit">
                        {loading ? <div className={style.loader}></div> : 'Enviar'}
                    </button>
                </form>
                {/* segun el estado de la variable modal, los erros y los aciertos que le pase por parametro habra una ventana con un mensaje */}
                {modalActive && <Modal successfully={successfully} error={error} setModalActive={setModalActive} modalActive={modalActive} reset={reset} />}
                {/* <Modal successfully={successfully} error={error} setModalActive={setModalActive} modalActive={modalActive}/> */}
            </div>
        </div>

    )
}