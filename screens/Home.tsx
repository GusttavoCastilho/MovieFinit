import React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
  LogBox,
} from "react-native";

import { COLORS, SIZES, icons, images, FONTS, dummyData } from "../constants";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";
import { Profiles, ProgressBar } from "../components";

LogBox.ignoreAllLogs();
const Home = () => {
  const navigation = useNavigation();
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  const [loaded] = useFonts({
    RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  function renderNewSeasonSection() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={dummyData.newSeason}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View style={styles.containerSeason}>
                <ImageBackground
                  source={item.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    paddingHorizontal: 20,
                    justifyContent: "flex-end",
                  }}
                  imageStyle={{
                    borderRadius: 40,
                  }}
                >
                  <View style={styles.BoxCard}>
                    <View style={styles.BoxPlayNow}>
                      <View style={styles.PlayNow}>
                        <Image
                          source={icons.play}
                          resizeMode="contain"
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.white,
                          }}
                        />
                      </View>

                      <Text
                        style={{
                          color: COLORS.white,
                          marginLeft: SIZES.base,
                          fontFamily: "RobotoRegular",
                          ...FONTS.h3,
                        }}
                      >
                        Play Now
                      </Text>
                    </View>

                    {item.stillWatching.length > 0 && (
                      <View style={{ justifyContent: "center" }}>
                        <Text
                          style={{
                            color: COLORS.white,
                            fontFamily: "RobotoRegular",
                            ...FONTS.h4,
                          }}
                        >
                          Still Watching
                        </Text>
                        <Profiles profiles={item.stillWatching} />
                      </View>
                    )}
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);

    return (
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {dummyData.newSeason.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: "clamp",
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 3,
                width: dotWidth,
                height: 6,
                opacity: opacity,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  }

  function renderContinueWatchingSection() {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              color: COLORS.white,
              fontFamily: "RobotoBold",
              ...FONTS.h2,
            }}
          >
            Continue Watching
          </Text>
          <Image
            source={icons.right_arrow}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.primary,
            }}
          />
        </View>

        {/* List */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: SIZES.padding }}
          data={dummyData.continueWatching}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("MovieDetail", { selectedMovie: item });
                }}
              >
                <View
                  style={{
                    marginLeft: index == 0 ? SIZES.padding : 20,
                    marginRight:
                      index == dummyData.continueWatching.length - 1
                        ? SIZES.padding
                        : 0,
                  }}
                >
                  {/* Thumbnail */}
                  <Image
                    source={item.thumbnail}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 3,
                      height: SIZES.width / 3 + 60,
                      borderRadius: 20,
                    }}
                  />

                  {/* Name */}
                  <Text
                    style={{
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      fontFamily: 'RobotoBold', 
                      ...FONTS.h4,
                    }}
                  >
                    {item.name}
                  </Text>

                  {/* Progress Bar */}
                  <ProgressBar
                    containerStyle={{
                      marginTop: SIZES.radius,
                    }}
                    barStyle={{
                      height: 3,
                    }}
                    barPercentage={item.overallProgress}
                  />
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }

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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {renderNewSeasonSection()}
        {renderDots()}
        {renderContinueWatchingSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS == "android" ? 30 : 0,
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
    tintColor: COLORS.primary,
  },
  containerSeason: {
    width: SIZES.width,
    alignItems: "center",
    justifyContent: "center",
  },
  BoxCard: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    marginBottom: SIZES.radius,
  },
  BoxPlayNow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  PlayNow: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.transparentWhite,
  },
});
