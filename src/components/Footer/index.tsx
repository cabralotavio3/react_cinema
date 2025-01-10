import { SFooter } from "./styles"
import Face from "../../assets/face.png"
import Insta from "../../assets/insta.png"
import Whatsapp from "../../assets/Whatsapp.png"
import CEFET from "../../assets/cefetlogo.png"

export function Footer() {
  return (
    <SFooter>
      <span>
            <a href="https://www.instagram.com/"><img src={Insta} alt="perfil"/></a>
            <a href="https://www.facebook.com/?locale=pt_BR"><img src={Face} alt="perfil"/></a>
            <a href=""><img src={Whatsapp} alt="perfil"/></a> 
        </span>
        <img src={CEFET} alt="logocefet"/>
    </SFooter>
  )
}