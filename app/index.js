import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ImageForecast,
  ImageStatsWind,
  NewTouchableOpacityLoc,
  SafeAreaViewStyled,
  TextCalendar,
  TextCities,
  TextCountry,
  TextDegree,
  TextForecast,
  TextInputStyled,
  TextWeather,
  TextWind,
  TouchableOpacityLocStyled,
  TouchableOpacityStyled,
  ViewCalendarContainer,
  ViewCalendarContent,
  ViewDegreeContainer,
  ViewForecast,
  ViewForecastImage,
  ViewInStyled,
  ViewLocation,
  ViewStatsContainer,
  ViewStatsContent,
  ViewStyled,
  ViewWeekContainer,
} from "../theme";

// TODO

//+ CONTINUING FORECAST WEEK DISPLAYING WITH IMAGES

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
                source={require("../assets/images/wind-stats.png")}
              ></ImageStatsWind>
              <TextWind>28km</TextWind>
            </ViewStatsContent>

            <ViewStatsContent>
              <ImageStatsWind
                source={require("../assets/images/drop-stats.png")}
              ></ImageStatsWind>
              <TextWind>23%</TextWind>
            </ViewStatsContent>

            <ViewStatsContent>
              <ImageStatsWind
                source={require("../assets/images/sun-stats.png")}
              ></ImageStatsWind>
              <TextWind>8:20 AM</TextWind>
            </ViewStatsContent>
          </ViewStatsContainer>
        </ViewForecast>

        {/* FORECAST WEEK SECTION */}
        <ViewWeekContainer>
          <ViewCalendarContainer>
            <Ionicons name="calendar-outline" color={"#cbcbcb"} size={24} />
            <TextCalendar>Daily Forecast</TextCalendar>
          </ViewCalendarContainer>
        </ViewWeekContainer>

        <ScrollView>
          <ViewCalendarContent></ViewCalendarContent>
        </ScrollView>
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
