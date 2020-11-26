import React from 'react';
import { TextInput, View } from 'react-native';
import InputFieldStyle from './InputFieldStyle';
import Text from '../Text/Text';

/**
 * @function
 * Input Text Field UI
 */
const TextField = (props) => {
	return (
		<View>
			<Text style={[InputFieldStyle.floatingText]} testID="text">
				{props.floatingText}
			</Text>
			<TextInput
				onChangeText={props.onChangeText}
				placeholder={props.placeholder}
				value={props.value}
				placeholderTextColor="#868686"
				testID="input"
				{...props}
				style={[InputFieldStyle.inputFieldStyle]}
			/>
		</View>
	);
};

export default TextField;
