import { Section } from './styles'
import img1 from "../../assets/zodiac.png"

export function Zodiac() {
    return (
      <Section>
                  <section className="poster">
          <img src={img1} alt="imgzodiac" />
        </section>

        <section className="quadrado">
            <h2>SINOPSE:</h2>
            <aside>
                <p>
                       1º de agosto de 1969. Três cartas diferentes chegam aos jornais San Francisco Chronicle, San Francisco Examiner e Vallejo Times-Herald, enviadas pelo mesmo remetente. A carta enviada ao Chronicle trazia a confissão de um assassino e as três juntas formavam um código que supostamente revelaria a identidade do criminoso. O assassino exigia que as cartas fossem publicadas, caso contrário mais pessoas morreriam. Um casal de Salinas consegue decodificar a mensagem, mas é Robert Graysmith (Jake Gyllenhaal), um tímido cartunista, quem descobre sua intenção oculta: uma referência ao filme "Zaroff, o Caçador de Vidas" (1932). Os assassinatos e as cartas se sucedem, provocando pânico na população de San Francisco.
                </p>
                <p> </p>
                <p>Jake Gyllenhaal, Mark Ruffalo, Anthony Edwards, Robert Downey Jr, Brian Cox, John Carroll Lynch</p>
                <p> </p>
                <p> </p>
                <p>
                -DURAÇÃO: 157 min             -DIRETOR: David Fincher             -CLASSIFICAÇÃO: 16 Anos             -GÊNERO: Suspense
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