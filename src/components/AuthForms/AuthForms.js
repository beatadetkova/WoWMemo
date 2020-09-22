import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Welcome = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  max-width: 500px;
  padding: 1em;
  background: linear-gradient(to right, #e65c00, #f9d423);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Friz Quadrata Regular OS;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-family: Friz Quadrata Regular OS;
`;

const Button = styled.button`
  background: linear-gradient(to right, #e65c00, #f9d423);
  border-color: 2px inset #e65c00;
  border-radius: 3px;
  padding: 1rem;
  color: black;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  font-family: Friz Quadrata Regular OS;
`;

const Error = styled.div`
  color: red;
  font-family: Friz Quadrata Regular OS;
`;

export { Form, Input, Button, Card, Welcome, Error };
