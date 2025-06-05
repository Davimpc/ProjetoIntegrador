import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function TelaEmergenciaVisual() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Parte superior com fundo cinza e ícone */}
        <View style={styles.topSection}>
          <View style={styles.iconCircle}>
            <Image
              source={require("../assets/sirene.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Parte inferior com botões */}
        <View style={styles.bottomSection}>
          <Text style={styles.instruction}>
            Uma ligação será iniciada ao selecionar o contato
          </Text>

          {["Polícia", "Corpo de Bombeiros", "Pai", "Mãe"].map(
            (label, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <FontAwesome
                  name="user"
                  size={20}
                  color="white"
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{label}</Text>
              </TouchableOpacity>
            )
          )}

          <TouchableOpacity style={styles.closeButton}>
            <FontAwesome name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  topSection: {
    height: "40%",
    backgroundColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    backgroundColor: "#fff",
    borderRadius: 75,
    padding: 20,
    borderWidth: 4,
    borderColor: "#f00",
  },
  icon: {
    width: 80,
    height: 80,
    tintColor: "#f00",
  },
  bottomSection: {
    backgroundColor: "#000",
    padding: 20,
    alignItems: "center",
  },
  instruction: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#f00",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25,
    padding: 10,
  },
});
