import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width } = Dimensions.get("window");

const Slide = ({ label, right }: SlideProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "red",
    height: 100,
    justifyContent: "center",
  },
});

export default Slide;
