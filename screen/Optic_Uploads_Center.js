import React, { useState,useEffect } from 'react';
import { ImageBackground,Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const Optic_Uploads_Center = () => {

    useEffect(() => {
        checkForCameraRollPermission()
      }, []);
  
  
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);

    const [prescription, Prescription_Number] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    const  checkForCameraRollPermission=async()=>{
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert("Please grant camera roll permissions inside your system's settings");
        }else{
          console.log('Media Permissions are granted')
        }
    }



//method for image1
    const addImage1 = async () => {


        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
          });
    
        
          console.log(JSON.stringify(_image));
    
          if (!_image.cancelled) {

            setImage1(_image.uri);
          }
        }

        //method for image2
        const addImage2 = async () => {


            let _image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,3],
                quality: 1,
              });
        
            
              console.log(JSON.stringify(_image));
        
              if (!_image.cancelled) {
    
                setImage2(_image.uri);
              }
            }



    //method for image3
    const addImage3 = async () => {


        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
          });
    
        
          console.log(JSON.stringify(_image));
    
          if (!_image.cancelled) {

            setImage3(_image.uri);
          }
        }


        //super chnages may be coming soon
        //method for image4
        const addImage4 = async () => {


            let _image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4,3],
                quality: 1,
              });
        
            
              console.log(JSON.stringify(_image));
        
              if (!_image.cancelled) {
    
                setImage4(_image.uri);
              }
            }
        

    //method for image5
    const addImage5 = async () => {


        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
          });
    
        
          console.log(JSON.stringify(_image));
    
          if (!_image.cancelled) {

            setImage5(_image.uri);
          }
        }

    
    //
    const onSubmitHandler = () => {
        const payload = {
            prescription,
            image1,
            image2,
            image3,
            image4,
            image5,
        };
        fetch({API_URL}, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
                setIsError(true);
                setMessage(jsonRes.message);
            } else {
                onLoggedIn(jsonRes.token);
                setIsError(false);
                setMessage(jsonRes.message);
            }
            } catch (err) {
                console.log(err);
             };
        })
            .catch(err => {
             console.log(err);
        });
    };
                    
     const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }


    return (
        <ImageBackground source={require('../public/images/gradient_back.jpg')} style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>Optic Product Upload Center</Text>

                <View style={styles.form}></View>
                    
            </View>


            <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Prescription_Number" autoCapitalize="none" onChangeText={prescription}></TextInput>
                                   
            </View>    

            

             <View style={styles.container}>
                {
                    image1  && <Image source={{ uri: image1 }} style={{ width: 250, height: 250 }} />
                }     

                <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage1} style={styles.uploadBtn} >
                            <Text>{image1 ? 'Change' : 'Upload'} Image 1</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                </View>        

            </View>



            <View style={styles.container1}>
                {
                    image2  && <Image source={{ uri: image2 }} style={{ width: 250, height: 250 }} />
                }     

                <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage2} style={styles.uploadBtn} >
                            <Text>{image2 ? 'Change' : 'Upload'} Image 2</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                </View>        

            </View>

            <View style={styles.container2}>
                {
                    image3  && <Image source={{ uri: image3 }} style={{ width: 250, height: 250 }} />
                }     

                <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage3} style={styles.uploadBtn} >
                            <Text>{image3 ? 'Change' : 'Upload'} Image 3</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                </View>        

            </View>



            <View style={styles.container3}>
                {
                    image4  && <Image source={{ uri: image4 }} style={{ width: 250, height: 250 }} />
                }     

                <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage4} style={styles.uploadBtn} >
                            <Text>{image4 ? 'Change' : 'Upload'} Image 4</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                </View>        

            </View>


            <View style={styles.container4}>
                {
                    image5  && <Image source={{ uri: image5 }} style={{ width: 250, height: 250 }} />
                }     

                <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage5} style={styles.uploadBtn} >
                            <Text>{image5 ? 'Change' : 'Upload'} Image 5</Text>
                            <AntDesign name="camera" size={15} color="black" />
                        </TouchableOpacity>
                </View>        

            </View>

            


            <View>

                <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
                    <Text style={styles.buttonText}>Save Product</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({


    //Style for the background
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },  


    //Style for the heading frame
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '35%',
        marginTop: '3.5%',
        marginRight: '1.5%',
        borderRadius: 10,
        maxHeight: 10,
        paddingBottom: '3.5%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },

    //Style for the heading
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: '1%',
        marginBottom: '6%',
        color: 'lightblue',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '1%',
    },

    //Style for text inputs
    inputs: {
        width: '75%',
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right:0,
        bottom:-330,
        //paddingTop: '10%',
    },  
    input: {
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16, 
        fontWeight: '500',
        minHeight: 40,
    },



    //Style for image upload area 1
    container:{
        elevation:1,
        height:290,
        width:250, 
        backgroundColor:'lightgrey',
        position:'absolute',
        right:1050,
        bottom:260,
        borderRadius:6,
        overflow:'hidden',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },



    //Style for image upload area 2
    container1:{
        elevation:1,
        height:290,
        width:250, 
        backgroundColor:'lightgrey',
        position:'absolute',
        right:795,
        bottom:260,
        borderRadius:6,
        overflow:'hidden',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },


    //Style for image upload area 3
    container2:{
        elevation:1,
        height:290,
        width:250, 
        backgroundColor:'lightgrey',
        position:'absolute',
        right:540,
        bottom:260,
        borderRadius:6,
        overflow:'hidden',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },

    //Style for image upload area 4
    container3:{
        elevation:1,
        height:290,
        width:250, 
        backgroundColor:'lightgrey',
        position:'absolute',
        right:285,
        bottom:260,
        borderRadius:6,
        overflow:'hidden',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },

    //Style for image upload area 4
    container4:{
        elevation:1,
        height:290,
        width:250, 
        backgroundColor:'lightgrey',
        position:'absolute',
        right:30,
        bottom:260,
        borderRadius:6,
        overflow:'hidden',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },

    
    //Style for image upload button from device
    uploadBtnContainer:{
        opacity:1.0,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightblue',
        width:'100%',
        height:'13%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },

    //Style for the upload to the database button
    button: {
        width: '100%',
        backgroundColor: 'lightblue',
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        right:0,
        bottom:-430,
        alignItems: 'center',
        marginVertical: 5,
        margin:10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderTopColor: 'grey',
        //paddingTop: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    
   /* message: {
        fontSize: 16,
        marginVertical: '5%',
    },*/
});

export default Optic_Uploads_Center;