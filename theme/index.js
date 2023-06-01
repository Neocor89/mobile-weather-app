import styled from "styled-components/native";

export const SafeAreaViewStyled = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

export const ViewStyled = styled.View`
  height: 7%;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
  z-index: 20;
`;

export const ViewInStyled = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 100px;
  background-color: #ffffff;
  opacity: 0.2;
  transition: background-color 1s ease-in-out;
`;

export const TextInputStyled = styled.TextInput`
  padding-left: 18px;
  height: 20px;
  flex: 1;
  color: #ffffff;
`;

export const TouchableOpacityStyled = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 100px;
  padding: 12px;
  margin: 4px;
`;

export const TouchableOpacityLocStyled = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5px;
  margin-bottom: 15px;
  border-bottom-width: 2px;
  border-bottom-color: #aaaeb4;
`;

export const ViewLocation = styled.View`
  position: absolute;
  background-color: rgb(209 213 219);
  top: 64px;
  width: 100%;
  border-radius: 19px;
`;
