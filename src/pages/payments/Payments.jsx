import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import SecondHeader from '../../components/SecondHeader';

const Payments = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: '#fff', height: "100%" }}>
          <SecondHeader title="Payments" showBack={true} showCart={true} />

          <View style={styles.maincontainer}>
            {/* Top Section */}
            <View style={styles.textcontainer}>
              <Text style={styles.lefttext}>Delivery to</Text>
              <Text style={styles.righttext}>Salatagia City, Central Java</Text>
            </View>

            {/* Middle Section */}
            <View>
              <Text style={styles.sectionTitle}>Add a Card</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Card number</Text>
                <TextInput
                  placeholder="**** **** **** ****"
                  maxLength={19}
                  keyboardType="numeric"
                  placeholderTextColor="#a3a2a0"
                  style={styles.payinput}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <Text style={styles.label}>Exp date</Text>
                  <TextInput
                    placeholder="MM/YY"
                    placeholderTextColor="#a3a2a0"
                    style={styles.payinput}
                  />
                </View>

                <View style={styles.halfInput}>
                  <Text style={styles.label}>Security code</Text>
                  <TextInput
                    placeholder="CVV"
                    keyboardType="numeric"
                    placeholderTextColor="#a3a2a0"
                    style={styles.payinput}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Card holder</Text>
                <TextInput
                  placeholder="Card holder name"
                  placeholderTextColor="#a3a2a0"
                  style={styles.payinput}
                />
              </View>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomcontainer}>
              <View style={styles.totalRow}>
                <Text>Totals</Text>
                <Text>$ 0.00</Text>
              </View>

              <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.continueText}>Select payment method</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },

  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },

  inputGroup: {
    marginBottom: 15,
  },

  label: {
    fontSize: 13,
    color: '#555',
    marginBottom: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  halfInput: {
    width: '48%',
  },

  payinput: {
    width: '100%',
    borderWidth: 1,
    color: "black",
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  bottomcontainer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 15,
    paddingBottom: 6,
  },

  lefttext: {
    fontSize: 12,
    fontWeight: '400',
  },

  righttext: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },

  button: {
    marginTop: 10,
  },

  continueText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#76C893',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
  },
});
