import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaViewStyled,
  TextInputStyled,
  TouchableOpacityLocStyled,
  TouchableOpacityStyled,
  ViewInStyled,
  ViewLocation,
  ViewStyled,
} from "../theme";

// TODO
//+ RESTART WITH DISPLAY LOCATIONS
//+ CHANGING ALL CSS IN ANOTHER FILE

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
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
                let borderLocation = index + 1 != locations.length;
                //+ TODO --> continuing border style
                // let borderClass = showBorder ? border1 : border2;
                return (
                  <TouchableOpacityLocStyled key={index}>
                    <Ionicons name="location-outline" />
                    <Text style={{ marginBottom: 7 }}>
                      Paris, Barcelona, Miami
                    </Text>
                  </TouchableOpacityLocStyled>
                );
              })}
            </ViewLocation>
          ) : null}
        </ViewStyled>
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
