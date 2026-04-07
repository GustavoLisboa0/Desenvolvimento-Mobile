/*
TEXT INPUT - DESAFIO 2
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';


// Função principal - Campos Editáveis
const CxTx = (props) => {
  return (
    <TextInput
      style={[estilos.input, props.multiline ? estilos.inputMultiline : null]}
      placeholder={props.placeholder}
      autoCapitalize={props.autoCapitalize || 'none'}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType || 'default'}
      editable={props.editable !== false} 
      value={props.value}
      multiline={props.multiline || false}
      secureTextEntry={props.secureTextEntry || false}
    />
  );
};

// Função principal - Text Input 02
export default function App() {

  const dadosFormulario = [
    { 
      id: '1', 
      placeholder: 'Digite seu nome',
      autoCapitalize: 'characters',
      maxLength: 30
    },
    { 
      id: '2', 
      placeholder: 'qual a sua idade?', 
      keyboardType: 'numeric',
      maxLength: 2
    },
    { 
      id: '3', 
      placeholder: 'CPF', 
      value: 'CPF:999.999.999-00',
      editable: false
    },
    { 
      id: '4', 
      placeholder: 'Digite seu e-mail', 
      keyboardType: 'email-address'
    },
    { 
      id: '5', 
      placeholder: 'Digite seu número celular:', 
      keyboardType: 'phone-pad'    
    },
    { 
      id: '6', 
      placeholder: 'Observações:', 
      multiline: true,           
      maxLength: 200            
    },
    { 
      id: '7', 
      placeholder: 'Digite sua senha', 
      secureTextEntry: true,    
      maxLength: 5              
    },
  ];

  return (
    <View style={estilos.safeArea}>
      <ScrollView style={estilos.container}>
        
        {/* Cabeçalho */}
        <View style={estilos.header}>
          <Text style={estilos.tituloText}>Aula 06 - Desafio 02</Text>
          <Text style={estilos.subtituloText}>Componente InputText</Text>
        </View>

        <Text style={estilos.labelInstrucao}>Verifique o Formulário abaixo:</Text>

        {/* Loops */}
        <View style={estilos.formContainer}>
          {dadosFormulario.map((item) => (
            <CxTx 
              key={item.id}
              placeholder={item.placeholder}
              autoCapitalize={item.autoCapitalize}
              maxLength={item.maxLength}
              keyboardType={item.keyboardType}
              editable={item.editable}
              value={item.value}
              multiline={item.multiline}
              secureTextEntry={item.secureTextEntry}
            />
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

{/* Estilos */ }
const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  header: {
    backgroundColor: '#DCDCDC',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  tituloText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtituloText: {
    color: '#000000',
    fontSize: 22,
  },
  labelInstrucao: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  formContainer: {
    paddingBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    color: '#333',
  },
  inputMultiline: {
    height: 120,         
    textAlignVertical: 'top', 
  }
});