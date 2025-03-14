import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        backgroundColor: 'green',
    },
    logo: {
        imageResize: 'cover',
        width: '95%',
        height: 90,
        marginBottom: 50,
        marginLeft: 10,
    },
    logoArea: {
        marginBottom: 50,
    },
    inputCep: {
        marginTop: 30,
        marginBottom: 20,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    viewArea: {
        backGroundColor: 'olive',
        padding: 15,
        fontSize: 16,
    },
    subText: {
        fontSize: 14,
        marginTop: 100
    },
    btn: {
        color: '#000'
    }
})

export default styles;