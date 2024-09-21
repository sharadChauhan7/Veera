import React, { useState } from 'react';
import { View, Switch, Pressable, Text } from 'react-native';
import ExpoIcon from '../../../constant/expoIcon.js'

const wellness = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
    <View className="flex flex-col items-center justify-center">

    <Text className="text-3xl font-bold px-5 text-gray-600 text-center mb-4">WellNess Mode is {isEnabled?"Enabled":"Disabled"}</Text>
    {/* <View className={`flex-1 items-center justify-center `}> */}
      <View className={`flex flex-row w-64 h-64 p-2 rounded-full justify-center items-center border-2 ${isEnabled?'border-green-400':'border-primary'}  ease-in`}>        
      <Pressable
        className={` ${isEnabled?'bg-green-400':'bg-[#FF5555]'} w-full h-full rounded-full flex justify-center items-center   active:bg-green-300`}
        onPress={toggleSwitch}>
        <ExpoIcon.MaterialIcons name='emergency-share' size={70} color='white' />
        <Text className="my-2 text-xl text-white font-bold rounded-full text-center flex flex-col  ">
          WellNess</Text>
      </Pressable>
    </View>
    </View >
    </View>
  );
};

export default wellness;
