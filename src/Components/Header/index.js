// import style from"./Header.module.css"; 

function Header () {
    return(
        <>
        <header className={style.header}>
            <span>AluraFlix</span>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Novo Video</a>
                </nav>
        </header>
        </>
    );
}
export default Header;