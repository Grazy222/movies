import styles from"./Header.module.css"; 

function Header () {
    return(
        <header className={styles.header}>
        <span>AluraRick</span>
        <nav>
        <a href="#">Home</a>
        <a href="#">Novo Video</a>
        </nav>
        </header>

    );
}
export default Header;