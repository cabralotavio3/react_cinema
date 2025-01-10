import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
   height: 6.5rem;
  display: flex;
  background-color: ${colors.primary};
  justify-content: space-between;
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.black};
  }
  a:hover {
    font-weight: bold;
  }
`