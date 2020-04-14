import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import  {Video}  from './app/views/Video.js';


const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
},
{
  initialRouteName: 'HomeRT'
}
);

const AppContainer = createAppContainer(MyRoutes);

export default function App() {
  return (
    <AppContainer />
  );
}

