import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div>
                    <ul>
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



{/* <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer> */}

