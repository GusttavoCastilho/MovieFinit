import React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { COLORS, SIZES, icons, images } from "../constants";

import { useNavigation } from "@react-navigation/native";
import NewSeason from "../components/NewSeason";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerContainer} onPress={() => {}}>
          <Image source={images.profile_photo} style={styles.ProfilePhoto} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ScreenMirror} onPress={() => {}}>
          <Image source={icons.airplay} style={styles.AirPlayImg} />
        </TouchableOpacity>
      </View>
      <NewSeason />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS == "android" ? 50 : 0,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
  buttonProfile: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  ProfilePhoto: {
    // width: 40,
    // height: 40,
    borderRadius: 20,
  },
  ScreenMirror: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  AirPlayImg: {
      width: 25,
      height: 25,
      tintColor: COLORS.primary
  }
});
