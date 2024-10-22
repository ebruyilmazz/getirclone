import React,{useState} from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering"
import TypeFiltering from "../../components/TypeFiltering"
import ProductsContainer from "../../components/ProductsContainer";

function index(props){
return(
    <ScrollView stickyHeaderIndices={[0]} style={{height:'100%',backgroundColor:'#f5f5f5'}}>
        <CategoryFiltering/>
        <TypeFiltering />
        <ProductsContainer/>
    </ScrollView>
) 
}
export default index