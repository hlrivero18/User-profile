import { colorInteresting } from '@/Utils/colorInteresting'
import style from './Interesting.module.css'

export default function Interesting({ interesting }) {
    console.log(interesting)
    return (interesting.length > 0 &&
        <section className={style.container}>
            <p>interes que puedes tener en comun:</p>
            {/*hago un mapeo, y por cada elemento imprimo un div con el interes
            ademas le inyecto un color con la funcion colorInterestig segun el valor que reciba por parametro*/}
            {interesting.map((i, index) => {
                return (
                    <div key={index} style={{backgroundColor:`${colorInteresting(i)}`}}>
                        <p>#{i}</p>
                    </div>
                )
            })}
        </section>)
}