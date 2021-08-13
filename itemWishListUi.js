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
    
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Your Wishlist</Text>
        <View style={styles.box} />
        
        <View style={[styles.itemBox, {flexDirection: 'column'}]}>
            <View style={[styles.item, {flexDirection: 'row'}]}>
                <Text style={styles.itemName}>Bim Bim Khoai Tay Ostar</Text>
                <Image
                    style={styles.itemImg}
                    source={require('./assets/img/cart1.png')}
                />
                <View style={styles.itemView}>
                    <Text style={styles.itemDetail}>100.000d</Text>
                    <Text style={styles.itemDetail}>SKU: 00000001</Text>
                    <View style={styles.inputView}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.cart}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.cart}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles.item, {flexDirection: 'row'}]}>
                <Text style={styles.itemName}>Bim Bim Khoai Tay Ostar</Text>
                <Image
                    style={styles.itemImg}
                    source={require('./assets/img/cart1.png')}
                />
                <View style={styles.itemView}>
                    <Text style={styles.itemDetail}>100.000d</Text>
                    <Text style={styles.itemDetail}>SKU: 00000001</Text>
                    <View style={styles.inputView}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.cart}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.cart}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

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
  box: {
    width: '110%',
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderRadius: 25,
    borderColor: '#000',
    top: 10,
  },
  itemBox: {
      flex: 1,
      marginBottom: 50,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  itemName: {
    fontWeight: 'normal',
    fontSize: 25,
    color: '#000',
    marginBottom: 230,
    left: 105,
  },
  itemImg: {
    width: 150,
    height: 200,
    right: 170,
  },
  itemView: {
    marginBottom: -10,
    right: 120,
  },
  itemDetail: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#000',
  },
  inputView: {
    marginTop: 30,
  },
  btn: {
    width: '140%',
    backgroundColor: '#f2f2f2',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    right: 50,
  },
  cart: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#000',
  },
});