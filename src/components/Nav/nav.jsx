import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
function Nav() {
    return (
       
            <nav className="bg-light">
                <div className="d-flex justify-content-between">
                    <div className="ml-4"><img width={50} src={logo} alt="" /></div>
                    <ul className="nav mr-5">
                        <li className="m-2"><Link className="nav-link" to="/personajes">Personajes</Link></li>
                        <li className="m-2"><Link className="nav-link" to="/ubicaciones">Ubicaciones</Link></li>
                        <li className="m-2"><Link className="nav-link" to="/episodios">Episodios</Link></li>
                    </ul>
                </div>
            </nav>
           
       
    )
}

export default Nav;