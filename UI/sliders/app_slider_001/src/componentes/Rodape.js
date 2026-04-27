import React from "react";
import { View, Text } from 'react-native';
import { estilos } from "../styleSheet/estilos";

function Rodape() {
  let autor = "Luiz Corcini";
  let data = "27/04/2026"; // Data atualizada conforme o sistema

  return (
    <View style={estilos.area_rodape}>
      <Text style={estilos.texto_rodape}>{autor}</Text>
      <Text style={estilos.texto_rodape}>{data}</Text>
    </View>
  );
}

export default Rodape;