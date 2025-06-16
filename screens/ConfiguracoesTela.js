import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Switch,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";

export default function ConfiguracoesBotaoEmergencia() {
  const [contatos, setContatos] = useState([
    { id: "1", nome: "Polícia", icone: "user" },
    { id: "2", nome: "Corpo de Bombeiros", icone: "fire-extinguisher" },
    { id: "3", nome: "Pai", icone: "male" },
  ]);
  
  const [botaoMapaAtivado, setBotaoMapaAtivado] = useState(false);
  const [emergenciaAtivada, setEmergenciaAtivada] = useState(false);

  async function adicionarContatos() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão negada", "Permissão para acessar contatos foi negada.");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    if (data.length > 0) {
      const novoContato = data[0];
      setContatos((old) => [
        ...old,
        { id: novoContato.id, nome: novoContato.name, icone: "user" },
      ]);
      Alert.alert("Contato adicionado", `${novoContato.name} foi adicionado.`);
    } else {
      Alert.alert("Nenhum contato", "Nenhum contato encontrado.");
    }
  }

  function toggleBotaoMapa(value) {
    setBotaoMapaAtivado(value);
  }

  function toggleEmergencia(value) {
    setEmergenciaAtivada(value);
  }

  function renderContato({ item }) {
    return (
      <View style={styles.contatoItem}>
        <FontAwesome name={item.icone} size={20} color="#666" style={{ marginRight: 12 }} />
        <Text style={styles.contatoNome}>{item.nome}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Botão de emergência diretamente no mapa</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#f00" }}
            thumbColor={botaoMapaAtivado ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleBotaoMapa}
            value={botaoMapaAtivado}
          />
        </View>
        <Text style={styles.subtexto}>
          O botão de emergência fica ativo o tempo todo exibindo no canto inferior direito do mapa
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Botão de emergência noturno</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "#f00" }}
            thumbColor={emergenciaAtivada ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleEmergencia}
            value={emergenciaAtivada}
          />
        </View>
        <Text style={styles.subtexto}>
          O botão de emergência é automaticamente habilitado no mapa a partir das 18:00
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Adicionar contatos de emergência</Text>

        <FlatList
          data={contatos}
          keyExtractor={(item) => item.id}
          renderItem={renderContato}
          style={{ marginVertical: 10 }}
        />

        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarContatos}>
          <FontAwesome name="plus" size={18} color="#666" />
          <Text style={styles.textoAdicionar}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: "#fff" },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flexShrink: 1,
    marginRight: 10,
  },
  subtexto: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    width: "100%",
  },
  switch: {
   
  },
  contatoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  contatoNome: {
    fontSize: 16,
    color: "#333",
  },
  botaoAdicionar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  textoAdicionar: {
    marginLeft: 8,
    color: "#666",
    fontSize: 16,
  },
});
