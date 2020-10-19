import styled from 'styled-components';
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
