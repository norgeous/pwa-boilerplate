import styled from 'styled-components';

export const ButtonBase = styled.button`
  color: inherit;
  font-size: var(--font-size-input);
  padding: var(--gap-sm) var(--gap-md);
  text-transform: var(--button-text-transform);
  border-radius: var(--button-radius);
  border-width: var(--button-border-width);
  border-style: solid;
  font-weight: bold;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  box-sizing: border-box;
`;
