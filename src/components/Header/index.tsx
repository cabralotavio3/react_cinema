import { Link } from "react-router-dom"
import { SHeader, NavBar } from "./styles"
import Logo from "../../assets/logo.png"
import perfil from "../../assets/perfil.png"
export function Header() {

  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <NavBar>
        <div>
          <Link to="/">PROGRAMAÇÃO</Link>
          <img src={perfil} alt="Logo do site" />
        </div>
      </NavBar>
    </SHeader>
  )
}