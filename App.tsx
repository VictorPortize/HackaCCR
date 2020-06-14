import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ThemeProvider } from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { theme } from './src/theme/index'
import { Container, Button, Title } from './src/components/tabs'

import Initial from './src/pages/Initial'
import Login from './src/pages/Login'
import Main from './src/pages/Main'
import Perfil from './src/pages/Perfil'
import Stops from './src/pages/Stops'

const Stack = createStackNavigator()

const Tabs = createBottomTabNavigator()

const Bottom = () => {
  function BottomTabs({ state, descriptors, navigation, icon }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    
    const chooseName = ( name ) => {
      if(name == "Perfil"){
        return {
          icon : 'user',
          title : name
        }
      }
      if(name == "Main"){
        return {
          icon : 'route',
          title : 'Rotas'
        }
      }
      if(name == "Stops"){
        return {
          icon : 'store-alt',
          title : 'Pontos de Parada'
        }
      }
    }

    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
    return (
      <Container>
        {state.routes.map((route : string, index : number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          
          const data = chooseName(label)
  
          return (
            <Button
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Icon size={24} solid color={ isFocused ? '#054866' : 'black' } name={data?.icon} />
              <Title focused={isFocused}>{data?.title}</Title>
            </Button>
          );
        })}
      </Container>
    );
  }
  return (
    <Tabs.Navigator initialRouteName={'Main'} tabBar={props => <BottomTabs {...props}/>} >
      <Tabs.Screen name='Perfil' component={Perfil} />
      <Tabs.Screen name='Main' component={Main} />
      <Tabs.Screen name='Stops' component={Stops} />
    </Tabs.Navigator>
  )
}


const App = () => {
  
  return(
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown : false }} >
          <Stack.Screen name='initial' component={Initial} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='home' component={Bottom} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App