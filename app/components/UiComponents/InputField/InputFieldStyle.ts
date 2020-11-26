import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    inputFieldStyle: {
        color: "#FFFFFF",
        width: Dimensions.get('window').width - 70,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: "#a4a4a4",
        borderBottomWidth: 1,
        padding: 5,
    },
    floatingText: {
        color: "#555555",
        marginBottom: -30,
        marginTop: 30,
    },
});
