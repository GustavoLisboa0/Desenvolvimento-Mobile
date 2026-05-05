import React from "react";
import { View, Text } from 'react-native';
import { estilos } from "../styleSheet/estilos";
export default function Rodape() {
return (
<View style={estilos.area_rodape}>
<Text style={estilos.texto_rodape}>Bruno Carraro Antonoviez</Text>
<Text style={estilos.texto_rodape}>27/04/2026</Text>
</View>
);
}