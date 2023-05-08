import { useState } from 'react'
import {SafeAreaView} from 'react-native'
import Svgs from '../../svg'
export default Header = () =>{
    const [darlMood,setDarkMood] = useState(true)
    return <SafeAreaView style = {{height:80,justifyContent:'center',paddingHorizontal:30}}>
        <Svgs color = {darlMood?'white':"#1C1C1C"} title={'menu'} />
    </SafeAreaView>
}