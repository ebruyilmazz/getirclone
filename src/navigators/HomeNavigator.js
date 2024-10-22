import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen"
import { Dimensions, Image, Text, TouchableOpacity,View } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import CartScreen from "../screens/CartScreen"


const {width, height} =Dimensions.get("window")
const stack = createStackNavigator()

const tabHiddenRoutes = ["ProductDetails", "CartScreen"]
function MyStack({route}){
    const navigation=useNavigation()
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log("Route Name is ", routeName);
        if (tabHiddenRoutes.includes(routeName)) {
          console.log("Kapat ", routeName);
          navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
          console.log("Aç ", routeName);
          navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation, route]);
    return(
        <stack.Navigator>
            <stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle:{backgroundColor:"#5C3EBC"},
                    headerTitle: () => (
                        <Image source = {require("../../assets/getirlogo.png")}
                        style={{
                            width:70,
                            height:30
                        }}
                        />
                    )
                }}
            />
            <stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerShadowVisible:false,
                    headerBackTitleVisible:false,
                    headerTintColor:"white",
                    headerStyle:{backgroundColor:"#5C3EBC"},
                    headerTitle: () => (
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:15,
                            color:"white"
                        }}>Ürünler</Text>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}
                    
                        style={{
                            width:width*0.22,
                            height:33,
                            backgroundColor:"white",
                            marginRight:width*0.03,
                            borderRadius:9,
                            flexDirection:"row",
                            alignItems:"center"
                        }}>
                            <Image style={{
                                width:23,
                                height:23,
                                marginLeft:6
                            }} source={require("../../assets/cart.png")}/>
                            <View style={{
                                flex:1,
                                height:33,
                                borderTopRightRadius:9,backgroundColor:"#F3EFFE",
                                borderBottomRightRadius:9,
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <Text style={{
                                    color:"#5C3EBC",
                                    fontWeight:"bold",
                                    fontSize:12
                                }}>
                                    <Text>
                                        {"\u20BA"}
                                    </Text>24,00
                                </Text>

                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
            <stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ paddingLeft: 8 }}
                        >
                        <Ionicons
                            style={{ marginLeft: 8 }}
                            name="close"
                            size={26}
                            color="white"
                        />
                        </TouchableOpacity>
                    ),
                    headerTitle:() => (
                        <Text style={{
                            fontWeight:"bold",
                            color:"white",
                            fontSize:15
                        }}>
                            Ürün Detayı
                        </Text>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 10 }}>
                          <Foundation
                            style={{ marginRight: 8 }}
                            name="heart"
                            size={26}
                            color="#32177a"
                          />
                        </TouchableOpacity>
                      ),
                }}
            />

            <stack.Screen 
                name="CartScreen"
                component={CartScreen}
                
                options={{
                    headerTintColor: "white",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (
                      <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
                        Sepetim
                      </Text>
                    ),
                    headerLeft: () => (
                      <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ paddingLeft: 8 }}
                      >
                        <Ionicons
                          style={{ marginLeft: 4 }}
                          name="close"
                          size={26}
                          color="white"
                        />
                      </TouchableOpacity>
                    ),
                    headerRight: () => (
                      <TouchableOpacity onPress={() =>clearCart()} style={{ paddingRight: 10 }}> 
                        <Ionicons style={{marginRight:8}} name="trash" size={24} color="white" />
                      </TouchableOpacity>
                    ),
                  }}
                  
                
            />
        </stack.Navigator>
    )
}
export default function HomeNavigator({navigation, route}){
    return <MyStack navigation = {navigation} route= {route}/>
}