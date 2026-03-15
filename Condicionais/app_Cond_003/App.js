/*
CONDICIONAIS - DESAFIO 3
Bruno Carraro e Gustavo Lisboa
*/

// Importando componentes react-native
import React from 'react';
import { View, Text, Image } from 'react-native';

  // Função principal - Manipulação de condicionais
function App() {

  // Altere entre: "Tela1" e "Tela2"
  const opcao = "Tela1";

  return (
    <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
      
      {opcao === "Tela1" ? (
        
        // TELA 1
        <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 50 }}>
          
          {/* CABEÇALHO */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>

            <View style={{ flexDirection: 'row', backgroundColor: '#EEF0F7', borderRadius: 20, width: '85%', height: 40, alignItems: 'center', paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 16 }}>🔍</Text>
              <Text style={{ color: '#888', marginLeft: 5 }}>Busca</Text>
            </View>

            <Text style={{ fontSize: 16 }}>🔔</Text>
          </View>

          {/* CATEGORIAS */}
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6ab8b2', borderRadius: 20, height: 40, width: 110, marginRight: 10 }}>
              <Text style={{ fontSize: 16, color: 'white' }}>🟰</Text>
              <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5 }}>Resultados</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEF0F7', borderRadius: 20, height: 40, width: 45, marginRight: 10 }}>
              <Text style={{ color: '#555', fontWeight: 'bold', fontSize: 16 }}>🛒</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEF0F7', borderRadius: 20, height: 40, width: 45, marginRight: 10 }}>
              <Text style={{ fontSize: 16 }}>💾</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEF0F7', borderRadius: 20, height: 40, width: 45, marginRight: 10 }}>
              <Text style={{ fontSize: 16 }}>💻</Text>
            </View>
          </View>

          {/* RESULTADOS */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Text style={{ color: '#555', fontWeight: 'bold', fontSize: 12 }}>2 Resultados</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#555', marginRight: 3, fontSize: 12 }}>Novidades</Text>
              <Text style={{ color: '#555', marginRight: 3, fontSize: 12 }}>▼</Text>
            </View>
          </View>

          {/* CARDS */}
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#eee' }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }} style={{ width: 50, height: 50, marginRight: 15 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', color: '#555', fontSize: 12, marginBottom: 2 }}>Bruno Carraro Antonoviez</Text>
              <Text style={{ color: '#aaa', fontSize: 10, marginBottom: 8 }}>Diretor da CarraLis</Text>
              <View style={{ height: 6, backgroundColor: '#EEF0F7', borderRadius: 4, overflow: 'hidden' }}>
                {/* Barra 1 */}
                <View style={{ height: '100%', backgroundColor: '#2CC966', borderRadius: 4, width: '80%' }} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: '#eee' }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png' }} style={{ width: 50, height: 50, marginRight: 15 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', color: '#555', fontSize: 12, marginBottom: 2 }}>Gustavo Lisboa Cansian Pinto</Text>
              <Text style={{ color: '#aaa', fontSize: 10, marginBottom: 8 }}>Diretor da CarraLis</Text>
              <View style={{ height: 6, backgroundColor: '#EEF0F7', borderRadius: 4, overflow: 'hidden' }}>
                {/* Barra 2 */}
                <View style={{ height: '100%', backgroundColor: '#2CC966', borderRadius: 4, width: '60%' }} />
              </View>
            </View>
          </View>

          {/* CARD AZUL */}
          <View style={{ height: 160, backgroundColor: '#437572', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
             <Text style={{ fontSize: 80, color: 'white' }}>🖥️</Text>
          </View>

          {/* RODAPÉ */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
            <View style={{ width: '48%' }}>
              <Text style={{ fontWeight: 'bold', color: '#7E8BBA', fontSize: 13, marginBottom: 2 }}>Serviços de Software</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>- Instalação de sistemas</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>- Reparo de software lento </Text>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={{ fontWeight: 'bold', color: '#7E8BBA', fontSize: 13, marginBottom: 2 }}>Serviços de Hardware</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>- Instalação de hardware</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>- Manutenção de equipamentos</Text>
            </View>
          </View>
          
        </View>

      ) : (
        
        // TELA 2
        <View style={{ flex: 1, backgroundColor: '#6ab8b2' }}>
          
          <View style={{ paddingTop: 50, paddingHorizontal: 20, alignItems: 'center', paddingBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 10 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{'<'}</Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>🔍</Text>
            </View>
            <Image 
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' }} 
              style={{ width: 120, height: 120 }} 
            />
          </View>

          <View style={{ flex: 1, backgroundColor: '#cccccc', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 20, paddingTop: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#555e7f', marginBottom: 10 }}>Bruno Carraro Antonoviez</Text>
            <Text style={{ fontSize: 12, color: '#616161', textAlign: 'center', marginBottom: 30, paddingHorizontal: 10, lineHeight: 18 }}>
              Faça sua doação para apoiar o desenvolvimento da CarraLis.
            </Text>

            <View style={{ backgroundColor: '#F4F6F9', borderRadius: 20, paddingVertical: 15, paddingHorizontal: 40, alignItems: 'center', marginBottom: 30, width: '80%' }}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#00D26A', marginBottom: 5 }}>R$ 100.00</Text>
              <View style={{ width: '100%', height: 1, backgroundColor: '#A0B0D0' }} />
            </View>

            {/* CAMPO DE TEXTO */}
            <View style={{ width: '100%', height: 80, borderWidth: 1, borderColor: '#D0D0D0', borderRadius: 10, padding: 15, marginBottom: 30 }}>
              <Text style={{ color: '#616161', fontSize: 12 }}>Deixe sua mensagem:</Text>
            </View>

            {/* BOTÃO */}
            <View style={{ backgroundColor: '#00D26A', width: '80%', paddingVertical: 15, borderRadius: 25, alignItems: 'center' }}>
              <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold' }}>DOAÇÃO</Text>
            </View>
          </View>

        </View>
      )}

    </View>
  );
}

export default App;