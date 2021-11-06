import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation }) => {
    return (
        <LinearGradient 
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 0.0}}
        locations={[0.0, 1.0]}
        colors={['#12c2e9','#bc00dd']} 
        style={styles.container}
        useAngle={true}
        angle={120}
        angleCenter={{x: 0.5, y: 0.5}}
        >
            <Ionicons name="ios-mic-outline" size={80} color="white" style={styles.iconMic}/>
            <Text style={styles.welcome}>WELCOME TO</Text>
            <Text style={styles.music}>MUSIC<Text style={styles.app}>APP</Text></Text>

            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textButton}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.quickLogin}>Or quick login</Text>
            <Text style={styles.quickLogin}>with Touch ID</Text>
            <Ionicons name="ios-finger-print-outline" size={70} color="white" style={styles.iconTouch}/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome:{
        fontSize: 13,
        color: '#212121',
        margin: 0,
        letterSpacing: 3,
        color: '#fff',
        fontWeight: '400',
        justifyContent: 'center'
    },
    music:{
        fontSize: 28,
        color: '#212121',
        margin: 0,
        letterSpacing: 3,
        color: '#fff',
        fontWeight: '800',
        justifyContent: 'center',
    },
    app:{
        fontSize: 28,
        color: '#212121',
        margin: 0,
        letterSpacing: 3,
        color: '#fff',
        fontWeight: '300',
        justifyContent: 'center',
    },
    button1:{
        width: 125,
        height: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 45,
        borderRadius: 30,
    },
    button2:{
        width: 155,
        height: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginBottom: 40,
        borderRadius: 30,
    },
    textButton:{
        fontSize: 15,
        color: '#6c757d'
    },
    quickLogin:{
        fontSize: 14,
        color: '#fff',
    },
    buttonGrad:{
        borderRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconMic:{
        marginTop: -100,
        marginBottom: 20
    },
    iconTouch:{
        marginTop: 30,
        marginBottom: -30
    },
})

export default Home