import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 30 : 40}px;
  position: relative;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 5px 0 24px;
`

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 5px;
`

export const UserAvatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 98px;
  align-self: center;
`
