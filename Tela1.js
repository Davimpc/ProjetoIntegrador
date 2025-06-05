import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

export default () => {
  const [textInput1, onChangeTextInput1] = useState("");
  const [textInput2, onChangeTextInput2] = useState("");
  const [textInput3, onChangeTextInput3] = useState("");
  const [textInput4, onChangeTextInput4] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Configurações do botão de emergência</Text>

        <Text style={styles.sectionTitle}>Gerenciar botão</Text>

        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Text style={styles.switchText}>
              Botão de emergência diretamente no mapa
            </Text>
            <View style={styles.switch}>
              <View style={styles.switchCircle} />
            </View>
          </View>

          <Text style={styles.switchDescription}>
            O botão de emergência fica a todo tempo disponível no canto inferior
            direito do mapa
          </Text>

          <Text style={styles.switchText}>Botão de emergência noturno</Text>
          <Text style={styles.switchDescription}>
            O botão de emergência é automaticamente habilitado no mapa a partir
            de 18:00
          </Text>

          <View style={styles.separator} />
        </View>

        <Text style={styles.sectionTitle}>
          Adicionar contatos de emergência
        </Text>

        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Polícia"
            value={textInput1}
            onChangeText={onChangeTextInput1}
            style={styles.input}
          />
          <TextInput
            placeholder="Corpo de Bombeiros"
            value={textInput2}
            onChangeText={onChangeTextInput2}
            style={styles.input}
          />
          <TextInput
            placeholder="Pai"
            value={textInput3}
            onChangeText={onChangeTextInput3}
            style={styles.input}
          />
          <TextInput
            placeholder="Adicionar"
            value={textInput4}
            onChangeText={onChangeTextInput4}
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 22,
    color: "#000",
    marginBottom: 20,
  },
  switchContainer: {
    marginBottom: 40,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  switchText: {
    fontSize: 18,
    color: "#000",
    flex: 1,
  },
  switch: {
    backgroundColor: "#65558F",
    borderRadius: 100,
    paddingVertical: 8,
    paddingLeft: 36,
    paddingRight: 4,
  },
  switchCircle: {
    width: 24,
    height: 24,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
  },
  switchDescription: {
    fontSize: 16,
    color: "#000",
    marginTop: 4,
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#D9D9D9",
    marginVertical: 20,
  },
  inputsContainer: {
    gap: 10,
  },
  input: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    fontSize: 18,
    color: "#000",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
