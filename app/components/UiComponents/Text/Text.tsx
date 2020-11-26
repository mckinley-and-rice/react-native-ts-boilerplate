import React from 'react';
import { Text as RNText, TextProperties } from 'react-native';
import styles from './TextStyle';

type Props = {
    children: React.ReactText | React.ReactText[];
};

/**
 * @function
 * Text UI
 */
const Text: React.FunctionComponent<Props & TextProperties> = (props: Props & TextProperties) => {
    const { style, children } = props;
    return (
        <RNText {...props} style={[styles.textStyle, style]}>
            {children}
        </RNText>
    );
};

export default Text;
