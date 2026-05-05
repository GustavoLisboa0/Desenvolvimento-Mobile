import { StyleSheet } from 'react-native';
export const estilos = StyleSheet.create({
area_fundo: {
flex: 1,
backgroundColor: '#C18A7D', // Fundo rosado do print
paddingTop: 30,
alignItems: 'center',
},
area_cabecalho: {
alignItems: 'center',
marginVertical: 20,
},

titulo_cabecalho: {
fontSize: 28,
fontWeight: 'bold',
color: '#000',
},
area_conteudo: {
flex: 1,
width: '90%',
padding: 15,
borderWidth: 1,
borderColor: '#999',
borderRadius: 10,
backgroundColor: 'rgba(255, 255, 255, 0.1)',
},
label: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 12,
marginBottom: 5,
color: '#000',
},
input: {
borderWidth: 1,
borderColor: '#999',
borderRadius: 5,
padding: 10,
backgroundColor: '#FFF',
fontSize: 16,
},
pickerContainer: {
borderWidth: 1,
borderColor: '#999',
borderRadius: 5,
backgroundColor: '#FFF',
overflow: 'hidden',
},
switchRow: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
marginTop: 10,
},
slider: {
width: '100%',
height: 40,
},
botao: {
backgroundColor: '#6236BA', // Roxo do botão
padding: 15,
borderRadius: 8,
marginTop: 20,
alignItems: 'center',
},
textoBotao: {
color: '#FFF',
fontWeight: 'bold',
fontSize: 18,
},
area_resultado: {
marginTop: 20,

padding: 15,
backgroundColor: 'rgba(255, 255, 255, 0.2)',
borderRadius: 10,
},
texto_resultado: {
fontSize: 16,
textAlign: 'center',
color: '#000',
lineHeight: 22,
fontWeight: '600',
},
area_rodape: {
height: 50,
width: '100%',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
},
texto_rodape: {
fontSize: 12,
color: '#000',
}
});