import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../app/screens/WelcomeScreen";
import Login from "../app/screens/Login";
import Register from "../app/screens/Register";
import Dashboard from "../app/screens/Dashboard";
import { connect } from "react-redux";
// import store from "./ducks/store";

const Stack = createStackNavigator();

function Navigation(props) {
	console.log(props.user.user);
	return (
		<NavigationContainer>
			{props.user.user.loggedIn ? (
				<Stack.Navigator>
					<Stack.Screen name="Dashboard" component={Dashboard} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Navigation);
