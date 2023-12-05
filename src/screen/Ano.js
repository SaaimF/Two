// import React from 'react'
// import {View,TouchableOpacity,Text} from 'react-native'

// const Ano=()=>{
//     return(
// <View>
//     <TouchableOpacity><Text>Press me</Text></TouchableOpacity>
// </View>
//     )
// }

// export default Ano;


import React, { useRef } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity, StyleSheet } from 'react-native';

const Ano = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const navigationView = (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerItem} onPress={closeDrawer}>Drawer Item 1</Text>
      <Text style={styles.drawerItem} onPress={closeDrawer}>Drawer Item 2</Text>
      <Text style={styles.drawerItem} onPress={closeDrawer}>Drawer Item 3</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        {/* Your main content goes here */}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Ano;
