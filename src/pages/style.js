import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    main: {
        flex: 1,
        padding: 8,
        paddingBottom:0,
        // backgroundColor: 'green'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 5,
        paddingTop: 3,
        // backgroundColor: '#6C0345'
    },
    formView : {
        flex: 20,
        // backgroundColor: '#003C43',
        padding: 5,
        paddingBottom:0,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    leftText: {
        fontSize: 25,
        marginHorizontal:14,
        color:'#000',
        fontWeight: '400',
        opacity: 0.7,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    userLogo: {
        borderWidth: 1,
        borderRadius: 50, 
        borderColor: '#41B06E',
        overflow: 'hidden', 
        width: 50,
        height: 50,
        padding: 3
    },
    userLogoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default styles;