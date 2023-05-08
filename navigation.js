import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Header from './src/component/header';
import Main from './src/page/main';

export default Navigation = () =>{
  const Dark = {
    dark: false,
    colors: {
      background: 'white',
    },
  };
  const White = {
    dark: false,
    colors: {
      background: '#000',
    },
  }
  const [darlMood,setDarkMood] = useState(false)
    const Stack = createStackNavigator();
    return <NavigationContainer theme={!darlMood?Dark:White}>
         <Stack.Navigator initialRouteName={"Main"}>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                      header: ({navigation}) => (
                        <Header />
                      ),
                    }
                }
            />
         </Stack.Navigator>
    </NavigationContainer>
}