import { View, Text } from 'react-native'
import React from 'react'
import { Accelerometer } from 'expo-sensors';
import { useState,useEffect ,useRef} from 'react';

const setting = () => {

  const isEmergency = useRef(false);
  useEffect(() => {
    // Start the accelerometer listener when the component mounts
    const subscription = Accelerometer.addListener((acceleration) => {
      if (!isEmergency.current && (acceleration.x > 5 || acceleration.y > 5 || acceleration.z > 5)) {
        isEmergency.current=true;
        console.log("Alert Triggered");
        setTimeout(()=>{
          isEmergency.current=false;
        },3000);
      }
    });

    return () => subscription.remove(); // Clean up the listener when the component unmounts
  }, []);

  return (
    <View>
      <Text>setting</Text>
    </View>
  )
}

export default setting