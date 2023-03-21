import React from "react";
import { ScrollView, View, Text, StyleSheet} from "react-native";
import {Shadow} from 'react-native-shadow-2';  
import Profile from './../assets/profile.svg'
import ShopCard from './../components/Shopcard'
import canteen from './../assets/canteen.png'
import FoodCard from './../components/FoodCard'
import Pizza from './../assets/pizza.png'
import Edit from './../assets/edit.svg'
import FoodCard2 from "../components/FoodCard2";
import Omelette from "./../assets/omelette.png"
import Shake from '../assets/shake.png'
import Maggie from '../assets/maggi.png'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/Navbar'
import Header from '../components/header'

const Dash=()=>{
    return (
        <View style={styles.mainContainer}>
        <ScrollView  style={styles.main}>
            <View style={styles.up}>
                <Header text="Hey, Aarya" />
                <SearchBar textInput="Search here for restaurant, food, etc"/>
            </View>
            <View style={styles.down}>
                <View style={styles.choice}>
                    <View style={styles.wrapper2}>
                    <FoodCard heading1="Food" heading2="Order Food from across the campus" image={Pizza} />
                    </View>

                
                    <View style={styles.wrapper2}>
                    <FoodCard heading1="Food" heading2="Order Food from across the campus" image={Pizza} />
                    </View>
                    
                </View>
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Your Favorites
                        </Text>
                        <Edit/>
                </View>
                <View style={styles.food}>
                    <ScrollView horizontal={true} style={styles.food1}>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Bread Omelette" image={Omelette}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Ore Shake" image={Shake}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Maggie" image={Maggie}/>
                    </View>
                    <View style={styles.wrapper3}>
                        <FoodCard2 heading1="Ore Shake" image={Shake}/>
                    </View>
                    </ScrollView>
                </View>

                
                
                <View style={styles.subHead}>
                        <Text style={styles.subHeadTex} >
                            Places Near You
                        </Text>
                        <Text style={styles.LinkText}>
                            See all
                        </Text>
                </View>
                <View style={styles.nearYou}>
                        <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                        <ShopCard img={canteen} line1="Brahma Canteen" dist="200m" line2="Snacks.Cuisines" rating="4.5"/>
                </View>
            </View>
            
        </ScrollView>
        <View style={{position:'absolute', bottom:0, width:'100%', height:68}}>
                <NavBar/>
        </View>
        </View>
    );
}

export default Dash

const styles = StyleSheet.create({
    up:{
        backgroungColor:'#5736B5',
        height:180,
        width:"100%",
        zIndex:2
    },
    shadow:{
        marginBottom:20,
        borderRadius:16,
    },
    down:{
        height:"100%",
        width:"100%",
        borderRadius:16,
        backgroundColor:'#EFEEFA',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:20,
        marginBottom:64
    },
    main:{
        backgroundColor:'#5736B5',
        height:"100%",
        width:"100%",
    },
    mainContainer:{
        width:"100%",
        height:"100%"
    },
    head:{
        marginTop:48,
        marginLeft:24,
        marginRight:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headTex:{
        fontSize:20,
        fontWeight:500,
        color:'white',
    },
    wrapper:{
        height:204,
        width:"90%",
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:16,
    },
    subHeadTex:{
        color:'#6F6F6F',
        fontSize:14,
        fontWeight:500,
    },
    LinkText:{
        color:'#5736B5',
        fontSize:14,
        fontWeight:500,
    },
    subHead:{
        width:"90%",
        height:19,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
    },
    nearYou:{
        width:"100%",
        height:"100%",
        flexDirection:'column',
        alignItems:'center',
    },
    choice:{
        width:"100%",
        height:168,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:25,
    },
    wrapper2:{
        borderRadius:16,
        height:156,
        width:'48%',
        marginBottom:20,
        borderRadius:16,
    },
    food:{
        height:136,
        width:"100%",
        
    },
    wrapper3:{
        borderRadius:16,
        height:110,
        width:110,
        marginRight:10,
        marginLeft:10
    },
})
