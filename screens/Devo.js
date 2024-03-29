import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Text,TextInput, Button } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { RkButton } from 'react-native-ui-kitten';
import {
  setanswer1, setanswer2, setanswer3, setanswer4,
  setanswer5, setanswer6, setanswer7, setanswer8,
  setanswer9, setanswer10, setanswer11, setanswer12,
  watchPersonData
        } from './../redux/app-redux';

const mapStateToProps1 = (state) => {
  return {
    answer1: state.answer1,
    answer2: state.answer2,
    answer3: state.answer3,
    answer4: state.answer4,
    answer5: state.answer5,
    answer6: state.answer6,
    answer7: state.answer7,
    answer8: state.answer8,
    answer9: state.answer9,
    answer10: state.answer10,
    answer11: state.answer11,
    answer12: state.answer12,

    personData: state.personData,
  };
}


const mapDispatchToProps1 = (dispatch) => {
  return {
    setanswer1: (text) => { dispatch(setanswer1(text)) },
    setanswer2: (text) => { dispatch(setanswer2(text)) },
    setanswer3: (text) => { dispatch(setanswer3(text)) },
    setanswer4: (text) => { dispatch(setanswer4(text)) },
    setanswer5: (text) => { dispatch(setanswer5(text)) },
    setanswer6: (text) => { dispatch(setanswer6(text)) },
    setanswer7: (text) => { dispatch(setanswer7(text)) },
    setanswer8: (text) => { dispatch(setanswer8(text)) },
    setanswer9: (text) => { dispatch(setanswer9(text)) },
    setanswer10: (text) => { dispatch(setanswer10(text)) },
    setanswer11: (text) => { dispatch(setanswer11(text)) },
    setanswer12: (text) => { dispatch(setanswer12(text)) },

    watchPersonData: () => { dispatch(watchPersonData()) },
  };
}

class Devo extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      answer1: this.props.answer1
    };

    this.props.watchPersonData();
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  };

  onSetFavoriteAnimalPress1 = () => {
    this.props.setanswer1(this.state.answer1);
  };
  onSetFavoriteAnimalPress2 = () => {
    this.props.setanswer2(this.state.answer2);
  };
  onSetFavoriteAnimalPress3 = () => {
    this.props.setanswer3(this.state.answer3);
  };
  onSetFavoriteAnimalPress4 = () => {
    this.props.setanswer4(this.state.answer4);
  };
  onSetFavoriteAnimalPress5 = () => {
    this.props.setanswer5(this.state.answer5);
  };
  onSetFavoriteAnimalPress6 = () => {
    this.props.setanswer6(this.state.answer6);
  };
  onSetFavoriteAnimalPress7 = () => {
    this.props.setanswer7(this.state.answer7);
  };
  onSetFavoriteAnimalPress8 = () => {
    this.props.setanswer8(this.state.answer8);
  };
  onSetFavoriteAnimalPress9 = () => {
    this.props.setanswer9(this.state.answer9);
  }
  onSetFavoriteAnimalPress10 = () => {
    this.props.setanswer10(this.state.answer10);
  }
  onSetFavoriteAnimalPress11 = () => {
    this.props.setanswer11(this.state.answer11);
  }
  onSetFavoriteAnimalPress12 = () => {
    this.props.setanswer12(this.state.answer12);
  }

  render() {
    return <KeyboardAvoidingView behavior="padding" style={{ flex: 1, padding: 20, paddingTop: 20 }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Devotional Questions
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Saturday: Read Psalm 23{"\n"}
          </Text>

        <Text style={{ fontWeight: "bold" }}>"What stood out to you about this Psalm?"</Text>
          <Text>{this.props.answer1}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer1} onChangeText={text => {
              this.setState({ answer1: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5, paddingBottom: 5 }}>
            <RkButton style = {{backgroundColor: 'black' }} rkType = "rounded" onPress={this.onSetFavoriteAnimalPress1} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"Have you ever gone through an experience in life where you knew God was leading you and guiding you, taking care of you or providing for you? " </Text>
          <Text>{this.props.answer2}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer2} onChangeText={text => {
              this.setState({ answer2: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress2} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"What do you think David is trying to help us understand about our relationship with God by calling him our Shepherd us his sheep?"</Text>
          <Text>{this.props.answer3}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer3} onChangeText={text => {
              this.setState({ answer3: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress3} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Sunday: Read Luke 8:40-56 {"\n"}
          </Text>


          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"What stood out to you in this portion of Scripture?"</Text>
          <Text>{this.props.answer4}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer4} onChangeText={text => {
              this.setState({ answer4: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress4} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"Do you think Jesus was annoyed that the woman touched him in Vs. 44? Why or why not?"</Text>
          <Text>{this.props.answer5}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer5} onChangeText={text => {
              this.setState({ answer5: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress5} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"What do you think motivated Jesus to heal and raise people from the dead?"</Text>
          <Text>{this.props.answer6}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer6} onChangeText={text => {
              this.setState({ answer6: text });
            }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress6} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Monday: Read Isaiah 30:15-26 {"\n"}
          </Text>

        <Text style={{ fontWeight: "bold" }}>"What stood out to you in this portion of Scripture?"</Text>
          <Text>{this.props.answer7}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer7} onChangeText={text => {
            this.setState({ answer7: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress7} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"What is the one reason somebody wouldn’t experience God’s compassion? Vs. 15 is key."</Text>
          <Text>{this.props.answer8}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer8} onChangeText={text => {
            this.setState({ answer8: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress8} >
              Save
            </RkButton>
          </View>

          <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"Vs. 22 talks about idols. Idols were images or statues people worshiped, believing that the idols would give them the desires of their hearts. We don’t have statues we worship per se, but we do have idols: things we give our time and energy believing they will satisfy us. What are some of the idols in our world and even in your own life?"</Text>
          <Text>{this.props.answer9}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer9} onChangeText={text => {
            this.setState({ answer9: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress9} >
              Save
            </RkButton>
          </View>
          
          <View style={{ height: 20 }} />


          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {"\n"}Tuesday: Read Colossians 3:12-17 {"\n"}
          </Text>


        <Text style={{ fontWeight: "bold" }}>"What stood out to you in this portion of Scripture?"</Text>
          <Text>{this.props.answer10}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer10} onChangeText={text => {
            this.setState({ answer10: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress10} >
              Save
            </RkButton>
          </View>

         <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"Why should we seek to be people of compassion?"</Text>
          <Text>{this.props.answer11}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer11} onChangeText={text => {
            this.setState({ answer11: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress11} >
              Save
            </RkButton>
          </View>

         <View style={{ height: 20 }} />


        <Text style={{ fontWeight: "bold" }}>"What do you think it looks like for us to show compassion on people around us?"</Text>
          <Text>{this.props.answer12}</Text>
          <TextInput style={{ height: 100, borderColor: "black", borderWidth: 2, textAlign: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flexWrap: "wrap" }} multiline={true} numberOfLines={4} value={this.state.answer12} onChangeText={text => {
            this.setState({ answer12: text });
          }} />
          <View style={{ alignItems: "center", paddingTop: 5, paddingBottom: 10, paddingBottom: 5 }}>
            <RkButton style={{ backgroundColor: 'black' }} rkType="rounded" onPress={this.onSetFavoriteAnimalPress12} >
              Save
            </RkButton>
          </View>
          <View style={{ height: 60 }} />

        </ScrollView>
      </KeyboardAvoidingView>;
  }
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps1, mapDispatchToProps1)(Devo);

