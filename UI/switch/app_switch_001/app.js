import React, { useState } from 'react';
import { View, Text, Switch, Image } from 'react-native';
import { estilos } from './src/styleSheet/estilos';

function App() {
  // Caminhos das imagens (certifique-se de ter os arquivos na pasta src/img)
  let imgSol = require("./src/img/sol.png");
  let imgLua = require("./src/img/lua.jpeg");

  // Estado para controlar o tema
  const [modoAtivo, setModoAtivo] = useState(true);

  return (
    <View style={modoAtivo ? estilos.area_fundo1 : estilos.area_fundo2}>
      
      {/* Container do Switch e do texto indicativo */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={[{ marginRight: 10 }, modoAtivo ? estilos.textoEstilo1 : estilos.textoEstilo2]}>
          {modoAtivo ? 'Modo Noturno' : 'Modo Claro'}
        </Text>

        <Switch
          value={modoAtivo}
          onValueChange={(valor) => setModoAtivo(valor)}
          trackColor={{ true: "#ccc", false: "#8b2b30" }}
          thumbColor={modoAtivo ? "#eee" : "#f4f3f4"}
        />
      </View>

      <Text style={modoAtivo ? estilos.textoEstilo1 : estilos.textoEstilo2}>
        Componente Switch
      </Text>
      
      {/* Imagem que muda conforme o estado */}
      <Image 
        source={modoAtivo ? imgLua : imgSol}
        style={modoAtivo ? estilos.imgEstilo1 : estilos.imgEstilo2} 
      />

    </View>
  );
}

export default App;