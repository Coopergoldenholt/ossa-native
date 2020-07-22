import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Alert,
	TouchableOpacity,
	TextInput,
	Picker,
} from "react-native";
import axios from "axios";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const handleRegister = () => {
		axios
			.post("http://localhost:4653/api/register", {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
			})
			.then((res) => {
				if (res.data === "Invalid Email") {
					return Alert.alert("Please Enter a Valid Email");
				} else {
					return Alert.alert("Thank You For Signing Up");
				}
			})
			.catch((err) => Alert.alert("Email is in Use"));
	};

	return (
		<View style={styles.background}>
			<TextInput
				placeholder="E-mail"
				style={styles.input}
				placeholderTextColor="black"
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				placeholder="Password"
				style={styles.input}
				placeholderTextColor="black"
				onChangeText={(password) => setPassword(password)}
			/>
			<TextInput
				placeholder="First Name"
				style={styles.input}
				placeholderTextColor="black"
				onChangeText={(firstName) => setFirstName(firstName)}
			/>
			<TextInput
				placeholder="Last Name"
				style={styles.input}
				placeholderTextColor="black"
				onChangeText={(lastName) => setLastName(lastName)}
			/>

			{/* <Image source={{"https://static.thenounproject.com/png/1081856-200.png"}} /> */}

			<TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
				<Text>Register</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: "white",
		// height: 400,
		width: "100%",
		paddingTop: 20,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	button: {
		width: "50%",
		marginTop: 10,
		paddingTop: 10,
		backgroundColor: "#d6b512",
		borderRadius: 5,
		alignItems: "center",
		padding: 10,
		color: "white",
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 10,
	},
	text: {
		color: "white",
		fontSize: 40,
	},
});
