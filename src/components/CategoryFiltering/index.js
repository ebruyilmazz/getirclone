import React,{useState} from "react";
import { ScrollView } from "react-native";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";

const {height, width} = Dimensions.get("window")

const CategoryBox = ({item, isSelected, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 9,
        }}> 
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
                paddingHorizontal:9,
                borderBottomWidth: isSelected ? 2:0,
                borderBottomColor: isSelected ? "#FFD700" : "transparent"
            }}>
                <Text style={{
                    fontSize:14,
                    color:"white",
                    fontWeight:"600"
                }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}
function Index(){
    const [categories, setCategories] = useState(categoriesGetir)
    const [selectedCategory, setSelectedCategory] = useState(null)
    return(
        <ScrollView style={{width:'100%', backgroundColor:"#7849F7", height:height *0.065}} showsHorizontalScrollIndicator={false} bounces={true} horizontal>

            {categories.map((item)=>(
                <CategoryBox key={item.id} item={item}
                isSelected={item.name ==selectedCategory}
                onPress={() => setSelectedCategory(item.name)}/>
            ))}

        </ScrollView>
    )
}

export default Index