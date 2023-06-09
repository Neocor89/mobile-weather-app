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

export const NewTouchableOpacityLoc = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #aaaeb4;
  margin-bottom: 0px;
`;

export const ViewLocation = styled.View`
  position: absolute;
  background-color: rgb(209 213 219);
  top: 64px;
  width: 100%;
  border-radius: 19px;
`;

export const TextCities = styled.Text`
  color: #202125;
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 7px;
  margin-top: 8px;
`;

export const ViewForecast = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 40px;
`;

export const TextForecast = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  margin-bottom: 7px;
  margin-top: 8px;
  font-size: 24px;
  line-height: 32px;
`;

export const TextCountry = styled.Text`
  color: rgb(209 213 219);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const ViewForecastImage = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageForecast = styled.Image`
  width: 230px;
  height: 208px;
  margin-top: 80px;
  margin-bottom: 45px;
`;

export const ViewDegreeContainer = styled.View`
  margin-left: 8px;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const TextDegree = styled.Text`
  color: white;
  text-align: center;

  font-weight: bold;
  font-size: 60px;
`;

export const TextWeather = styled.Text`
  color: rgb(255 255 255);
  text-align: center;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

//? FORECAST WEEK SECTION

export const ViewStatsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ViewStatsContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const ImageStatsWind = styled.Image`
  width: 29px;
  height: 29px;
`;

export const TextWind = styled.Text`
  color: rgb(255 255 255);
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.8px;
`;

export const ViewWeekContainer = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ViewCalendarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ViewCalendarContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  border-radius: 24px;
  margin-right: 16px;
  margin-left: 4px;
  background-color: rgba(255, 255, 255);
  opacity: 0.2;
`;

export const TextCalendar = styled.Text`
  color: rgb(255 255 255);
  margin-left: 16px;
`;
