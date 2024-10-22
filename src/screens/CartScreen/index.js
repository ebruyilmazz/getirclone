import React from "react";
import { FlatList, View, Text, Dimensions } from "react-native";
import productGetir from "../../../assets/productGetir";
import CartItem from "../../components/CartItem";
import { TouchableOpacity, ScrollView } from "react-native";

const {width, height} = Dimensions.get("window")
function index() {
  return (
    <View style={{flex:1}}>
        <FlatList
        data={productGetir.slice(0,4)}
        renderItem={({ item }) => <CartItem product={item} />}
        keyExtractor={(item) => item.id.toString()} 
        />

        <View style={{
            height:height*0.12,
            flexDirection:"row",
            alignItems:"center",
            paddingHorizontal:"4%",
            backgroundColor:"#f9f9f9"
        }}>
            <TouchableOpacity style={{
                height:height*0.06,
                flex:3,
                backgroundColor:"#5D3EBD",
                justifyContent:"center",
                alignItems:"center",
                marginTop:-10,
                borderTopLeftRadius:8,
                borderBottomLeftRadius:8
            }}>
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:15
                }}>Devam</Text>
            </TouchableOpacity>
            <View style={{
                flex:1,
                backgroundColor:"white",
                alignItems:"center",
                justifyContent:"center",
                marginTop:-10,
                height:height*0.06,
                borderTopRightRadius:8,
                borderBottomRightRadius:8
            }}>
                <Text style={{
                    color:"#5D3EBD",
                    fontWeight:"bold",
                    fontSize:16
                }}>
                    <Text>{"\u20BA"}</Text>24,00
                </Text>
            </View>
        </View>
    </View>
  );
}

export default index;
