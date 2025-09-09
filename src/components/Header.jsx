import { BsFillMoonStarsFill ,BsFillSunFill  } from "react-icons/bs";
import { Link } from "react-router-dom";
// import logo from '../assets/logo_webp.webp';
import logo from '../assets/logo_v2.png';
import { useState } from "react";
export function Header(){
    const [theme,setTheme] = useState(false);
    
    const toggleTheme = ()=>{
        document.querySelector('body').className = (!theme)?'light-theme':'';
        setTheme(!theme);
    }
    return(
    <header className="main-header">
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/cosa">Cosa</Link>
            <Link to="/">home_2</Link> */}

            <Link to="/">Home</Link>
            <Link to="/desafios"><img src={logo} alt="code dojo logo, es amarillo, y con una forma abstracta" /></Link>
            <Link to="/desafios">Desafíos</Link>
            
        </nav>
        <div className="theme-toggler" onClick={toggleTheme}>
            {!theme && <BsFillMoonStarsFill/>}
            {theme && <BsFillSunFill/>}
        </div>
     </header>
    );
}