import { View,Image, Text ,StyleSheet, Pressable} from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

const PizzaCard = ({imgUrl,name,price}) => {
  return (
    <Pressable>
    <View style={style.PizzaCard} >
    <Image source={{ uri: imgUrl } } style={{width:'100%', height:'90%'}} resizeMode={'cover'}/>
      <Text >{name}</Text>
    </View>
    
    </Pressable>
    
  )
}

export default PizzaCard

const style= StyleSheet.create({
    
   PizzaCard:{
     width:'200px',
     height:'200px',
     borderColor:'yellow', 
     borderRadius:'10px',
     backgroundColor:'grey',
     borderWidth:'1px',
     overflow:'hidden',
     margin:'20px' 
    
   },
 btn:{
   height:'20px',
         margin:'5px', 
         borderRadius:'5px',
        backgroundColor:'blue', 
        color:'white',
        borderColor:'yellow',
        borderWidth:'1px',
        padding:'1px'
 }

});
