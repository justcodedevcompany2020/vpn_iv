import {useState,useEffect} from 'react'
import CustomSwitch from 'react-native-custom-switch-new';
import {  Text, View, TouchableOpacity } from "react-native"
import RNSimpleOpenvpn, { addVpnStateListener, removeVpnStateListener } from 'react-native-simple-openvpn';
import { StyleSheet } from "react-native";
import Svg from '../../../svg';

export default Main = () =>{
    const [darlMood,setDarkMood] = useState(false)
    const [active,Setactive] = useState(false)
    return <View style = {styles.main}>
        <View style = {styles.timerView}>
            <View style = {{marginVertical:30}}>
                {!active && darlMood &&
                    <Text style = {styles.stopDark}>Отключено</Text>
                }
                {active && darlMood &&
                    <Text style = {styles.startDark}>Подключено</Text>
                }
                {active && !darlMood &&
                    <Text style = {styles.startLight}>Подключено</Text>
                }
                {!active && !darlMood &&
                    <Text style = {styles.stopLight}>Отключено</Text>
                }
                {active && !darlMood &&
                    <Text style = {styles.startTimer}>00:00:00</Text>
                }
                {!active && !darlMood &&
                    <Text style = {styles.stopTimer}>00:00:00</Text>
                }
                {!active && darlMood &&
                    <Text style = {styles.Darktimer}>00:00:00</Text>
                }
                {active && darlMood &&
                    <Text style = {styles.DarktimerStart}>00:00:00</Text>
                }
                {/* {darlMood?
                    <Text style = {active?styles.timer:styles.Darktimer}>00:00:00</Text>:
                    <Text style = {active?styles.timer:styles.startTime}>00:00:00</Text>
                } */}
            </View>
            <CustomSwitch
                onSwitch={() => Setactive(true)}
                onSwitchReverse = {()=>Setactive(false)}
                buttonWidth={76}
                switchWidth={170}
                buttonColor={'#333333'}
                switchBackgroundColor={darlMood?"#1C1C1C":'#E5E5E5'}
                onSwitchBackgroundColor={'#34C759'}
                buttonPadding={10}
            />
        </View>
        <View style = {{position:'absolute',bottom:40,}}>
            <TouchableOpacity style = {[styles.button,!darlMood?{backgroundColor:'#1C1C1C'}:{backgroundColor:'#FFFFFF'}]}>
                <Svg title={'wallet'} color = {!darlMood?'white':"#1C1C1C"} />
                <Text style ={[{paddingHorizontal:10,fontSize:17,fontWeight:400},darlMood?{color:'#1C1C1C'}:{color:'#FFFFFF'}]}>Оплатить подписку</Text>
            </TouchableOpacity>
            <Text style = {[{textAlign:'center',marginTop:20,fontSize:14,fontWeight:400},!darlMood?{color:'#1C1C1C'}:{color:'#FFFFFF'}]}>7 дней до истечения подписки</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    main:{
        height:'100%',
        alignItems:"center",
        // justifyContent:"space-between"
    },
    startDark:{
        color:'#FFFFFF',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'
    },
    stopLight:{
        color:'#C3C3C3',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'
    },
    startLight:{
        color:'#1C1C1C',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'
    },
    stopTimer:{
        fontWeight:700,
        color:'#BFBFBF',
        fontSize:32,
        textAlign:'center'
    },
    startTimer:{
        fontWeight:700,
        color:'#1C1C1C',
        fontSize:32,
        textAlign:'center'
    },
    stopDark:{
        color:'#535353',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'
    },
    stop:{
        color:'#C3C3C3',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'
    },
    timerView:{
        height:'65%',
        alignItems:'center',
        justifyContent:'center',
    },
    timer:{
        fontWeight:700,
        color:'#BFBFBF',
        fontSize:32,
        textAlign:'center'
    },
    Darktimer:{
        fontWeight:700,
        color:'#434343',
        fontSize:32,
        textAlign:'center'
    },
    DarktimerStart:{
        fontWeight:700,
        color:'#FFFFFF',
        fontSize:32,
        textAlign:'center'
    },
    switch:{
        transform: [{ scaleX: 10 }, { scaleY: 7 }],
    },
    button:{
        borderRadius:50,
        paddingVertical:20,
        paddingHorizontal:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    start:{
        color:'#1C1C1C',
        fontWeight:500,
        fontSize:15,
        textAlign:'center'

    },
    startTime:{
        color:'#1C1C1C',
        fontWeight:700,
        fontSize:32,
        textAlign:'center'
    }
})