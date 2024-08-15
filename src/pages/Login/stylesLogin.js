import { StyleSheet } from 'react-native';

export const stylesLogin = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '83%',
        height: '40%',
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 5.6,
        elevation: 6
    },
    button: {
        backgroundColor: '#E58942',
        width: 100,
        height: 50,
    },
    con_buttons: {
        flexDirection: 'row',
        width: '83%',
        height: 'auto',
    },
    forms: {
        width: '83%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flexDirection: 'row',
        marginBottom: 20
    },
    text: {
        marginRight: 10,
        fontSize: '18pt',
    }
});
