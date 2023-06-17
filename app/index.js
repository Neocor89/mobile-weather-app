import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ImageForecast,
  ImageForecastWeek,
  ImageStatsWind,
  NewTouchableOpacityLoc,
  SafeAreaViewStyled,
  TextCalendar,
  TextCities,
  TextCountry,
  TextDegree,
  TextForecast,
  TextForecastWind,
  TextInputStyled,
  TextWeather,
  TextWind,
  TouchableOpacityStyled,
  ViewCalendarContainer,
  ViewForecastWeek,
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

import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";

// TODO
//: fix the bug with the API calling
//: FOUND NEW IDEAS FOR STYLES COMPONENTS IMPORTS

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log("Location is : ", loc);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      console.log("Get data: ", data);
    });
  };

  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({
        cityName: value,
      }).then((data) => {
        setLocations(data);
      });
    }
  };

  const handleDebounce = useCallback(debounce(handleSearch, 1200), []);

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
                onChangeText={handleDebounce}
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
                    <TextCities>
                      {loc?.name} {loc?.country}
                    </TextCities>
                  </TouchableOpacity>
                );
              })}
            </ViewLocation>
          ) : null}
        </ViewStyled>
        {/* MAINFORECAST SECTION */}
        <ViewForecast>
          <TextForecast>
            Bogota,
            <TextCountry>Colombia</TextCountry>
          </TextForecast>

          {/* WEATHER IMAGE SECTION  */}
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

        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 0 }}
          showsHorizontalScrollIndicator={false}
        >
          {/*
          ADDING NEW CONTENT FORECAST SECTION */}
          <ViewForecastWeek>
            <ImageForecastWeek
              source={require("../assets/images/sunny-rain.png")}
            ></ImageForecastWeek>
            <Text style={{ color: "white" }}>Monday</Text>
            <TextForecastWind>15&#176;</TextForecastWind>
          </ViewForecastWeek>
          <ViewForecastWeek>
            <ImageForecastWeek
              source={require("../assets/images/sunny-rain.png")}
            ></ImageForecastWeek>
            <Text style={{ color: "white" }}>Tuesday</Text>
            <TextForecastWind>12&#176;</TextForecastWind>
          </ViewForecastWeek>
          <ViewForecastWeek>
            <ImageForecastWeek
              source={require("../assets/images/sunny-rain.png")}
            ></ImageForecastWeek>
            <Text style={{ color: "white" }}>Wednesday</Text>
            <TextForecastWind>14&#176;</TextForecastWind>
          </ViewForecastWeek>
          <ViewForecastWeek>
            <ImageForecastWeek
              source={require("../assets/images/sunny-rain.png")}
            ></ImageForecastWeek>
            <Text style={{ color: "white" }}>Thursday</Text>
            <TextForecastWind>11&#176;</TextForecastWind>
          </ViewForecastWeek>
          <ViewForecastWeek>
            <ImageForecastWeek
              source={require("../assets/images/sunny-rain.png")}
            ></ImageForecastWeek>
            <Text style={{ color: "white" }}>Friday</Text>
            <TextForecastWind>18&#176;</TextForecastWind>
          </ViewForecastWeek>
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
