import styled from 'styled-components';

// Area toda do navegador
export const Container = styled.div`
background-color: #17181F;
color: #797A81;
min-height: 100vh;
`;

// Fazer o conteudo ficar centralizado no meio da tela
export const Area = styled.div`
margin: auto; {/*Ficar no meio da tela*/}
max-width: 980px; {/*Maxima largura*/} 
padding: 10px; {/*Quando tiver o mobile não ficar encostado nas laterais do celular*/}
`;

// Nome do nosso sistema
export const Header = styled.h1`
margin: 0; {/*Zerando as propriedades padrão*/}
padding: 0; {/*Zerando as propriedades padrão*/}
color: #FFF;
text-align: center;
border-bottom: 1px solid #444;
padding-bottom: 20px;  {/*Descolar o texto da borda*/}
`;




