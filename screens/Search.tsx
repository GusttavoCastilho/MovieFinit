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
  Image,
} from "react-native";
import { COLORS, FONTS, SIZES, icons, images, theme } from "../constants";

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
      <View style={styles.header}>
        <Image
          source={icons.search}
          style={{ tintColor: "#666565", width: 16, height: 16 }}
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#666565"
        />
      </View>
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
  return (
    <View style={styles.movie}>
      {/* Image */}
      <View style={styles.movieImage}>
        <Image source={images.captain} resizeMode="contain" style={{  marginTop: 20, borderRadius: 4 }}  />
      </View>

      {/* Info's */}
      <View style={{ paddingHorizontal: 20, paddingTop: 8 }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          Captain America
        </Text>
        <Text style={{ color: COLORS.gray, ...FONTS.h4 }}>
          2017 | Fantasy, Action
        </Text>
        {/* Star */}
        <View style={styles.star}>
          <Image
            source={icons.start}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              marginRight: 10
            }}
          />
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>4.5</Text>
        </View>
      </View>

      {/* Close */}
      <View style={styles.close}>
        <Image source={icons.close} style={{ tintColor: theme.COLORS.gray, width: 24, height: 24 }} />
      </View>
    </View>
  );
}

const Search = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        alignItems: "center",
        paddingTop: Platform.OS == "android" ? 40 : 0,
      }}
    >
      {renderHeaderSeaction()}
      {renderMovieSeaction()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "70%",
    height: 45,
    flexDirection: "row",
    backgroundColor: "#1F1F1F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
    paddingLeft: 20,
  },
  input: {
    width: "100%",
    minHeight: 45,
    paddingHorizontal: 15,
    color: "#666565",
  },
  movie: {
    width: "90%",
    height: 60,
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 5,
    position: 'relative'
  },
  movieImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    flexDirection: "row",
    alignItems: 'center'
  },
  close: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 30
  }
});

export default Search;
