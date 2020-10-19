import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonsProps {
  confirmation?: boolean;
}

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 326px;
  margin: 5px;
`

export const CardHeader = styled.header`
  height: 64px;
  background: #425065;
  border-radius: 8px 8px 0 0 ;
  color: #FCFCFC;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.ul`
  height: 600px;
  overflow-y: scroll;
  background-color: #EEEEEE;

  border-radius: 0 0 8px 8px ;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Card = styled.li`
  min-height: 64px;
  width: 300px;
  border-radius: 8px;
  background-color: #FCFCFC;
  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 4px 0 4px 14px;
  }
`

export const AddCard = styled.label`
  min-height: 64px;
  width: 300px;
  border-radius: 8px;
  background-color: #425065;
  color: #FCFCFC;
  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.4s;

  &:hover {
    background-color: #8FAAD2;
  }
`
export const ButtonsContainer = styled.div`
  max-width: 40px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  button {
    height: 100%;
    justify-content: center;
    align-items: center;
    border: none;
    background: #ED5353;
    color: #EDD6D6;
    border-radius: 0 0 8px 0;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#ED5353')};
    }

    &:first-child {
      background: ${({ confirmation }: ButtonsProps): string => (confirmation ? '#80FF61' : '#37B6FF')};
      color: ${({ confirmation }: ButtonsProps): string => (confirmation ? '#425065' : '#EBF8FF')};
      border-radius: 0 8px 0 0;

      &:hover {
        background-color: ${({ confirmation }: ButtonsProps): string => (confirmation ? shade(0.2, '#80FF61') : shade(0.2, '#37B6FF'))};
      }
    }
  }
`

export const CardForm = styled.form`
  min-height: 64px;
  width: 300px;
  border-radius: 8px;
  background-color: #425065;
  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    position: relative;
    margin: 14px;
    border: none;
    width: 100%;
  }

`


