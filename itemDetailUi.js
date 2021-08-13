import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  state = {
    num: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Your Bag(1)</Text>
        <View style={[styles.item, {flexDirection: 'row'}]}>
          <Text style={styles.itemName}>Bim Bim Khoai Tay Ostar</Text>
          <Image
            style={styles.itemImg}
            source={require('./assets/img/cart1.png')}
          />
          <View style={styles.itemView}>
            <Text style={styles.itemDetail}>100.000d</Text>
            <Text style={styles.itemDetail}>SKU: 00000001</Text>
            <Text style={styles.itemDetail}>Mo ta: vi tao bien</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputNum}
                placeholder="Qta:1"
                placeholderTextColor="#000"
                onChangeText={number => this.setState({num: number})}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.cart}>Move To Wishlist</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box1} />
        <Text style={styles.ques}>Have a Promo?</Text>
        <View style={styles.box2} />

        <View style={[styles.footer, {flexDirection: 'row'}]}>
          <View style={styles.footer1}>
            <Text style={styles.footerDetail}>Subtotal</Text>
            <Text style={styles.footerDetail}>Delivery</Text>
            <Text style={styles.footerDetail}>Sales Text</Text>
          </View>
          <View style={styles.footer2}>
            <Text style={styles.footerDetail}>100.000d</Text>
            <Text style={styles.footerDetail}>-</Text>
            <Text style={styles.footerDetail}>-</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.checkText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
    marginTop: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemName: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
    marginBottom: 300,
    left: 130,
  },
  itemImg: {
    width: 100,
    height: 150,
    right: 70,
    marginBottom: 100,
  },
  itemView: {
    marginBottom: 80,
    right: 10,
  },
  itemDetail: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
  },
  inputView: {
    alignItems: 'center',
    marginTop: 20,
  },
  inputNum: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
  },
  cart: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
    right: 340,
    top: 70,
  },
  box1: {
    width: '110%',
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderRadius: 25,
    borderColor: '#000',
    bottom: 80,
  },
  ques: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
    right: 130,
    bottom: 60,
  },
  box2: {
    width: '110%',
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderRadius: 25,
    borderColor: '#000',
    bottom: 40,
  },
  footer: {
    bottom: 0,
  },
  footer1: {
    left: -30,
  },
  footer2: {
    right: -30,
  },
  footerDetail: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
  },
  checkBtn: {
    width: '90%',
    backgroundColor: '#f6e54c',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  checkText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});