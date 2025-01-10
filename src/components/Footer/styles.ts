import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SFooter = styled.footer`
  /* Rodapé */
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: ${colors.primary};

  span a{
    padding-right: 1.2rem;
  }
`