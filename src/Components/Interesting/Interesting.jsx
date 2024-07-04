import style from './Interesting.module.css'

export default function Interesting({ interesting }) {
    console.log(interesting)
    return (interesting.length > 0 &&
            <section className={style.container}>
                <p>interes que puedes tener en comun:</p>
                {interesting.map((i, index) => {
                    return (
                        <div key={index}>
                            <p>#{i}</p>
                        </div>
                    )
                })}
            </section>)
}