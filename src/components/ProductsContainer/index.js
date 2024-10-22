import React from 'react'
import {View, Text} from "react-native"
import ProductItem  from "../ProductItem"
import productGetir from '../../../assets/productGetir'

function index(){
    return(
         //MAIN VIEW CARTSCREEN
        <View>
            {/* // 2 products */}
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                backgroundColor:"white"
            }}> 
            
                {productGetir.slice(0,2).map((item) =>(
                    <ProductItem key={item.id} item={item}/>
                ))}
                
            </View>
                <Text>Çubuk</Text>
            {/* BELOW PRODUCTS */}
            <View>
                
            </View>
        </View>
    )
}

export default index