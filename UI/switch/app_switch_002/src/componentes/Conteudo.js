import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { estilos } from '../styleSheet/estilos';

export default function Conteudo() {
  // Estados para capturar as entradas do usuário
  const [nome, setNome] = useState("");
  const [linguagem, setLinguagem] = useState("Java");
  const [ativo, setAtivo] = useState(false);
  const [nivel, setNivel] = useState(5);
  const [exibir, setExibir] = useState(false);

  // Função para validar e exibir o resultado
  function confirmar() {
    if (nome.trim() === "") {
      Alert.alert("Erro", "Por favor, digite seu nome!");
      setExibir(false);
      return;
    }
    setExibir(true);
  }

  // Lógica para definir a classificação do nível conforme o desafio
  function obterDescricaoNivel(valor) {
    if (valor <= 3) return "iniciante";
    if (valor <= 7) return "intermediário";
    return "avançado";
  }

  return (
    <View style={estilos.area_conteudo}>
      
      {/* Entrada de Texto - Nome */}
      <Text style={estilos.label}>Nome:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(texto) => {
            setNome(texto);
            setExibir(false); // Esconde o resultado se o nome mudar
        }}
      />

      {/* Seletor de Linguagem */}
      <Text style={estilos.label}>Linguagem favorita:</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={linguagem}
          onValueChange={(item) => setLinguagem(item)}
        >
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="PHP" value="PHP" />
        </Picker>
      </View>

      {/* Interruptor de Desenvolvedor Ativo */}
      <View style={estilos.switchRow}>
        <Text style={estilos.label}>Desenvolvedor ativo?</Text>
        <Switch
          value={ativo}
          onValueChange={(v) => setAtivo(v)}
          trackColor={{ false: "#767577", true: "#00A896" }}
          thumbColor={ativo ? "#FFF" : "#f4f3f4"}
        />
      </View>

      {/* Slider de Nível de Conhecimento */}
      <Text style={estilos.label}>Nível de conhecimento: {nivel.toFixed(1)}</Text>
      <Slider
        style={estilos.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={nivel}
        onValueChange={(v) => setNivel(v)}
        minimumTrackTintColor="#00A896"
        maximumTrackTintColor="#000"
      />

      {/* Botão de Confirmação */}
      <TouchableOpacity style={estilos.botao} onPress={confirmar}>
        <Text style={estilos.textoBotao}>Confirmar Dados</Text>
      </TouchableOpacity>

      {/* Área de Resultado Condicional */}
      {exibir && (
        <View style={estilos.area_resultado}>
          <Text style={estilos.texto_resultado}>
            Olá {nome}, você gosta de {linguagem}, {ativo ? "já atua como desenvolvedor" : "está a estudar programação"} e seu nível é {obterDescricaoNivel(nivel)} ({nivel.toFixed(0)}).
          </Text>
        </View>
      )}
    </View>
  );
}