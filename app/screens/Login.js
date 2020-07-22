import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Alert,
	TouchableOpacity,
	TextInput,
} from "react-native";
import axios from "axios";
import { connect } from "react-redux";
import { saveSession } from "../../ducks/reducers/userReducer";

function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		axios
			.post("http://localhost:4653/api/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				return alertButton(
					res.data.name,
					res.data.email,
					res.data.id,
					res.data.loggedIn,
					res.data.customerId,
					res.data.subscribed
				);
			})
			.catch((err) => alertButton());
	};

	const alertButton = (name, email, id, loggedIn, customerId, subscribed) =>
		Alert.alert(
			"Logged In",
			"My Alert Msg",
			[
				// {
				// 	text: "Ask me later",
				// 	onPress: () => console.log("Ask me later pressed"),
				// },
				// {
				// 	text: "Cancel",
				// 	onPress: () => console.log("Cancel Pressed"),
				// 	style: "cancel",
				// },
				{
					text: "OK",
					onPress: () =>
						props.saveSession(
							name,
							email,
							id,
							loggedIn,
							customerId,
							subscribed
						),
				},
			],
			{ cancelable: false }
		);

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
			{/* <Image source={{"https://static.thenounproject.com/png/1081856-200.png"}} /> */}

			<TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
				<Text>Login</Text>
			</TouchableOpacity>
		</View>
	);
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps, { saveSession })(Login);

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
