import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const StoriesScreen = props => {
  return (
    // <ScrollView>
      <View style = {{backgroundColor: 'white', height: '120%', padding: 20}} >
        <View style={styles.myStoryContainer}>
          <View style = {{width: 60, height: 90, borderColor: '#888', borderWidth: 1}}>
            <Ionicons name = "md-add" size = {30} color = "#888" style = {{left: 20, top: 28}} />
          </View>
          <View style = {{marginLeft: 15, justifyContent: 'center'}} >
            <Text style = {{fontWeight: 'bold', fontSize: 19, bottom: 10}} >My Story</Text>
            <Text>Add to my story</Text>
          </View>
        </View>
        <View style = {styles.recentStoriesContainer} >
          <Text style = {{color: '#888'}} >RECENT STORIES</Text>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
            <View style = {{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} >
              <View style = {styles.displayPictureContainer} >
                <Image style = {{height: 26, width: 26}} 
                  source = {{uri: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/55963097_10211598445711414_2969751851169218560_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Q63WwABlSGEAX-rJgAH&_nc_ht=scontent.fdel21-1.fna&oh=b9063fa4e3789dc9130d2c24cf1ea85a&oe=5ED57599'}} />
              </View>
              <Text style = {{fontWeight: 'bold', fontSize: 18}} >Dhawal Gupta</Text>
            </View>
            <View style = {{flexDirection: 'row'}} >
              <Text style = {{color: '#888', fontSize: 11}} >23m ago   |   5 of 12</Text>
            </View>
          </View>
          <View style = {styles.imageContainer} >
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://miro.medium.com/max/15904/0*0v3IvNZT5toH7XbP'}} />
                <Ionicons name = "ios-videocam" size = {21} color = "white" style = {{bottom: 20, left: 5}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://eurama.hu/wp-content/uploads/2017/02/5825413134_ba0b2179e5_b.jpg'}} />
                <MaterialIcons name = "photo-camera" size = {17} color = "white" style = {{bottom: 20, left: 3}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2018/01/canadians-travelling-to-india-tips.jpg'}} />
                <MaterialIcons name = "photo-camera" size = {17} color = "white" style = {{bottom: 20, left: 3}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://lp-cms-production.imgix.net/features/2019/05/Solo-Travel-in-Nature-acbfea52bfaf.jpg?format=auto'}} />
                <Ionicons name = "ios-videocam" size = {21} color = "white" style = {{bottom: 20, left: 5}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://static.toiimg.com/photo/msid-72143641,width-96,height-65.cms'}} />
                <Ionicons name = "ios-videocam" size = {21} color = "white" style = {{bottom: 20, left: 5}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://www.creativeboom.com/uploads/articles/d9/d979d8968783bed4da46709598a812405679688e_1100.jpg'}} />
                <MaterialIcons name = "photo-camera" size = {17} color = "white" style = {{bottom: 20, left: 4}} />
              </View>
            </View>
        </View>
        <View style = {styles.viewedStoriesContainer} >
          <Text style = {{color: '#888'}} >VIEWED STORIES</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
              <View style = {{flexDirection: 'row', alignItems: 'center', marginVertical: 10}} >
                <View style = {styles.displayPictureContainer} >
                  <Image style = {{height: 26, width: 26}} 
                    source = {{uri: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/68717069_2375289449225765_1772686217427550208_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=_qkfmzT_PiYAX_5z-X5&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=cc252d430d12577c7a1363d1e554a425&oe=5ED2C4C8'}} />
                </View>
                <Text style = {{fontWeight: 'bold', fontSize: 18}} >Anant Sai Asthana</Text>
              </View>
              <View style = {{flexDirection: 'row'}} >
                <Text style = {{color: '#888', fontSize: 11}} >2h ago   |   2</Text>
              </View>
            </View>
            <View style = {styles.imageContainer} >
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://miro.medium.com/max/3200/1*r9mAgzhCu44NY-WF5RUOyg.png'}} />
                <MaterialIcons name = "photo-camera" size = {17} color = "white" style = {{bottom: 20, left: 4}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://www.abc.net.au/cm/rimage/11097260-16x9-xlarge.jpg?v=3'}} />
                <MaterialIcons name = "photo-camera" size = {17} color = "white" style = {{bottom: 20, left: 4}} />
              </View>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
              <View style = {{flexDirection: 'row', alignItems: 'center', marginBottom: 10}} >
                <View style = {styles.displayPictureContainer} >
                  <Image style = {{height: 26, width: 26}} 
                    source = {{uri: 'https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/22256540_1112780955525046_4043381893812438520_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=AjmSnbXeXtEAX9gG44l&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=ac1d09bbe5ff0bcda579283e719b97f3&oe=5ED56D20'}} />
                </View>
                <Text style = {{fontWeight: 'bold', fontSize: 18}} >Aarushi Baghel</Text>
              </View>
              <View style = {{flexDirection: 'row'}} >
                <Text style = {{color: '#888', fontSize: 11}} >15h ago   |   2</Text>
              </View>
            </View>
            <View style = {styles.imageContainer} >
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'data:image/jpeg;base64,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'}} />
                <Ionicons name = "ios-videocam" size = {21} color = "white" style = {{bottom: 20, left: 5}} />
              </View>
              <View style = {styles.storyImage} >
                <Image style = {{height: 100, width: 60}}
                  source = {{uri: 'https://miro.medium.com/max/3840/1*BchBq5jkzBFZKfH5SrQGTQ.jpeg'}} />
                <Ionicons name = "ios-videocam" size = {21} color = "white" style = {{bottom: 20, left: 5}} />
              </View>
            </View>
        </View>
      </View>
    // </ScrollView>
  )
}

StoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Stories",
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerLeft: () => {
      return <Text style = {{color: 'white',fontSize: 20, marginLeft: 10}} >Privacy</Text>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myStoryContainer: {
    flexDirection: 'row'
  },
  recentStoriesContainer: {
    marginTop: 20
  },
  imageContainer: {
    flexDirection: 'row'
  },
  displayPictureContainer: {
    marginRight: 5,
    borderRadius: 14,
    overflow: 'hidden'
  },
  storyImage: {
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10
  }
});

export default StoriesScreen;