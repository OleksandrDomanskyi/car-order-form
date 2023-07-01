import s from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={s.footer}>
                    <p className={s.text}>
                        &#169; 2023 &#124; All Rights Reserved &#124; Developed with
                    </p>
                    <svg
                        className={s.icon}
                        width="16"
                        height="16"
                        viewBox="0 0 32 32"
                        fill="var(--accent-color)"
                    >
                        <path
                        d="M16 30.144l-2.24-2.218c-8.32-7.287-13.76-12.198-13.76-18.218 0-4.911 3.84-8.713 8.8-8.713 2.72 0 5.44 1.267 7.2 3.327 1.76-2.059 4.48-3.327 7.2-3.327 4.96 0 8.8 3.802 8.8 8.713 0 6.020-5.44 10.931-13.76 18.218l-2.24 2.218z"
                        ></path>
                    </svg>
                    <p className={s.text}>for</p>

                    <a
                        className={s.link}
                        href="https://chiacademy.software/"
                        target="_blank"
                        rel="noreferrer"
                        >CHI
                        <span className={s.item}> IT</span>
                        <span> Academy</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;