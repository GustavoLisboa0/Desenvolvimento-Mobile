import React from "react";
import { View, Text } from 'react-native';
import { estilos } from "../styleSheet/estilos";
export default function Cabecalho() {
return (
<View style={estilos.area_cabecalho}>
<Text style={estilos.titulo_cabecalho}>Perfil Dev</Text>
</View>
);
}