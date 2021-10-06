import styled from 'styled-components';

type ContainerProps = {
done: boolean;
}

export const Container = styled.div(({done}:ContainerProps)=>(
  `
  display: flex; /*Para que um item fique do lado do outro*/
  background-color: #20212C; /*Cor de fundo*/
  padding: 10px; /*Distancia entre os lados*/
  border-radius: 10px; /*Arredondamento dos cantos */
  margin-bottom: 10px; /*Margim inferior */
  align-items: center; /*Para que o checkbox fica alinhado com o texto */
  
  input {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  }
  
  label {
  color:#CCC;
  text-decoration: ${done ? 'line-through' : 'initial'};
  }
`   
));
