import { StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SafeAreaViewStyled = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

const ViewStyled = styled.View`
  height: 7%;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  z-index: 20;
`;

const ViewInStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 100px;
  background-color: #ffffff;
  opacity: 0.2;
  transition: background-color 1s ease-in-out;
`;

const TextInputStyled = styled.TextInput`
  padding-left: 18px;
  height: 20px;
  flex: 1;
  color: #ffffff;
`;

const TouchableOpacityStyled = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 100px;
  padding: 12px;
  margin: 4px;
`;

const ViewLocation = styled.View`
  position: absolute;
  background-color: rgb(209 213 219);
  top: 64px;
`;

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
            <ViewLocation></ViewLocation>
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
