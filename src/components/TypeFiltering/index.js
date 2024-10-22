import React,{useState} from "react"
import{TouchableOpacity,Dimensions,Text} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
const {height,width} = Dimensions.get('window')

const TypeBox = ({active,item,setCat}) => {
    return(
        <TouchableOpacity onPress={() => setCat(item)} style={[{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center', 
            paddingHorizontal:10,
            borderRadius:6,
            height:height*0.044,
            marginRight:12},
            item == active ?{backgroundColor:'#5C3EBC'}:{borderColor:'#F0EFF7',borderWidth:1}]}>
            <Text style={[{
                fontSize:12,
                color:'#7849F7',
                fontWeight:'600'},
                item==active && {color:'white'}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function Index() {
    const [category,setCategory] = useState("Birlikte İyi Gider")
    return(
        <ScrollView style={{
            width:'100%',
            backgroundColor:'white',
            height:height*0.072,
            flexDirection:'row',
            paddingVertical:height*0.014,
            paddingHorizontal:12,
            borderBottomColor:"lightgrey",
            borderBottomWidth:1,
        }} 
            showsHorizontalScrollIndicator={false} 
            bounces={true} 
            horizontal={true}>
            {["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item)=>(
                <TypeBox setCat={setCategory} item={item} active={category}  />
            ))
            }
        </ScrollView>
    )
    
}
export default Index