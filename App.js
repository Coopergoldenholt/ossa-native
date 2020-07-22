import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./ducks/store";
import { Provider } from "react-redux";
import Home from "./app/screens/WelcomeScreen";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import Navigation from "./routes/Navigation";
// import store from "./ducks/store";

const Stack = createStackNavigator();

function App(props) {
	console.log(props.user);
	return (
		<Provider store={store}>
			<Navigation />
			{/* <NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator> */}
			{/* <Stack.Navigator>
					<Stack.Screen name="Dashboard" component={Home} />
				</Stack.Navigator> */}
			{/* </NavigationContainer> */}
		</Provider>
	);
}

export default App;
