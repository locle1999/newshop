import React, { Component } from 'react'
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class FromLogin extends Component {
    state = {
        username: "",
        os: "",
        deviceid: "",
        password: ""
    }
    render() {
        return (
            <>

                <ImageBackground
                    style={[styles.backgroud]}
                    source={require("../public/background.png")}
                >
                    <Image style={[styles.logo]} source={require("../public/logo.png")} />
                    <Text style={[styles.text1]}>Vui lòng nhập số điện thoại</Text>
                    {/* <TextInput
                        style={[styles.textInput1]}
                        placeholder="Nhập số điện thoại "
                        onChangeText={(username) => { this.setState({ username }) }}
                        value={this.state.username}
                    /> */}
                    <Text style={[styles.textInput1]}> Số điện thoại</Text>
                    <View style={[styles.line1]}></View>
                    <Text style={[styles.textInput2]}> Mật khẩu</Text>
                    <View style={[styles.line2]}></View>
                    <TouchableOpacity>
                        <View style={[styles.button]}>
                            {/* <Text style={[styles.text2]}> ĐĂNG NHẬP</Text> */}
                        </View>
                        <Text style={[styles.text2]}> ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </ImageBackground>

            </>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backgroud: {
        position: "absolute",
        width: 380,
        height: 737,
        left: 0,
        top: 0,

    },
    logo: {
        width: 190,
        height: 193,
        left: 95,
        top: 93,
        position: "relative"
    },
    text1: {
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto",
        width: 207,
        //height: 7,
        position: "absolute",
        fontStyle: "italic",
        top: 331,
        left: 87,
        lineHeight: 19,
        fontWeight: "normal",
        alignItems: "center",
        textAlign: "center",
        display: "flex"
    },
    textInput1: {
        top: 378,
        left: 116,
        fontWeight: "normal",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#FFFFFF",
        width: 149,
        position: "absolute",
        display: "flex"
    },
    line1: {
        backgroundColor: "white",
        height: 0.5,
        width: 275.65,
        top: 398,
        left: 52,
        borderRadius: 40.5,
        position: "absolute",
    },
    textInput2: {
        top: 419,
        left: 116,
        fontWeight: "normal",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Roboto",
        color: "#FFFFFF",
        width: 149,
        position: "absolute",
        display: "flex"
    },
    line2: {
        backgroundColor: "white",
        height: 0.5,
        width: 275.65,
        top: 439,
        left: 52,
        borderRadius: 40.5,
        position: "absolute",
    },
    text2: {
        color: "white",
        width: 172,
        //height: 8,
        position: "absolute",
        top: 296,
        left: 104,
        lineHeight: 21,
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Roboto",
        fontStyle: "normal",
        textAlign: "center",
        display: "flex",
        alignItems: "center"
    },
    button: {
        position: "absolute",
        width: 280.57,
        height: 40,
        left: 50,
        top: 280,
        borderRadius: 63,
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1


    }
})