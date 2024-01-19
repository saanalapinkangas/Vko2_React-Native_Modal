import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: '#F3E5E7',
    padding: 40,
    alignItems: 'center',
  },
  button: {
    width: '70%',
    borderRadius: 30,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#D5C6E0',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textClose: {
    color: '#967AA1',
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
});