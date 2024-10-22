import React,{useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import categoriesGetir from '../../../assets/categoriesGetir'
import CategoryItem from '../../components/CategoryItem'
import Category from "../../models"

const categories = categoriesGetir.map(
    (cat) => new Category(cat.id, cat.name, cat.src, cat.subCategories)
); 

function index(){
    const [categories, setCategories] = useState(categoriesGetir)
    return(
        <View>
                <FlatList 
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CategoryItem item = {item} />
                )}
                numColumns={4}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex:1,
        flexDirection:"row",
    },

})
export default index