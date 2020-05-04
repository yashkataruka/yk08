import React from 'react';
import { Platform, Text, View, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import ChatsScreen from '../Screens/ChatsScreen';
import GroupsScreen from '../Screens/GroupsScreen';
import CallsScreen from '../Screens/CallsScreen';
import ActiveScreen from '../Screens/ActiveScreen';
import StoriesScreen from '../Screens/StoriesScreen';
import PeopleScreen from '../Screens/PeopleScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ChatDetailScreen from '../Screens/ChatDetailScreen';
import CameraScreen from '../Screens/CameraScreen';
import Colors from '../constants/Colors';

const homeScreenConfig = {
    Chats: {
        screen: ChatsScreen
    },
    Groups: {
        screen: GroupsScreen
    },
    Calls: {
        screen: CallsScreen
    },
    Active: {
        screen: ActiveScreen
    }
}

const HomeScreenNavigator = createMaterialTopTabNavigator(homeScreenConfig, {
    tabBarOptions: {
        upperCaseLabel: false,
        indicatorStyle: {
            backgroundColor: 'white',
        },
        labelStyle: {
            fontWeight: 'bold',
            fontSize: 18
        },
        style: {
            backgroundColor: Colors.primary
        }
    }
})

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeScreenNavigator,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },
            headerTitle: 'Home',
            headerTitleAlign: 'center',
            headerLeft: () => {
                return (
                  <Text style = {{color: 'white',fontSize: 20, marginLeft: 10}} >Edit</Text>
                )
            },
            headerRight: (navigation) => {
                return (
                    <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                        <Item title = "Menu" iconName = "md-add" onPress = {() => {
                            console.log(navigation)
                        }} />
                    </HeaderButtons>
                )
            }
        }
    },
    ChatDetails: {
        screen: ChatDetailScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },
            headerTitle: 'Chat Detail Screen',
            headerTitleAlign: 'center'
        }
    }
})

const StoriesNavigator = createStackNavigator({
    Stories: {
        screen: StoriesScreen
    }
})

const CameraNavigator = createStackNavigator({
    Camera: {
        screen: CameraScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },
            headerTitle: 'People',
            headerTitleAlign: 'center'
        }
    }
})

const PeopleNavigator = createStackNavigator({
    Stories: {
        screen: PeopleScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },
            headerTitle: 'People',
            headerTitleAlign: 'center'
        }
    }
})

const SettingsNavigator = createStackNavigator({
    Stories: {
        screen: SettingsScreen,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },
            headerTitle: 'Settings',
            headerTitleAlign: 'center'
        }
    }
})

const tabScreenConfig = {
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-chatbubbles' size = {35} color = {tabInfo.tintColor} style = {{bottom: 5}} />
            },
            tabBarColor: 'white',
            tabBarLabel: 'Home'
        }
    },
    Stories: {
        screen: StoriesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <View style = {{justifyContent: 'center', alignItems: 'center'}} >
                        {!tabInfo.focused ? 
                        <View>
                            <Ionicons name = 'md-heart-empty' size = {35} color = {tabInfo.tintColor} style = {{bottom: 1}} />
                            <Image style = {styles.story} />
                        </View>
                        :
                        <Ionicons name = "md-heart" size = {35} color = {Colors.primary} style = {{bottom: 4}} />
                        }
                    </View>
                )
            },
            tabBarColor: 'white',
            tabBarLabel: 'Stories'
        }
    },
    Camera: {
        screen: CameraNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <View style = {{justifyContent: 'center', alignItems: 'center'}} >
                        <Image style = {styles.camera}/>
                        <Ionicons name = 'ios-camera' size = {35} color = 'white' style = {{bottom: 43}} />
                    </View>
                )
            },
            tabBarColor: 'white',
            tabBarLabel: 'Camera'
        }
    },
    People: {
        screen: PeopleNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-contact' size = {35} color = {tabInfo.tintColor} style = {{bottom: 5}} />
            },
            tabBarColor: 'white',
            tabBarLabel: 'People'
        }
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-settings' size = {35} color = {tabInfo.tintColor} style = {{bottom: 5}} />
            },
            tabBarColor: 'white',
            tabBarLabel: 'Settings'
        }
    }
}

const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.primary,
            inactiveTintColor: '#8C9CB0',
            labelPosition: "below-icon",
            labelStyle: {
                bottom: 2
            },
            style: {
                borderTopColor: 'transparent'
            }
        }
});

const styles = StyleSheet.create({
    story: {
        backgroundColor: Colors.primary, 
        height: 6, 
        width: 6,
        borderRadius: 3,
        left: 21,
        bottom: 33
      },
      camera: {
          backgroundColor: '#8C9CB0',
          height: 50,
          width: 50,
          borderRadius: 25
      }
})

export default createAppContainer(TabNavigator)