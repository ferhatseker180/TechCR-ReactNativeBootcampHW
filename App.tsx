import {View, Text,Image} from 'react-native';

import React from 'react';

const App = () => {
  return (
    <>
      <View style={{padding: 20}}>
        <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      
      }}
       >
          <Text style={{color: 'gray', marginTop:20}}>Friday, 15 Dec</Text>

          <Image
        style={{width:30,height:30,marginTop:20}}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/thumbnails/000/581/739/small/icon0-vector-557-01.jpg',
        }}
      />

        </View>

        <View>
          <Text style={{fontSize: 34, fontWeight: 'bold',marginTop:20,color:'black'}}>Learn</Text>

          <Text style={{paddingBottom:20, color:'black',fontSize:18}}>Choose part of the body</Text>
        </View>

        <View style={{backgroundColor:'lightsalmon', borderRadius:10}}>
          
          <Text style={{fontSize:26,fontWeight:'bold',color:'white',marginStart:20}}> Head & Face </Text>
          <Text style={{fontSize:18,color:'white',marginStart:20}}> 11 diseases </Text>
        </View>

        <View style={{backgroundColor:'lightblue',marginTop:20,borderRadius:10}}>
          
          <Text style={{fontSize:26,fontWeight:'bold',color:'white',marginStart:20}}> Back & Neck </Text>
          <Text style={{fontSize:18,color:'white',marginStart:20}}> 9 diseases </Text>
        </View>

        <View style={{backgroundColor:'orange',marginTop:20,borderRadius:10}}>
          
          <Text style={{fontSize:26,fontWeight:'bold',color:'white',marginStart:20}}> Elbow & Shoulders </Text>
          <Text style={{fontSize:18,color:'white',marginStart:20}}> 12 diseases </Text>
        </View>

        <View style={{backgroundColor:'royalblue',marginTop:20,borderRadius:10}}>
          
          <Text style={{fontSize:26,fontWeight:'bold',color:'white',marginStart:20}}> Hand & Arm </Text>
          <Text style={{fontSize:18,color:'white',marginStart:20}}> 2 diseases </Text>
        </View>

      </View>
    </>
  );
};

export default App;
