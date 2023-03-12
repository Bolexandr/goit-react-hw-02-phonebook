import styled from 'styled-components';

export const BasicCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1.5px solid lightblue;
  border-radius: 9px;
  background-color: gold;
`;

export const DelButton = styled.button`
  --c: #229091; /* the color*/
  font-family: system-ui, sans-serif;
  font-size: 30px;
  cursor: pointer;
  padding: 6px 8px;
  font-weight: bold;
  border: none;
  border-radius: 5px;

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
  :hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }
  :active {
    box-shadow: 0 0 9e9Q inset #0009;
    background-color: var(--c);
    color: #fff;
  }
`;

export const NumberArea = styled.a`
  --c: #229091;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  padding: 8px;
  border: 3px solid var(--c);
  border-radius: 7px;
  color: #0009;
  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
  :hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }
  :active {
    box-shadow: 0 0 9e9Q inset #0009;
    background-color: var(--c);
    color: #fff;
  }
`;
