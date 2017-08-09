import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default class App extends React.Component {
  state = {
    numRSVP: null
  };

  renderNumPizzas(rsvpCount) {
    let rsvps = parseInt(rsvpCount);
    let actualAttending = rsvps > 10 ? 0.8 * (rsvps - 10) + 10 : rsvps;
    let pizzaCount =
      actualAttending > 10
        ? actualAttending / (20 / 3) + 1.5
        : actualAttending / (10 / 3);
    if (rsvps) {
      // More is better, right? ;)
      return Math.ceil(pizzaCount);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appBar} />

        <View style={styles.jumbotronContainer}>
          <Text style={styles.jumbotronText}>
            {this.renderNumPizzas(this.state.numRSVP)}
          </Text>
        </View>
        <Text style={styles.label}>Enter the number of Meetup RSVP's</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={numRSVP => this.setState({ numRSVP })}
          value={this.state.numRSVP}
          placeholder="Enter a number"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  appBar: {
    height: 20
  },
  jumbotronContainer: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 200,
    width: 300,
    justifyContent: "center"
  },
  jumbotronText: {
    textAlign: "center",
    fontSize: 72,
    color: "red"
  },
  label: {
    marginTop: 30,
    marginBottom: 15
  },
  input: {
    height: 40,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: 300
  }
});
