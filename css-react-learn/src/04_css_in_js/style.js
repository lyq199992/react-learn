import styled from 'styled-components'

export const AppWrapper = styled.div.attrs({
  tColor: (props => props.color) || 'blue'
})`
  .section {
    border: 1px solid ${props => props.tColor};
    font-size: ${props => props.size}px;
  }
` 