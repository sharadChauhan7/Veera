import { View, Text, Button } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Accelerometer } from 'expo-sensors';
import * as TaskManager from 'expo-task-manager';
import * as Device from 'expo-device';

// Define the background task name
const ACCELEROMETER_TASK = "ACCELEROMETER_TASK";

// Register the background task for accelerometer detection
TaskManager.defineTask(ACCELEROMETER_TASK, ({ data, error }) => {
  if (error) {
    console.error("Background Task Error:", error);
    return;
  }

  if (data) {
    const { acceleration } = data;
    if (acceleration) {
      const { x, y, z } = acceleration;
      if (x > 5 || y > 5 || z > 5) {
        console.log('Background Alert Triggered!');
      }
    }
  }
});

const Setting = () => {
  const isEmergency = useRef(false);
  const [subscription, setSubscription] = useState(null);

  // Start accelerometer data listening in the foreground
  const startForegroundDetection = () => {
    const subscription = Accelerometer.addListener((acceleration) => {
      const { x, y, z } = acceleration;
      if (!isEmergency.current && (x > 5 || y > 5 || z > 5)) {
        isEmergency.current = true;
        console.log("Foreground Alert Triggered");
        setTimeout(() => {
          isEmergency.current = false;
        }, 3000);
      }
    });
    setSubscription(subscription);
  };

  // Start background task for accelerometer detection
  const startBackgroundDetection = async () => {
    if (Device.isDevice) {
      console.log('Attempting to start background accelerometer detection...');
      await Accelerometer.setUpdateInterval(1000); // Set update interval for the accelerometer
      const taskRegistered = await TaskManager.isTaskRegisteredAsync(ACCELEROMETER_TASK);

      if (!taskRegistered) {
        try {
          await TaskManager.registerTaskAsync(ACCELEROMETER_TASK);
          console.log('Background Accelerometer Task Started');
        } catch (error) {
          console.error('Error starting background task:', error);
        }
      } else {
        console.log('Background task is already registered.');
      }
    } else {
      console.log('Background tasks are not supported on simulators');
    }
  };


  // Stop accelerometer detection
  const stopDetection = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
    Accelerometer.removeAllListeners(); // Stop accelerometer listening in the foreground
    TaskManager.unregisterTaskAsync(ACCELEROMETER_TASK); // Stop background task
    console.log('Accelerometer Detection Stopped');
  };

  useEffect(() => {
    return () => {
      if (subscription) subscription.remove(); // Cleanup listener on component unmount
    };
  }, [subscription]);

  return (
    <View>
      <Text>Setting</Text>
      <Button
        title="Start Shake Detection"
        onPress={() => {
          startForegroundDetection();
          startBackgroundDetection();
        }}
      />
      <Button
        title="Stop Shake Detection"
        onPress={() => stopDetection()}
      />
    </View>
  );
};

export default Setting;
