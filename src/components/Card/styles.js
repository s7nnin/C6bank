import { Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import cardIcon from '../../assets/credit_card.png';
import transferIcon from '../../assets/extrato.png';
import colors from '../../styles/themes/colors';
import fonts from '../../styles/themes/fonts';

export const Card = styled(Animated.View)`
  position: absolute;
  top: ${Dimensions.get('window').height}px;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${Dimensions.get('window').height}px;
`;

export const ViewInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 20px;
`;

export const ViewLeft = styled.View``;

export const Salutation = styled.Text`
  font-size: 14px;
  margin-bottom: 2px;
  color: ${colors.light};
  font-family: ${fonts.regular};
`;

export const Name = styled.Text`
  font-size: 24px;
  font-family: ${fonts.bold};
  color: ${colors.light};
`;

export const ViewRight = styled.View``;

export const ViewAvatar = styled.View`
  width: 40px;
  height: 40px;
  background: ${colors.gray_soft};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const NameAvatar = styled.Text`
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
`;

export const Main = styled.View`
  background: ${colors.light};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${Dimensions.get('window').height}px;
`;

export const ViewLine = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 50px;
  height: 5px;
  border-radius: 20px;
  background: ${colors.gray_soft};
`;

export const ViewTop = styled.View`
  padding: 0 20px;
`;

export const ViewListActions = styled.View`
  margin: 20px 0 10px;
`;

export const ListActions = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Divider = styled.View`
  width: 100%;
  height: 8px;
  background: ${colors.gray_soft};
`;

export const ViewMyCards = styled.View`
  padding: 20px;
`;

export const TitleMyCards = styled.Text`
  font-size: 16px;
  color: ${colors.gray_dark};
  font-family: ${fonts.regular};
  margin-bottom: 20px;
`;

export const CardCard = styled.View.attrs({
  shadowColor: '#999',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 2,
})`
  width: 100%;
  height: 195px;
  background: ${colors.light};
  border-radius: 5px;
`;

export const StatusCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
  padding: 0 20px;
`;

export const CircleCard = styled.View`
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 5px;
  margin-right: 5px;
`;

export const StatusName = styled.Text`
  font-size: 10px;
  color: ${colors.dark};
  font-family: ${fonts.regular};
`;

export const ImageCard = styled.Image.attrs({
  source: cardIcon,
  resizeMode: 'stretch',
})`
  width: 90%;
  padding: 0 20px;
  align-self: center;
`;

export const InfoCard = styled.View.attrs({
  shadowColor: '#999',
  shadowOffset: { width: 0, height: -1 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2,
})`
  background: ${colors.light};
  padding: 0 20px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoCardTitle = styled.Text`
  font-size: 12px;
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
  margin-bottom: 3px;
`;

export const CardNumber = styled.Text`
  font-size: 14px;
  color: ${colors.dark};
  font-family: ${fonts.light};
`;

export const ViewInfoLeft = styled.View``;

export const ViewInfoRight = styled.View``;

export const ButtonCard = styled.TouchableOpacity`
  border: 1px solid ${colors.gray_soft};
  padding: 10px;
  border-radius: 30px;
`;

export const TitleButtonCard = styled.Text`
  font-size: 12px;
  color: ${colors.gray_dark};
  font-family: ${fonts.light};
`;

export const ViewMyTransfers = styled.View`
  padding: 20px;
`;

export const TitleTransfers = styled.Text`
  font-size: 16px;
  color: ${colors.gray_dark};
  font-family: ${fonts.regular};
  margin-bottom: 20px;
`;

export const ViewNoTransfer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageTransfer = styled.Image.attrs({
  source: transferIcon,
})`
  width: 120px;
  height: 120px;
`;

export const NoTranfersTitle = styled.Text`
  font-size: 16px;
  color: ${colors.gray_dark_light};
  font-family: ${fonts.regular};
  margin-bottom: 20px;
`;

export const ButtonAddCredit = styled.TouchableOpacity`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const ViewGradient = styled(LinearGradient).attrs({
  colors: ['#fee554', '#FFCD2E'],
})`
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const TitleAddCredit = styled.Text`
  font-size: 12px;
  color: ${colors.dark};
  font-family: ${fonts.light};
`;
