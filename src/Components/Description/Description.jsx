import style from "./Description.module.css"

export default function Description() {
    return (
        <section className={style.container}>
            <h3>Acerca de mi:</h3>
            <p className={style.description}>
                
                🐾 ¡Hola! Soy Max, un perro lleno de energía y amor. 🐾
                <br />
                Soy un perro feliz, siempre listo para nuevas aventuras y momentos tiernos. Mi día está lleno de paseos por el parque, juegos con mis juguetes favoritos y muchas siestas en lugares soleados.
                <br />
                Me encanta hacer nuevos amigos, tanto humanos como peludos. Aquí compartiré mis travesuras diarias, fotos adorables, y quizás algunos trucos que he aprendido. ¡Sígueme para unirte a mis aventuras y descubrir el mundo desde mi perspectiva canina!
                <br />
                #MaxAdventures #PerroFeliz #GoldenRetriever #VidaDePerro
            </p>
        </section>
    )
}