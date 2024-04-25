import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RegisterForm from "../components/RegisterForm";
import styles from "./style"; 
import Icon from 'react-native-vector-icons/FontAwesome'

const HomePage = () => {
  return (
    <>
        <View style={styles.main}>
              <View style={styles.header}>
                  <View style={styles.leftContainer}>
                      <TouchableOpacity>
                        <Icon name={"long-arrow-left"} size= {30} color={"#45474B"} />
                      </TouchableOpacity>
                    <Text style={styles.leftText}>New Outlet</Text>
                  </View>
                  <View style={styles.rightContainer}>
                    <View style={styles.userLogo}>
                      <Image source={require('../assets/user_logo.png')} style={styles.userLogoImage}/>
                    </View>
                  </View>
              </View>
              <View style={styles.formView}>
                <RegisterForm/>
              </View>
        </View>
    </>
  )
};

export default HomePage;


