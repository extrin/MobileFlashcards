import React from 'react';
import styled from 'styled-components';
import * as colors from '../utils/colors';

export const PrimaryText = styled.Text`
  color: ${colors.primary_text_color};
  font-size: 25;
`;
export const SecondaryText = styled.Text`
  color: ${colors.secondary_text_color};
  font-size: 20;
  padding-top: 5px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20;
  padding: 2px;
  font-variant: small-caps;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background-color: ${colors.dark_primary_color};
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  border-radius: 2px;
  height: 45px;
  margin: 20px auto;
  padding: 10px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${colors.light_primary_color};
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  border-radius: 2px;
  height: 45px;
  margin: 20px auto;
  padding: 10px;
`;

export const AccentButton = styled.TouchableOpacity`
  border: 2px ${colors.accent_color};
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  border-radius: 2px;
  height: 45px;
  margin: 20px auto;
  padding: 10px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding: 15px;
  align-items: center;
`;

export const TouchableContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.white};
  padding: 15px;
  align-items: center;
`;

export const CorrectButton = styled.TouchableOpacity`
  background-color: ${colors.primary_color};
  height: 45px;
  border-radius: 2px;
  align-items: center;
  align-self: center;
`;

export const IncorrectButton = styled.TouchableOpacity`
  background-color: ${colors.red};
  height: 45px;
  border-radius: 2px;
  align-items: center;
  align-self: center;
`;

export const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.white};
  padding: 15px;
  align-items: center;
`;

export const PrettyInput = styled.TextInput`
  border: 2px ${colors.primary_color};
  border-radius: 5px;
  font-size: 20px;
  padding: 10px;
  margin: 0 auto;
  width: 300px;
`;
