import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import ExpoIcon from '../constant/expoIcon.js'

const Anomali = ({isTrue, isFalse}) => {
  const [modalVisible, setModalVisible] = useState(false);

  
  
  return (
    <View className="flex-1 items-center justify-center bg-white">
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View className="flex-1 items-center justify-center mt-6">
                    <View className="m-5 bg-primary rounded-2xl justify-center items-center p-5  h-[30%] w-[80%]">

                        <Text className="mb-4 text-center text-3xl font-bold">Are you in any kind of danger?</Text>
                        <View className="flex flex-row w-full justify-center mt-6 items-center">
                            <Pressable
                                className="rounded-2xl p-4 bg-black mx-4 w-1/3"
                                onPress={() => {setModalVisible(!modalVisible);isTrue();}}>
                                <Text className="text-white font-bold text-center text-xl ">Yes</Text>
                            </Pressable>
                            <Pressable
                                className="rounded-2xl p-4 bg-green-500 mx-4 w-1/3"
                                onPress={() => {setModalVisible(!modalVisible);isFalse();}}>
                                <Text className="text-white font-bold text-center text-xl ">No</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Pressable Button */}

        <View className="flex flex-col items-center justify-center">

            <Text className="text-3xl font-bold px-5 text-gray-600 text-center mb-4">Need Emergency Service?</Text>
            <View className="flex flex-row w-64 h-64 p-2 rounded-full justify-center items-center border-2 border-primary">
            <Pressable
                className=" bg-[#FF5555] w-full h-full rounded-full flex justify-center items-center   active:bg-red-500"
                visible={modalVisible}
                onPress={() => setModalVisible(true)}>
                    <ExpoIcon.MaterialIcons name='emergency-share' size={70} color='white' />
                <Text className="my-2 text-xl text-white font-bold rounded-full text-center flex flex-col  ">
                    Emergency</Text>
            </Pressable>
            </View>

            <View className="flex flex-col">
                <Text className="text-2xl font-bold px-5 text-gray-600 text-center my-4">or</Text>
                {/* Button */}
                <Pressable className="bg-transparent">
                    <Text className="text-xl font-bold text-[#FF5555]">Emergency Call</Text>
                </Pressable>
                </View>
           </View> 
        </View>

  );
};

export default Anomali;
