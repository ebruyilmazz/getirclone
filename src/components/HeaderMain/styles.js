import { StyleSheet, Dimensions } from "react-native";

const {height} =Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor:'#F7D102', 
        flexDirection:"row"
    },
    headerOne:{
        backgroundColor:"white",
        width:'80%',
        height: height * 0.064,
        flexDirection:'row',
        alignItems:"center",
        paddingHorizontal:'4%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25

    },
    headerTwo:{
        width:'20%',
        height: height * 0.064,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:"10"
    }
})


export default styles;