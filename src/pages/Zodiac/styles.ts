import styled from 'styled-components'

export const Section = styled.section`
  margin: 0 auto;
  background-color: black;
  display: flex;
  .poster {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.poster img{
    scale: 2;
}

.quadrado {
    width: 70%;
    padding: 5rem;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
}

.quadrado aside {
    background-color: #2E6090;
    width: 100%;
    height: 20rem;
    border: 0.3rem solid black;
    font-size: 1.4rem;
}

.quadrado .a2{
    width: 100%;
    height: 4rem;
}

.quadrado .a3 {
    background-color: #2E6090;
    width: 90%;
    height: 20rem;
    border: 0.3rem solid black;
    font-size: 1.5rem;
    font-weight: 200;
}

.quadrado .a3 p {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
}

.quadrado .a3 p {
    font-size: 1.5rem;
    font-weight: bold;
}

.quadrado .a3 .a4{
    margin-left: 10rem;
    background-color: red;
    width: 70%;
    height: 6rem;
}

.quadrado .a3 aside button{
    margin-left: 12.5rem;
    background-color: red;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;

}
`
