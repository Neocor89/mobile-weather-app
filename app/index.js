import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
import styled from "styled-components/native";

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
`;

const InputStyled = styled.TextInput`
  padding-left: 1.5rem;
  height: 2rem;
  flex: 1;
  color: #ffffff;
`;

export default function Home() {
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
          <ViewInStyled>
            <TextInput
              placeholder="Search City"
              placeholderTextColor={"black"}
            />
          </ViewInStyled>
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
