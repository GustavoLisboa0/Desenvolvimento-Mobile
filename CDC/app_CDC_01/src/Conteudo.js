import React from 'react';
import { ScrollView } from 'react-native';
import estilos from './styleSheet/estilos.js';
import Item from './Item.js';

function Conteudo() {
  let itensRenderizados = [];
  
  let arrayPaises = [
    { nome: "Japão", corFundo: "green", corTexto: "yellow" },
    { nome: "Portugal", corFundo: "blue", corTexto: "black" },
    { nome: "Itália", corFundo: "darkred", corTexto: "yellow" },
    { nome: "Alemanha", corFundo: "gray", corTexto: "green" },
    { nome: "Egito", corFundo: "blue", corTexto: "white" },
    { nome: "Síria", corFundo: "yellow", corTexto: "green" }
  ];

  for (let i = 0; i < arrayPaises.length; i++) {
    itensRenderizados.push(
      <Item 
        key={i}
        texto={arrayPaises[i].nome} 
        corFundo={arrayPaises[i].corFundo} 
        corTexto={arrayPaises[i].corTexto} 
      />
    );
  }

  return (
    // CORRIGIDO AQUI: ScrollView com V maiúsculo!
    <ScrollView id="conteudo" style={estilos.corpo}>
      {itensRenderizados}
    </ScrollView>
  );
}

export default Conteudo;