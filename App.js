import React from "react";
import { View } from "react-native";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Tela3 />
    </View>
  );
}
