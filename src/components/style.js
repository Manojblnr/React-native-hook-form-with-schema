import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        // backgroundColor: '#97E7E1',
        padding:5,
        justifyContent:'center'
    },
    formCard:{
        flex: 16,
        backgroundColor: '#fff',
        marginBottom:6,
        borderRadius: 15,
        paddingHorizontal:'4%',
        paddingVertical:'4%',
    },
    
    inputView: {
        flex:2,
        flexDirection:'row',
        width:'100%',
        marginLeft:'0%'

    },
    inputWrapper: {
        flex:1,
        fontSize:10,
    },
    label: {
        fontSize:15,
        fontWeight: '500',
        color:'#000',
        opacity:0.7,
        paddingBottom:3,
    },
    input: {
        borderWidth: 1,
        height:'50%',
        width:'90%',
        borderRadius:5,
        borderColor:'#D8D9DA',
        fontSize:13,
        fontWeight:'400',
        padding:1,
        paddingLeft:6, 
    },
    inputHighlighted: {
        borderWidth: 1,
        borderColor:'#41B06E',
        height:'50%',
        width:'90%',
        borderRadius:5,
        fontSize:13,
        fontWeight:'400',
        padding:1,
        paddingLeft:6,       
    },
    lenInput: {
        width: '95%',
        borderWidth: 1,
        height:'50%',
        borderRadius:5,
        borderColor:'#D8D9DA',
        fontSize:13,
        padding:1,
        paddingLeft:6,   
    },
    lenInputFocused:{
        borderColor:'#41B06E',
        borderWidth:0.5
    },
    outletImageView :{ 
        flex: 3,
        marginBottom:3,
        justifyContent:'space-between',
        borderColor:'#C6EBC5',
        borderTopWidth:0.4,
        borderBottomWidth:0.4,
    },
    fileHeader: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        // padding:5
        alignItems:'center'   
    },
    outletImageHeaderLeft: {
        flex:20,
        flexDirection:'row',
        
    },
    outletImageHeaderRight: {
        flex:1
    },
    OutletLabel: {
        fontSize:16,
        fontWeight: '500',
        color:'#000',
        opacity:0.8,
        paddingBottom:3,
        marginHorizontal:5
    },
    fileView: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    fileViewOne: {
        flexDirection:'row',
        height:34,
        borderWidth:0.3,
        borderColor:'#D8D9DA',
        justifyContent:'space-between',
        borderRadius:5,
        width:320,
    },
    uploadFilNameView:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'#C6EBC5',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        alignItems:'center',
    },
    uploadFilNameIconCircleView: {
        backgroundColor:'#fff',
        height:22,
        width:22,
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:5,
        marginRight:5
    },
    filePhotoIconView: {
        backgroundColor:'#496989',
        height:18,
        width:18,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    uploadFilName: {
        fontSize:15,
        color:'#000',
        opacity:0.8,
    },
    uploadIcon: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    IdProofView: {
        flex: 2,
        marginBottom:3,
        backgroundColor:'red'
    },
    mapInputView:{
        flex:2,
    },
    googleMapIconView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    googleMapIcon: {
        width:12,
        height:16,
        backgroundColor:'#fff'
    },
    mapInputViewText:{
        marginLeft:3,
        color:'#387ADF',
        fontSize:10,
        fontWeight:'600'
    },
    remarksView: {
        flex: 3,
    },
    remarksInput:{
        borderWidth: 0.4,
        height:70,
        width:338,
        borderRadius:5,
        borderColor:'#D8D9DA',
        fontSize:9,
        padding:1,
        marginTop:7,
        textAlignVertical:'top',
        padding:4
    },
    submitCardView: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cancelBtn:{
        width: 45,
        height:23,
        fontSize:5,
        borderWidth:0.4,
        borderRadius:5,
        borderColor:'#D8D9DA',
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#41B06E'
    },
    btnView:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    cancelBtnTxt:{
        fontSize:8,
        color:'#41B06E',
        fontWeight:'800'
    },
    saveBtnTxt:{
        fontSize:8,
        color:'#fff',
        fontWeight:'800'
    },
    saveBtn: {
        width: 50,
        height:23,
        marginRight:30,
        fontSize:5,
        backgroundColor:'#41B06E',
        borderWidth:0.4,
        borderRadius:5,
        borderColor:'#D8D9DA',
        alignItems:'center',
        justifyContent:'center' 
    },





    // test form styles

    container: {
        flex:1,
        alignItems:'center',
        // backgroundColor:'red',
        justifyContent:'center'
    },
    testFormView : {
        backgroundColor:'#3C5B6F',
        width:'70%',
        borderRadius:10,
        padding:15
    },
    renderCount : {
        fontSize:25
    },
    title : {
        color:'#fff',
        fontSize:25
    },
    placeholder: {
        fontSize:15,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#F6F5F2',
        color:'#000'
    },
    errorText: {
        fontSize: 12,
        color:'#fff'
    },
    normalInput: {
        borderWidth:1,
        borderColor:'#ccc'
    },
    validInput: {
        borderWidth:1,
        borderColor:'green'
    },
    inValidInput : {
        borderWidth:1,
        borderColor:'red'
    },


});

export default styles;

