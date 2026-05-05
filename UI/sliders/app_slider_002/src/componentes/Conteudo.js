import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { estilos } from "../styleSheet/estilos";
import Slider from "@react-native-community/slider";
import { Picker } from '@react-native-picker/picker';

export default function Conteudo() {
  const [nome, setNome] = useState("");
  const [filme, setFilme] = useState("Matrix");
  const [nota, setNota] = useState(8.0);
  const [comentario, setComentario] = useState("");
  const [resultado, setResultado] = useState(null);

  const enviarAvaliacao = () => {
    setResultado({
      nome: nome,
      filme: filme,
      nota: nota.toFixed(1),
      comentario: comentario
    });
  };

  return (
    <View style={estilos.area_conteudo}>
      
      <TextInput
        style={estilos.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(t) => setNome(t)}
      />

      <Text style={estilos.label}>Escolha o filme:</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={filme}
          onValueChange={(itemValue) => setFilme(itemValue)}
        >
          <Picker.Item label="Matrix" value="Matrix" />
          <Picker.Item label="Vingadores" value="Vingadores" />
          <Picker.Item label="Batman" value="Batman" />
        </Picker>
      </View>
    
      <Image 
        source={require('../img/estrela.png')} // Certifique-se de ter essa imagem
        style={estilos.img_estrela} 
      />

      <Text style={estilos.label}>Nota: {nota.toFixed(1)}</Text>
      <Slider
        style={estilos.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={nota}
        minimumTrackTintColor="#008080"
        maximumTrackTintColor="#000000"
        onValueChange={(v) => setNota(v)}
      />

      <TextInput
        style={estilos.inputComentario}
        placeholder="Escreva seu comentário..."
        multiline={true}
        value={comentario}
        onChangeText={(t) => setComentario(t)}
      />

      <TouchableOpacity style={estilos.botaoAvaliar} onPress={enviarAvaliacao}>
        <Text style={estilos.textoBotao}>Avaliar</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={estilos.area_resultado}>
          <Text style={estilos.texto_resultado}>Nome: {resultado.nome}</Text>
          <Text style={estilos.texto_resultado}>Filme: {resultado.filme}</Text>
          <Text style={estilos.texto_resultado}>Nota: {resultado.nota}</Text>
          <Text style={estilos.texto_resultado}>Comentário: {resultado.comentario}</Text>
        </View>
      )}
    </View>
  );
}