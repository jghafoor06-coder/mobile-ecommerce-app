import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Animated, {
  FadeInDown,
  Easing,
  FadeIn,
  FadeInUp,
  FadeInLeft,
} from 'react-native-reanimated';
import React from 'react';

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Animated.Text
              style={styles.maintext}
              entering={FadeInUp.delay(100).duration(800).easing(Easing.ease)}
            >
              Welcome back
            </Animated.Text>
            <Animated.Text
              style={styles.subtext}
              entering={FadeInUp.delay(200).duration(800).easing(Easing.ease)}
            >
              Please enter your details to sign in to your account
            </Animated.Text>

            {/*Social Login Buttons */}

            <Animated.View
              style={styles.buttoncontainer}
              entering={FadeInLeft.delay(300).duration(800).easing(Easing.ease)}
            >
              <TouchableOpacity style={styles.googlebutton} activeOpacity={0.7}>
                <Text style={styles.googlebuttontext}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.facebookbutton}
                activeOpacity={0.7}
              >
                <Text style={styles.facebookbuttontext}>Facebook</Text>
              </TouchableOpacity>
            </Animated.View>

            {/*or continue with border*/}

            <Animated.View
              style={styles.orcontainer}
              entering={FadeIn.delay(300).duration(1000).easing(Easing.ease)}
            >
              <View style={styles.line} />
              <Text style={styles.text}>or continue with</Text>
              <View style={styles.line} />
            </Animated.View>

            {/*Login inputs and button*/}

            <Animated.View
              entering={FadeInUp.delay(400).duration(800).easing(Easing.ease)}
            >
              {/*Email input*/}
              <Text
                style={{
                  marginBottom: 5,
                  marginHorizontal: 4,
                  fontWeight: '500',
                  color: '#585858',
                }}
              >
                Email Address
              </Text>

              <TextInput
                placeholder="name@gmail.com"
                keyboardType="email-address"
                style={styles.input}
                placeholderTextColor="#a3a2a0"
              />

              <Text
                style={{
                  marginBottom: 5,
                  marginHorizontal: 4,
                  fontWeight: '500',
                  color: '#585858',
                }}
              >
                password
              </Text>
              <TextInput
                placeholder="........"
                keyboardType="default"
                style={styles.input}
                placeholderTextColor="#a3a2a0"
                secureTextEntry={true}
              />
            </Animated.View>

            <Animated.View entering={FadeInUp.delay(500).duration(800).easing(Easing.ease)}>
              <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
                <Text style={styles.buttontext}>LogIn</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={styles.linkcontainer}
              entering={FadeInUp.delay(500).duration(800).easing(Easing.ease)}
            >
              <Text style={styles.linktext}>Don't have an account? </Text>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('authstack', {
                    screen: 'signup',
                  })
                }
              >
                <Text style={styles.signupText}>Create an account</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  innerContainer: {
    width: '100%',
    maxWidth: 320,
  },

  maintext: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: '500',
  },

  subtext: {
    color: '#a3a2a0',
    fontSize: 16,
    marginBottom: 25,
  },

  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

  googlebutton: {
    width: '50%',
    borderRadius: 8,
    padding: 13,
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#c0bebe',
  },

  googlebuttontext: {
    fontSize: 14,
    color: '#585858',
    fontWeight: '500',
  },

  facebookbutton: {
    width: '50%',
    borderRadius: 8,
    padding: 13,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#1877f2',
  },

  facebookbuttontext: {
    color: 'white',
    fontWeight: '500',
  },

  input: {
    color: 'black',
    paddingHorizontal: 12,
    borderColor: '#d9d8d7',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
  },

  loginbutton: {
    backgroundColor: 'rgba(29, 187, 139, 0.8)',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttontext: {
    color: 'white',
    fontWeight: '500',
  },

  linkcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  linktext: {
    color: '#a3a2a0',
    fontSize: 13,
  },

  signupText: {
    color: '#76C893',
    fontSize: 13,
    fontWeight: '600',
  },

  //or continue with border styles

  orcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
});
