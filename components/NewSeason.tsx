import React from "react";
import {
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const NewSeason = () => {
  const navigation = useNavigation();
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
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
          [{ nativeElement: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View style={styles.container}>
                <ImageBackground
                  source={item.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
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
                          ...FONTS.h3,
                        }}
                      >
                        Play Now
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </ScrollView>
  );
};

export default NewSeason;

const styles = StyleSheet.create({
  container: {
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
