import { StatusBar } from 'expo-status-bar';
import {  Text, View,StyleSheet,ImageBackground, ScrollView } from 'react-native';

const image = {uri: 'https://img.freepik.com/vecteurs-libre/pile-design-plat-dessine-main-illustration-livres_23-2149341898.jpg?w=2000&t=st=1681744903~exp=1681745503~hmac=01af47d77e6a219f06e8b2ba0e9c79b272430dc1b923d1c4931871281bb29800'};


export default function App() {
  return (
   //{}  #F0E9E0 #A16630
 <View style={styles.container}>

 <View style={styles.container2}>
<StatusBar Style="dark" />  
        <ScrollView style={{height:'60%',backgroundColor:'#F0E9E0',borderBottomRightRadius:'60%',
borderBottomLeftRadius:'70%',} } >
          
        </ScrollView>
        <ScrollView style={{height:'40%',backgroundColor:'black',color:'white'}} horizontal={true} >
  
        </ScrollView>
  </View> 

<View ><Text style={styles.text}>bottom</Text></View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex:1,
    backgroundColor:'#A16630'
  },

container2:{
height:"90%",
flexDirection:'column',
borderBottomRightRadius:'70%',
borderBottomLeftRadius:'70%',

backgroundColor:'white'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    Opacity:0.4
  },
  text: {
    color: 'white',
    fontSize: 32,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
 
  },
});


