import style from "./Description.module.css"

export default function Description({description}) {
    return (
        <section className={style.container}>
            <h3>Acerca de mi:</h3>
            <p className={style.description}>
                {description}
            </p>
        </section>
    )
}