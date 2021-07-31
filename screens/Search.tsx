import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

function renderHeaderSeaction() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#666565"
      />
      <TouchableOpacity
        onPress={() => {}}
        style={{
          height: 45,
          marginLeft: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#666565", ...FONTS.h3 }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

function renderMovieSeaction() {
  return <View></View>;
}

const Search = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        paddingTop: Platform.OS == "android" ? 40 : 0,
      }}
    >
      {renderHeaderSeaction()}
      {renderMovieSeaction()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "60%",
    height: 45,
    borderRadius: SIZES.radius,
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 20,
    color: "#666565",
  },
});

export default Search;
