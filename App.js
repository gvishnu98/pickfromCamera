import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity,Alert,Image} from 'react-native';
import *as ImagePicker from 'expo-image-picker';
import *as Permissions from 'expo-permissions';

const App = ()=>{

  const [selectedImage,setSelectedImage] = React.useState(null);

  let pickfromcamera = async()=>{
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

      if(permissionResult.granted === false){
        alert('you need to give up permission to work');
        return;
      }
          let data = await ImagePicker.launchCameraAsync();
          if(data.cancelled === true){
            return;
          }

          setSelectedImage({localUri: data.uri});
        };

        if(selectedImage !== null){
          return(
            <View style={styles.container}>
              <Image
                 source={{uri:selectedImage.localUri}}
                 style = {styles.thumbnail}
              />      
    </View>
          )}

          return(
            <View>
              <TouchableOpacity style={{backgroundColor:'#0C948A',borderRadius:10,width:300,height:45,alignItems:'center',marginBottom:100}} onPress={() => pickfromcamera()}>
        <Text style={{fontSize:16,fontWeight:"bold",color:'#fff',marginTop:10}}>camera</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
            </View>

          )
  
 
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width:400,
    height:400,
    resizeMode:'contain'
  }
});
