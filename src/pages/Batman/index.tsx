import { Section } from './styles'
import img1 from "../../assets/batman.png"

export function Batman() {
    return (
      <Section>
         <section className="poster">
          <img src={img1} alt="imgduna" />
        </section>

        <section className="quadrado">
            <h2>SINOPSE:</h2>
            <aside>
                <p>
                           Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.</p>
                <p> </p>
                <p>
                  -ELENCO: Robert Pattinson, Zoë Kravitz, Paul Dano
                </p>
                <p> </p>
                <p>
                -DURAÇÃO: 170 min             -DIRETOR: Matt Reeves             -CLASSIFICAÇÃO: 14 Anos             -GÊNERO: Suspense
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