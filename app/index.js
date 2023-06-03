import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ImageForecast,
  ImageStatsWind,
  NewTouchableOpacityLoc,
  SafeAreaViewStyled,
  TextCities,
  TextCountry,
  TextDegree,
  TextForecast,
  TextInputStyled,
  TextWeather,
  TextWind,
  TouchableOpacityLocStyled,
  TouchableOpacityStyled,
  ViewDegreeContainer,
  ViewForecast,
  ViewForecastImage,
  ViewInStyled,
  ViewLocation,
  ViewStatsContainer,
  ViewStatsContent,
  ViewStyled,
} from "../theme";

// TODO

//+ CONTINUING LOCATIONS TEMPERATURES ICONS STYLING

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("Location is : ", loc);
  };

  return (
    <>
      <Image
        source={require("../assets/images/cloud-bg.png")}
        style={styles.imageBg}
        resizeMode="cover"
        blurRadius={19}
      />
      <SafeAreaViewStyled>
        <ViewStyled>
          <ViewInStyled
            style={{ backgroundColor: showSearch ? "#FFF" : "transparent" }}
          >
            {showSearch ? (
              <TextInputStyled
                placeholder="Search City"
                placeholderTextColor={"black"}
              ></TextInputStyled>
            ) : null}

            <TouchableOpacityStyled onPress={() => setShowSearch(!showSearch)}>
              <Ionicons name="search-outline" size={25} color="black" />
            </TouchableOpacityStyled>
          </ViewInStyled>

          {locations.length > 0 && showSearch ? (
            <ViewLocation>
              {locations.map((loc, index) => {
                let showBorder = index + 3 != locations.length;
                let borderClass = showBorder ? NewTouchableOpacityLoc : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 4,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 5,
                      marginBottom: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#aaaeb4" + borderClass,
                    }}
                  >
                    <Ionicons
                      name="location-outline"
                      size={25}
                      style={{ paddingRight: 5 }}
                      color={"gray"}
                    />
                    <TextCities>Bogota Colombia</TextCities>
                  </TouchableOpacity>
                );
              })}
            </ViewLocation>
          ) : null}
        </ViewStyled>
        {/* FORECAST SECTION */}
        <ViewForecast>
          <TextForecast>
            Bogota,
            <TextCountry>Colombia</TextCountry>
          </TextForecast>

          {/* WEATHER IMAGE SECTION */}
          <ViewForecastImage>
            <ImageForecast
              source={require("../assets/images/3D-lighting-cloud.png")}
            ></ImageForecast>
          </ViewForecastImage>

          {/* DEGREE DISPLAYING SECTION */}
          <ViewDegreeContainer>
            <TextDegree>23&#176;</TextDegree>
            <TextWeather>Storm</TextWeather>
          </ViewDegreeContainer>

          {/* WEATHER STATS SECTION */}
          <ViewStatsContainer>
            <ViewStatsContent>
              <ImageStatsWind
                source={require("../assets/images/wind-info.png")}
              ></ImageStatsWind>
              <TextWind>28km</TextWind>
            </ViewStatsContent>

            <ViewStatsContent>
              <ImageStatsWind
                source={require("../assets/images/wind-info.png")}
              ></ImageStatsWind>
              <TextWind>28km</TextWind>
            </ViewStatsContent>

            <ViewStatsContent>
              <ImageStatsWind
                source={require("../assets/images/wind-info.png")}
              ></ImageStatsWind>
              <TextWind>28km</TextWind>
            </ViewStatsContent>
          </ViewStatsContainer>
        </ViewForecast>
      </SafeAreaViewStyled>
    </>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
