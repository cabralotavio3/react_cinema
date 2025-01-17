import { Section } from './styles'
import img1 from "../../assets/duna.png"
import img2 from "../../assets/batman.png"
import img3 from "../../assets/zodiac.png"
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Section>
       <h1>VOTAÇÃO DA SEMANA: </h1>
        <div>
            <Link to="\duna"> <img src={img1} alt="imgduna" /></Link>
            <Link to="\zodiac"> <img src={img3} alt="imgzodiac" /></Link>
            <Link to="\batman"> <img src={img2} alt="imgbatman" /></Link>
        </div>
    </Section>
  )
}
