import React from 'react';
import { ScrollView } from 'react-native';
import estilos from './styleSheet/estilos.js';
import Item from './Item.js';

function Conteudo() {
  let noticias = [
    { titulo: "Notícia 1", manchete: "Manchete 1", data: "01/01/2026", imagem: require('../img/noticia1.png') },
    { titulo: "Notícia 2", manchete: "Manchete 2", data: "02/01/2026", imagem: require('../img/noticia2.png') },
    { titulo: "Notícia 3", manchete: "Manchete 3", data: "03/01/2026", imagem: require('../img/noticia3.png') },
    { titulo: "Notícia 4", manchete: "Manchete 4", data: "04/01/2026", imagem: require('../img/noticia4.png') },
    { titulo: "Notícia 5", manchete: "Manchete 5", data: "05/01/2026", imagem: require('../img/noticia5.png') }
  ];

  return (
    <ScrollView id="conteudo" style={estilos.corpo}>
      {noticias.map((noticia, index) => (
        <Item 
          key={index}
          titulo={noticia.titulo}
          manchete={noticia.manchete}
          data={noticia.data}
          imagem={noticia.imagem}
        />
      ))}
    </ScrollView>
  );
}

export default Conteudo;