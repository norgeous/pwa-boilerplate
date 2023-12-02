import styled, { css } from 'styled-components';

const ButtonBase = styled.button`
  color: inherit;
  font-size: var(--font-size-input);
  padding: var(--gap-sm) var(--gap-md);
  text-transform: var(--button-text-transform);
  border-radius: var(--button-radius);
  border-width: var(--button-border-width);
  border-style: solid;
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};
  font-weight: bold;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: ${({ isWide }) => (isWide ? '100%' : 'auto')};
  text-decoration: none;
  box-sizing: border-box;
`;

export const Solid = styled(ButtonBase)`
  ${({ variant }) => css`
    background-color: var(--palette-${variant});
    color: var(--palette-${variant}-text-color);
    border-color: var(--palette-${variant});
    :hover:enabled:not(:active) {
      background-color: var(--palette-${variant}-hover-color);
      border-color: var(--palette-${variant}-hover-color);
    }
  `}
`;

export const Outline = styled(ButtonBase)`
  background-color: transparent;
  ${({ variant }) => css`
    color: var(--palette-${variant});
    border-color: var(--palette-${variant});
    :hover:enabled:not(:active) {
      color: var(--palette-${variant}-hover-color);
      border-color: var(--palette-${variant}-hover-color);
    }
  `}
`;

export const Simple = styled(ButtonBase)`
  background-color: transparent;
  border-color: transparent;
  :hover:enabled:not(:active) {
    color: var(--palette-primary);
  }
`;

export const Label = styled.span`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
