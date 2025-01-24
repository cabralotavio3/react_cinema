import { Section } from './styles'
import img1 from "../../assets/duna.png"

export function Duna() {
    return (
      <Section>
         <section className="poster">
          <img src={img1} alt="imgbatman" />
        </section>

        <section className="quadrado">
            <h2>SINOPSE:</h2>
            <aside>
                <p>
                           Para uma jornada épica em Duna: Parte 2! Timothée Chalamet retorna como Paul Atreides, unindo forças aos Fremen em busca de vingança e justiça. 
                    Uma saga espiritual e marcial se desenrola, enquanto Paul enfrenta o peso de seu destino. 
                    Com uma Guerra Santa se desdobrando pelo universo, ele se vê diante de escolhas angustiantes entre o amor e a responsabilidade cósmica. Não perca este capítulo emocionante, repleto de reviravoltas e decisões que moldarão o futuro do universo. Duna: Parte 2 - uma experiência cinematográfica imperdível que desafia o destino e mergulha nas profundezas da saga de Paul Atreides. Classificação indicativa 14 Anos. Contém violência.
                </p>
                <p> </p>
                <p>
                    -ELENCO: Timothée Chalamet, Rebecca Ferguson, Zendaya, Josh Brolin, Florence Pugh, Austin Butler, Christopher Walken, Javier Bardem
                </p>
                <p> </p>
                <p> </p>
                <p>
                    -DURAÇÃO: 170 min             -DIRETOR: Denis Villeneuve             -CLASSIFICAÇÃO: 14 Anos             -GÊNERO: Ação
                </p>
            </aside>
            <p> </p>
                <h2>HORÁRIO/SALA:</h2>

            <aside className='a3'>
                <p>
                    QUARTA - FEIRA:
                </p>
                <p> </p>
                <p className='p2'>
                    - 14:30 - AUDITÓRIO
                </p>
                <p> </p>
            <aside className='a4'>
                <button>VOTAR PARA SER PASSADO</button>
            </aside>
            </aside>
        </section>
      </Section>
    )
  }