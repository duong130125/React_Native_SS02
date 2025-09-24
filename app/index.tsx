import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BT01 from "../components/BT01";
import BT02 from "../components/BT02";
import BT03 from "../components/BT03";
import BT04 from "../components/BT04";
import BT05 from "../components/BT05";
import BT06 from "../components/BT06";
import BT07 from "../components/BT07";
import BT08 from "../components/BT08";
import BT09 from "../components/BT09";
import BT10 from "../components/BT10";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <BT01 />
        </View>
        <View style={styles.section}>
          <BT02 />
        </View>
        <View style={styles.section}>
          <BT03 />
        </View>
        <View style={styles.section}>
          <BT04 />
        </View>
        <View style={styles.section}>
          <BT05 />
        </View>
        <View style={styles.section}>
          <BT06 />
        </View>
        <View style={styles.section}>
          <BT07 />
        </View>
        <View style={styles.section}>
          <BT08 />
        </View>
        <View style={styles.section}>
          <BT09 />
        </View>
        <View style={styles.section}>
          <BT10 />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  scrollContent: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    elevation: 3,
  },
});
