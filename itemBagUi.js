import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
	return (
			<View style={styles.container}>
				<View style={styles.name}>
					<Text style={styles.logo}>Textured Cotton Skort</Text>
				</View>

				<View style={styles.itemBox}>
					<Image
						style={styles.itemImg}
						source={{
							uri: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg'
						}}
					/>
					<View style={styles.itemDetail}>
						<Text style={styles.itemText}>Tshirt blackwinter</Text>
						<Text style={styles.itemText}>$20.05</Text>
					</View>
				</View>
				
				<View style={styles.color}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{fontSize: 20, fontWeight: 'normal'}}>Color: </Text>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>CAMEL</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<View style={{
							alignItems: 'center', marginTop: 10, borderWidth: 3, borderColor: '#000',
							backgroundColor: '#efa383', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center'
						}}>
						<View style={{ backgroundColor: '#efa383', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
						</View>

						<View style={{
							alignItems: 'center', marginTop: 10, marginLeft: 10,
							backgroundColor: '#c1d3d3', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
						}}>
						</View>
					</View>
				</View>

				<View style={styles.footer}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{fontSize: 20, fontWeight: 'normal'}}>Size: </Text>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>XS</Text>
					</View>
					<View style={[styles.btn, {flexDirection: 'column'}]}>
						<View style={[styles.btn1, {flexDirection: 'row'}]}>
							<TouchableOpacity style={[styles.btnSize, {borderColor:'#fae400', borderWidth: 2}]}>
								<Text style={styles.sizeText}>XS</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btnSize}>
								<Text style={styles.sizeText}>S</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btnSize}>
								<Text style={styles.sizeText}>M</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btnSize}>
								<Text style={styles.sizeText}>L</Text>
							</TouchableOpacity>
						</View>
						
						<View style={styles.btn2}>
							<TouchableOpacity style={styles.cartBtn}>
          						<Text style={styles.cartText}>Add To Cart</Text>
        					</TouchableOpacity>
						</View>
					</View>
				</View>

			</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
	},
	name: {
		height: 36,
		alignItems: 'center', 
		justifyContent: 'center',
	},
	logo: {
		fontSize: 20,
		fontWeight: 'normal',
	},
	itemBox: {
		height: 320,
		borderBottomWidth: 0.5,
	},
	itemImg: {
		height: 200,
		width: '100%',
	},
	itemDetail: {
		top: 34,
		left: 18,
	},
	itemText: {
		fontSize: 25,
		fontWeight: 'normal',
	},
	color: {
		top: 20,
		left: 18
	},
	footer: {
		top: 30,
		left: 18,
	},
	btn1: {
		top: 10,
		right: 18,
		justifyContent: 'space-around',
	},
	btnSize: {
		borderWidth: 1,
		width: 90,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sizeText: {
		fontSize: 20,
	},
	btn2: {
		top: 22,
	},
	cartBtn: {
		width: '90%',
		backgroundColor: '#f6e54c',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cartText: {
		fontSize: 20,
	},
});