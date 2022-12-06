import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
} from "react-native";

export default function CardCity(props) {
  /* let {city}=props

  const image = {city.image} */

  return (
    <View style={styles.cardCity}>
      <View className="imgCard">
        <Image
          style={styles.image}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <Text  style={styles.h3}>Meet our most popular locations</Text>
      <View style={styles.btnDetails}>
        <Button color="#ff3648" title="More details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCity: {
    height: "auto",
    backgroundColor: "red",
    marginTop: 35,
    width: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    width: 430,
    height: 320,
    borderRadius: 15,
  },
  h3: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
  },
  btnDetails: {
    fontWeight: 800,
    fontSize: 90,
    width: 350,
    marginBottom: 20,
    backgroundColor: "#ff3648",
  },
});
