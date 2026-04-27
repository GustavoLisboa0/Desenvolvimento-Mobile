import React from "react";
import { View, Text, Image } from "react-native";
import { estilos } from "../styleSheet/estilos";

function Cabecalho() {
    return (
        <View style={estilos.cabecalho}>
            <Image
                source={require('../img/color-wheel.png')}
                style={estilos.imagem}
            />
            <Text style={estilos.titulo}>Componente Picker</Text>
        </View>
    );
}

export default Cabecalho;