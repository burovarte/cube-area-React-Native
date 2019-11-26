import React, { Component } from "react";

import { StyleSheet, View, Button, Text, TextInput } from "react-native";

export default class MyProject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ploshad: "",
			dlina: "",
			shirina: "",
			vysota: ""
		};
	}

	PploshadKuba = () => {
		var Ploshadkuba =
			parseInt(this.state.dlina) *
			parseInt(this.state.shirina) *
			parseInt(this.state.vysota);

		this.setState({
			ploshad: Ploshadkuba
		});
	};

	render() {
		return (
			<View style={styles.MainContainer}>
				<Text style={{ fontSize: 20 }}> Площадь куба</Text>
				<TextInput
					style={{
						height: 40,
						width: "100%",
						borderColor: "gray",
						borderWidth: 4,
						margin: 10
					}}
					placeholder="Длина"
					onChangeText={(dlina) => this.setState({ dlina })}
				/>
				<TextInput
					style={{
						height: 40,
						width: "100%",
						borderColor: "gray",
						borderWidth: 4,
						margin: 10
					}}
					placeholder="Ширина"
					onChangeText={(shirina) => this.setState({ shirina })}
				/>
				<TextInput
					style={{
						height: 40,
						width: "100%",
						borderColor: "gray",
						borderWidth: 4,
						margin: 10
					}}
					placeholder="Высота"
					onChangeText={(vysota) => this.setState({ vysota })}
				/>

				<Button title="давай, посчитаем площадь" onPress={this.PploshadKuba} />

				<Text style={{ marginBottom: 10, fontSize: 20 }}>
					Объем: {this.state.ploshad}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});
