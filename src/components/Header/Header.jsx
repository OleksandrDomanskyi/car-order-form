import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <p className={s.text}>Stand with Ukraine!!!</p>
            </div>
        </header>
    )
}

export default Header;