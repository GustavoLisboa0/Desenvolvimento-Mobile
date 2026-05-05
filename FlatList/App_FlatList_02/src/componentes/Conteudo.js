import React from "react";
import { View, Text, FlatList } from 'react-native';
import { estilos } from "../styleSheet/estilos";
import paises from '../dados/paises.json';

function Conteudo(){
    function recuperaId(item){
        return item.id;
    }

    function mostrarItem({ item }) {
        return (
            <View style={estilos.card}>
                <Text style={estilos.pais}>{item.pais}</Text>
                <Text style={estilos.capital}>Capital: {item.capital}</Text>
            </View>
        );
    }

    function mostrarSeparador(){
        return <View style={estilos.separador} />;
    }

    function mostrarCabecalho(){
        return <Text style={estilos.cabecalhoLista}>Países</Text>;
    }

    function mostrarRodape(){
        return (
            <Text style={estilos.rodapeLista}>
                Total: {paises.length}
            </Text>
        );
    }

    return(
        <FlatList 
            style={{flex: 0.8, width: '100%'}}
            data={paises}
            keyExtractor={recuperaId}
            renderItem={mostrarItem}
            ItemSeparatorComponent={mostrarSeparador}
            ListHeaderComponent={mostrarCabecalho}
            ListFooterComponent={mostrarRodape}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Conteudo;