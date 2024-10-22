import React from "react";
import { View, Text, Image, Dimensions } from "react-native";


const {width, height} = Dimensions.get("window")
function index({ product }) {
  return (
    <View style={{
        width:"100%",
        backgroundColor:"white"
    }}>
        <View style={{
            height:height*0.13,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-around",
            marginHorizontal:width*0.04,
            backgroundColor:"white",
            borderBottomWidth:0.4,
            borderBottomColor:"lightgrey",
            width:width*0.9
        }}>
            <View style={{
                flexDirection:"row", 
                alignItems:"center"
            }}>
                <Image style={{
                    height:height*0.09,
                    width:height*0.09
                }} source={{uri:product.image}}/>
                <View style={{
                    marginLeft:8
                }}>
                    <Text style={{
                        fontSize:13,
                        fontWeight:'600',
                        maxWidth:width*0.4
                    }}>{product.name}</Text>

                    <Text style={{
                        fontSize:12,
                        marginTop:3,
                        color:"#848897",
                        fontWeight:"600"
                    }}>{product.miktar}</Text>

                    <Text style={{
                        color:"#5D3EBD",
                        fontWeight:"bold",
                        marginTop:6,
                        fontSize:15
                    }}> 
                    <Text>{"\u20BA"}</Text>
                    {product.fiyat}</Text>
                </View>         
            </View>

            <View style={{
                flexDirection:"row",
                width:width*0.2,
                borderColor:"lightgrey",
                borderWidth:0.5,
                height:height*0.03,
                borderRadius:10,
                justifyContent:"space-around",
                alignItems:"center",
                shadowOpacity: 0.4,
                shadowColor: "gray",
            }}>
                <View style={{
                    flex:1,
                    alignItems:"center",
                }}>
                    <Text>-</Text>
                </View>

                <View style={{
                    flex:1,
                    alignItems:"center",
                    backgroundColor:"#5D3EBD",
                    height:height*0.03,
                    justifyContent:"center"
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        color:"white",
                        fontSize:12
                    }}>1</Text>
                </View>

                <View style={{
                    flex:1,
                    alignItems:"center"
                }}>
                    <Text>+</Text>
                </View>
            </View>
        </View>
    </View>
  );
}


export default index;
