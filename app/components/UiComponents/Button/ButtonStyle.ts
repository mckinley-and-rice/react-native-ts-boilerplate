import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    customButton: {
        backgroundColor: "#272727",
        marginLeft: 100,
        marginRight: 100,
        marginTop: 30,
        width: Dimensions.get('window').width - 70,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000000",
        shadowOpacity: 1.0,
        borderColor: "#666666",
        borderStyle: 'solid',
        borderWidth: 1,
        elevation: 1,
        borderRadius: 5,
    },
    customButtonText: {
        textAlign: 'center',
        width: '100%',
        alignSelf: 'center',
        color: "#FFFFFF",
    },
});
