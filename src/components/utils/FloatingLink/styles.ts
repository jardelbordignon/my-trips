import styled from 'styled-components'

export type PositionType = 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft'

interface IWrapper {
  position: PositionType
}

export const Wrapper = styled.div<IWrapper>`
  position: fixed;
  z-index: 1100; // bigger than all the other elements
  top: ${(props) =>
    ['topRight', 'topLeft'].includes(props.position) ? 'var(--medium)' : null};
  bottom: ${(props) =>
    ['bottomRight', 'bottomLeft'].includes(props.position)
      ? 'var(--medium)'
      : null};
  right: ${(props) =>
    ['topRight', 'bottomRight'].includes(props.position)
      ? 'var(--medium)'
      : null};
  left: ${(props) =>
    ['bottomLeft', 'topLeft'].includes(props.position)
      ? 'var(--medium)'
      : null};
  color: var(--white);
  cursor: pointer;
  width: 24rem;
  height: 24rem;

  &:hover {
    svg: {
      color: var(--highlight);
    }
  }
`
