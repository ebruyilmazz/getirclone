import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView, ActivityIndicator} from "react-native"
import Product from '../../models/indexProducts'
import ImageCarousel from "../../components/ImageCarousel"
import DetailBox from "../../components/DetailBox"
import DetailProperty from "../../components/DetailProperty"
import CardButton from "../../components/CardButton"


function index(props) {

    const [product, setProduct] =useState()
    useEffect(()=>{
        setProduct(props.route.params.product)
    }, [])
    console.log("Our product is", product)
    if(!product)
    {
        return <ActivityIndicator color={"#5D3EBD"} />
    }
    return (
        <View style={{
            backgroundColor:"white",
            flex:1
        }}>
            <ScrollView>
                <ImageCarousel images ={product.images}/>
                <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
                <Text style={{
                    paddingHorizontal:10,
                    paddingVertical:13,
                    color:'#808B99',
                    fontWeight:'600',
                    fontSize:14
                    }}>
                        Detaylar 
                    </Text>
                    <DetailProperty/>
            </ScrollView>
            <CardButton />
        </View>
    )
}

export default index