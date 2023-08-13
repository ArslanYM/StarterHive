import "./notFound.css";
import imageDark from "./images/dark-404-image.png";
import imageLight from "./images/light-404-image.png"
import { ThemeContext } from "../../Context/ThemeContext";
import { useContext } from "react";

const NotFound=()=>{
    const { theme } = useContext(ThemeContext)
    return(
        <>
        <div className="errorPage mb-auto">
            {
                theme.current_theme==="dark"? <img className="img-404" src={imageDark}/>: <img src ={imageLight} className="img-404"/>
            }
       </div>
        </>
    )
}

export default NotFound;