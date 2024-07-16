import {Link} from "react-router-dom";
import styles from "./HomeLink.module.css";

function HomeLink({ url, children }) {
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
    
}
export default HomeLink;