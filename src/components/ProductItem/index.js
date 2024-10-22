import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import productGetir from "../../../assets/productGetir";
import Product from "../../models/indexProducts";
import { useNavigation } from "@react-navigation/native";


const {width, height} =Dimensions.get("window")

const products = productGetir.map(
    (prod) => new Product(prod.id, prod.image, prod.images, prod.name, prod.miktar, prod.fiyat, prod.fiyatIndirimli)
);

function index(){
  const navigation = useNavigation()
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {products.map((product) => (
            <TouchableOpacity
              onPress={() =>navigation.navigate("ProductDetails",{product})}
              key={product.id}
              style={{
                width: width * 0.3,
                marginTop: 12,
                height: height * 0.25,
                marginLeft: 12,
                marginBottom: 10,
              }}
            >
              <Image
                style={{
                  width: width * 0.28,
                  height: width * 0.28,
                  borderRadius: 12,
                  borderWidth: 0.1,
                  borderColor: "gray",
                }}
                source={{ uri: product.image }}
              />
    
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#747990",
                    textDecorationLine: 'line-through',
                  }}
                >
                  <Text>{"\u20BA"}</Text>{product.fiyat}
                </Text>
                <Text
                  style={{
                    color: "#5D3EBD",
                    fontWeight: "bold",
                    fontSize: 13,
                    marginLeft: 4,
                  }}
                >
                  <Text>{"\u20BA"}</Text>{product.fiyatIndirimli}
                </Text>
              </View>
    
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '600',
                  marginTop: 5,
                }}
              >
                {product.name}
              </Text>
              <Text
                style={{
                  color: "#747990",
                  fontSize: 12,
                  marginTop: 4,
                  fontWeight: '500',
                }}
              >
                {product.miktar}
              </Text>
    
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 0.3,
                  borderColor: "lightgrey",
                  backgroundColor: "white",
                  position: "absolute",
                  right: -6,
                  top: -6,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowRadius: 3,
                  shadowOpacity: 0.05,
                }}
              >
                <Entypo name="plus" size={22} color="#5D3EDB" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
}

export default index