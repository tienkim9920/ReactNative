import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ScrollView, Image} from 'react-native';
import avt1 from '../../assets/TopImage3.jpg';
import { round } from 'react-native-reanimated';

const { height } = Dimensions.get('window');
export default class Cart extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      price: 100,
      count: 1,
      result: 300,
    };
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
      result: this.state.result + this.state.price,
    });
  }

  countDown = () => {
    this.setState({
      count: this.state.count - 1,
      result: this.state.result - this.state.price,
    });
  }

  gotoProductDetail = () => {
    this.props.navigation.push('ProductDetail');
  }

  render(){
    const { count, price, result } = this.state;
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Wearing Clothes</Text>
            <TextInput
              style={styles.input}
              placeholder="What do you want to buy?" />
          </View>
          <View style={styles.body}>
            <ScrollView style={styles.main}>
              <View style={styles.groupRow}>
                <Image style={{width: 100, height: 130, marginTop: 4,}} source={avt1}/>
                <View style={styles.groupRight}>
                  <View style={styles.rightRow}>
                    <Text style={{fontSize: 18, color: '#A4A4A4'}}>Đồ Nam Thanh Lịch</Text>
                    <Text style={{fontSize: 18, color: '#A4A4A4', marginLeft: 42}}>X</Text>
                  </View>
                  <Text style={{color: 'red', paddingVertical: 23}}>{price}$</Text>
                  <View style={styles.rightRow}>
                    <View style={styles.rightRowCount}>
                      <TouchableOpacity style={styles.btnCount} onPress={this.countUp}>
                        <Text style={{fontSize: 15, color: '#A4A4A4'}}>+</Text>
                      </TouchableOpacity>
                      <Text style={{paddingHorizontal: 14, fontSize: 15, marginTop: 3}}>{count}</Text>
                      <TouchableOpacity style={styles.btnCount} onPress={this.countDown}>
                        <Text style={{fontSize: 16, color: '#A4A4A4'}}>-</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.gotoProductDetail}>
                      <Text style={{textTransform: "uppercase", color: 'red', fontSize: 15}}>Show Details</Text>
                    </TouchableOpacity>
                    

                  </View>
                </View>
              </View>

              <View style={styles.groupRow}>
                <Image style={{width: 100, height: 130, marginTop: 4,}} source={avt1}/>
                <View style={styles.groupRight}>
                  <View style={styles.rightRow}>
                    <Text style={{fontSize: 18, color: '#A4A4A4'}}>Đồ Nam Thanh Lịch</Text>
                    <Text style={{fontSize: 18, color: '#A4A4A4', marginLeft: 42}}>X</Text>
                  </View>
                  <Text style={{color: 'red', paddingVertical: 23}}>{price}$</Text>
                  <View style={styles.rightRow}>
                    <View style={styles.rightRowCount}>
                      <TouchableOpacity style={styles.btnCount} onPress={this.countUp}>
                        <Text style={{fontSize: 15, color: '#A4A4A4'}}>+</Text>
                      </TouchableOpacity>
                      <Text style={{paddingHorizontal: 14, fontSize: 15, marginTop: 3}}>1</Text>
                      <TouchableOpacity style={styles.btnCount}>
                        <Text style={{fontSize: 16, color: '#A4A4A4'}} onPress={this.countDown}>-</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.gotoProductDetail}>
                      <Text style={{textTransform: "uppercase", color: 'red', fontSize: 15}}>Show Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.groupRow}>
                <Image style={{width: 100, height: 130, marginTop: 4,}} source={avt1}/>
                <View style={styles.groupRight}>
                  <View style={styles.rightRow}>
                    <Text style={{fontSize: 18, color: '#A4A4A4'}}>Đồ Nam Thanh Lịch</Text>
                    <Text style={{fontSize: 18, color: '#A4A4A4', marginLeft: 42}}>X</Text>
                  </View>
                  <Text style={{color: 'red', paddingVertical: 23}}>{price}$</Text>
                  <View style={styles.rightRow}>
                    <View style={styles.rightRowCount}>
                      <TouchableOpacity style={styles.btnCount}>
                        <Text style={{fontSize: 15, color: '#A4A4A4'}} onPress={this.countUp}>+</Text>
                      </TouchableOpacity>
                      <Text style={{paddingHorizontal: 14, fontSize: 15, marginTop: 3}}>1</Text>
                      <TouchableOpacity style={styles.btnCount}>
                        <Text style={{fontSize: 16, color: '#A4A4A4'}} onPress={this.countDown}>-</Text>
                      </TouchableOpacity>
                    </View>
                                        <TouchableOpacity onPress={this.gotoProductDetail}>
                      <Text style={{textTransform: "uppercase", color: 'red', fontSize: 15}}>Show Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.footer}>
            <Text style={{textTransform: "uppercase", color: '#fff', fontSize: 18, textAlign: "center"}}>Total {result}$ Checkout Now</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: '300',
    textTransform: "uppercase",
    letterSpacing: 2,
    color: '#fff'
  },
  header: {
    paddingVertical: 7,
    paddingTop: 28,
    backgroundColor: '#00C9FF',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
  },
  groupRow: {
    height: height / 4.3,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 4,
    shadowColor: '#D8D8D8',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0},
    flexDirection: "row",
  },
  groupRight: {
    paddingHorizontal: 10,
    marginLeft: 5,
  }, 
  rightRow: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  rightRowCount: {
    flexDirection: "row",
  },
  btnCount: {
    backgroundColor: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 50,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0},
  },
  footer: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    marginTop: 6.5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: '#00C9FF',
    padding: 10,
    flex: 0,
  },
  body: {
    height: height / 1.53,
  }
})