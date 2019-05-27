import React from "react";
import { Button, TextInput, View,StyleSheet } from "react-native";
import { compose } from "recompose";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";
// import Switch from "./Switch";

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';


const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("please! email?")
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, "pretty sure this will be hacked")
});


export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title:'SignIn'
  }
  
  render() {
    const {navigate}= this.props.navigation;
    return (
      <Formik
      onSubmit={values => navigate('Home', values)}
      validationSchema={validationSchema}
      render={props => {
        return (
          <Form style={styles.container} >
            <View>
            <MyInput label="Email" name="email" type="email" />
            <MyInput label="Password" name="password" type="password" />
            <MyInput label="First Name" name="firstName" type="name" />
            <MyInput label="Last Name" name="lastName" type="name" />
            </View>
            {/* <Switch label="Accept terms and conditions" name="termsAndConditionsAccepted" /> */}
            <View><Button style={{ padding:60 }} onPress={props.handleSubmit} title="SUBMIT" /></View>
          </Form>
        );
      }}
    />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical:35,
    paddingHorizontal:20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
