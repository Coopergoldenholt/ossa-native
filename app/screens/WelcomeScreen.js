import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Alert,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/laptopPicture.jpeg")}
			style={styles.background}
		>
			{/* <TextInput placeholder="E-mail" style={styles.input} /> */}
			{/* <Image source={{"https://static.thenounproject.com/png/1081856-200.png"}} /> */}

			<Text style={styles.text}>Ossa</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Login")}
			>
				<Text>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Register")}
			>
				<Text>Register</Text>
			</TouchableOpacity>
		</ImageBackground>
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
