import styles from"./Header.module.css"; 

function Header () {
    return(
        <>
        <header className={styles.header}>
            <span>AluraFlix</span>
                <nav>
                    <a href="/">Home</a>
                    <a href="/novovideo">Novo Video</a>
                </nav>
        </header>
        </>
    );
}
export default Header;