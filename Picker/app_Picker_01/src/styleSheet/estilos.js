import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    
    cabecalho: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e759b',
        marginTop: 30
    },

    titulo: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 10
    },

    imagem: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },

    conteudo: {
        flex: 4,
        alignItems: 'center',
        backgroundColor: '#7ec8e3',
        padding: 20
    },

    tituloConteudo: {
        fontSize: 20,
        marginBottom: 20,
        marginTop:10,
        textAlign: 'center'
    },

    inputNome: {
        width: '90%',
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#0e759b',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginLeft: 20,
        alignContent: 'center'
    },

    textoConteudo: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },

    picker: {
        width: '90%',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderColor: '#0e759b',
        borderWidth: 2,
        paddingHorizontal: 8,
        marginBottom: 20,
        marginLeft: 20
    },

    botao: {
        width: '90%',
        backgroundColor: '#0e759b',
        padding: 10,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 20
    },

    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textoResultado: {
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },

    rodape: {
        flex: 2,
        backgroundColor: '#7ec8e3'
    }
});