import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from "react-native-linear-gradient";
import { Line } from "react-native-svg";
import ProfileEllipse from '../assets/profileEllipse.svg'
import StartBg from '../assets/StartBg.png'

const Start=()=>{
    return(
        <View style={styles.mainContainer}>
            
            <View style={styles.up}>
                <ProfileEllipse/>
                <Text style={styles.Tex2}>Ordering on Campus made easier than ever</Text>
            </View>
            <View style={styles.down}>
                <TouchableOpacity style={styles.but}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.Tex}>
                    Already have an account? Log in
                </Text>
            </View>
            
        </View>
    )
}

export default Start

const styles=StyleSheet.create({
    mainContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'#5736B5'
    },
    up:{
        width:'100%',
        height:'70%',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
    },
    down:{
        width:"100%",
        height:'30%',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
    },
    but:{
        width:'90%',
        height:38,
        borderRadius:20,
        backgroundColor:'#EEEDFA',
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#020314',
        fontSize:16,
        fontWeight:500
    },
    Tex:{
        fontSize:16,
        fontWeight:500,
        color:'white',
        width:"70%",
        textAlign:'center',
        marginTop:20
    },
    Tex2:{
        fontSize:20,
        fontWeight:500,
        color:'white',
        width:'70%',
        textAlign:'center',
        marginTop:36
    }
})