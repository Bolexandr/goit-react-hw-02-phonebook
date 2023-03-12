import styled from 'styled-components';
import { Form, Field } from 'formik';
export const BasicLabel = styled.label`
  color: green;
  text-align: center;
  /* outline: 2px solid black; */
  margin: 5px;
  display: inline-block;
  color: rgb(163, 72, 72);
  font-family: 'Righteous', serif;
  font-size: 30px;
  text-shadow: 0 6px 4px #85c226, -3px -5px 4px #fe2192, 3px -5px 4px #f7c200;
`;
export const BasicInput = styled(Field)`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  /* border: 2px solid var(--input-border); */
  outline: 5px solid blueviolet;
  border-radius: 4px;
`;

export const ErorValidSpan = styled.div`
  color: #f1f9b7;
  background: rgb(255, 171, 50);
  background: linear-gradient(
    274deg,
    rgba(255, 38, 64, 0.8132140084598841) 22%,
    rgba(255, 38, 64, 0.8132140084598841) 56%
  );
  ::first-letter {
    text-transform: capitalize;
  }

  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-image: linear-gradient(#42a1ec, #0070c9);
  border: 1px solid #0077cc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  direction: ltr;
  display: block;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
    Helvetica, Arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: 1.47059;
  min-width: 30px;
  overflow: visible;
  padding: 4px 15px;
  text-align: center;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  :disabled {
    cursor: default;
    opacity: 0.3;
  }

  :hover {
    background-image: linear-gradient(#51a9ee, #147bcd);
    border-color: #1482d0;
    text-decoration: none;
  }

  :active {
    background-image: linear-gradient(#3d94d9, #0067b9);
    border-color: #006dbc;
    outline: none;
  }

  :focus {
    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
    outline: none;
  }
  margin-top: 15px;
`;

export const BasicForm = styled(Form)`
  border: 5px solid #121212;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 30px;
  border-radius: 11px;

  max-width: 700px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;
