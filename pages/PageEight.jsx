import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';



const PageEight = () => {

const [selectedTab , setSelectedTab] = useState(0);

  return (
    <View>
      <View style={styles.container}>
          <View >
            <Text style={styles.heading}>What's your goal height?</Text>
          </View>



            <View style={{flex:1,marginTop:'35%' ,marginBottom:15 , justifyContent:'center' , alignContent:'center'}}>
                  <View
                  style={{
                    width:145,
                    height:45,
                    
                    borderRadius:15,
                    flexDirection:'row',
                    alignContent:'center',
                    backgroundColor:'#D3D3D3',
                    paddingLeft:8,
                    paddingRight:8
                  }}>
                    <TouchableOpacity
                    style={{width:'50%',
                     height:'75%',
                     backgroundColor:selectedTab==0 ? 'white':'#D3D3D3',
                    marginTop:5,
                 
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center'

                     }}
                     onPress={()=>{
                      setSelectedTab(0);
                     }}
                     >
                      <Text style={{color:'black' , fontSize:13,fontWeight:'500' }}>FEET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{width:'50%',
                     height:'75%',
                     backgroundColor:selectedTab==1 ? 'white':'#D3D3D3',
                    marginTop:5,
                    marginRight:5,
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center'
                     }}
                     
                     onPress={()=>{
                      setSelectedTab(1);
                     }}

                     >
                      <Text style={{color:'black' , fontSize:13,fontWeight:'500' }}>CM</Text>
                    </TouchableOpacity>
                  </View>
            </View>
            {/* toggle  */}
            {/* <View style={styles.ButtonContainer}>
            <View  >
              <Text style={styles.text1}>FEET</Text>
              </View>
            <View>
              <Text style={styles.text2}>CM</Text>
            </View>
          
            </View> */}

            <View style={styles.OutputCon}>

            <TextInput
              style={styles.text3}
              placeholder=""
              keyboardType="phone-pad"
            />


              {/* <Text style={styles.text3}>176</Text> */}
              <View style={styles.line}></View>
              
              {selectedTab ==0?( <Text style={styles.text4}>FEET</Text>):(  <Text style={styles.text4}>cm</Text>)}

             
            
              
            </View>

            <View style={styles.button}>
            <Text style={styles.buttontext}>Next Step</Text>
            </View>


           


            {/* phone number
          <View style={styles.number}>
            <View style={styles.numberRow}>
                <View  style={styles.numbercol}>
                    
                 <TextInput  style={styles.numberStyle}>1</TextInput>
                </View>
                <View>
                <TextInput style={styles.numberStyle}>2</TextInput>
                <Text>ABC</Text>
                </View>
                <View>
                  <TextInput style={styles.numberStyle}>3</TextInput>
                  <Text>DEF</Text>
            </View>
            </View>
            <View style={styles.numberRow}>
                <View>
                <TextInput  style={styles.numberStyle}>4</TextInput>
                <Text>GHI</Text>
                </View>
                <View>
                <TextInput style={styles.numberStyle}>5</TextInput>
                <Text>JKL</Text>
                </View>
                <View>
                <TextInput style={styles.numberStyle}>6</TextInput>
                <Text>MNO</Text>
                </View>
            </View>
            <View style={styles.numberRow}>
                <View>
                <TextInput  style={styles.numberStyle}>7</TextInput>
                <Text>PQRS</Text>
                </View>
                <View>
                <TextInput  style={styles.numberStyle}>8</TextInput>
                <Text>TUV</Text>
                </View>
                <View>
                <TextInput style={styles.numberStyle}>9</TextInput>
                <Text>WXYZ</Text>
                </View>
            </View>
            <View style={styles.numberRow1}>
                <View  style={styles.numbercol}>
                <Text></Text>
                <Text></Text>
                </View>
                <View>
                <TextInput style={styles.numberStyle}>0</TextInput>
                </View>
                <View>
                    <Text>*</Text>
                </View>
            </View>
          </View> */}
          
    </View>
    </View>
  
  );
};


const styles = StyleSheet.create({

  
//     number:{
// width:'100%',
// height:270,
// marginTop:30,
// borderTopWidth:1,
// borderColor: '#b4b4b4',
// justifyContent:'center',
// alignContent:'center',
//     },
//     numberRow:{
//         flexDirection: 'row',
//         justifyContent:'space-around',
//         borderBottomWidth:1,
//         borderColor: '#b4b4b4',
//         padding:4
//     },
//     numberRow1:{
//       flexDirection: 'row',
//       justifyContent:'space-around',
//       borderColor: '#b4b4b4',
      
//     },
//     numberStyle:{
//       fontSize: 20,
//         // fontWeight: 'bold',
//     },








    // 
    container: {
     
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    heading:{
     
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop:40
      
    },
    ButtonContainer:{
      flexDirection: 'row',
      marginTop:120,
      backgroundColor:'#b4b4b4',
      padding:10,
      borderRadius:8
    },
    text1:{
      marginRight:14,
      marginTop:3,
      marginLeft:8,
      fontSize: 15
      
    },
    text2:{
        marginLeft:14,
        backgroundColor:'white',
        paddingLeft:8,
        paddingRight:8,
        paddingTop:3,
        paddingBottom:3
    },
    OutputCon:{
      marginTop:30,
      flexDirection: 'row',
      height:50,
      width:300,
      borderWidth: 1,
      borderColor: '#b4b4b4',
      borderRadius:4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text3:{
      marginRight:14,
      marginTop:3,
      marginLeft:8,
      fontSize: 20,
      color:'black',
      fontWeight: '500',
    },
    text4:{
      marginRight:14,
      marginTop:3,
      marginLeft:8,
      fontSize: 15,
      color:'black',
    },
    line:{
      width:2,
      height:20,
      backgroundColor:"gray",
      marginTop:3
    },
    button:{
      marginTop:90,
      flexDirection: 'row',
      height:46,
      width:340,
      borderWidth: 1,
      borderColor: '#b4b4b4',
      borderRadius:4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffad2b'
    },
    buttontext:{
      color:'white',
      fontSize: 16,
      fontWeight: 'bold',
      
    }
  });

export default PageEight;