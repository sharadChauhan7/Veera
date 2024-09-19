import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

const requestPermissions = async () => {
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  try{
    if (foregroundStatus === 'granted') {
      console.log("Fore Ground Granted");
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus === 'granted') {
        console.log("Bg - granted");
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME,{
          accuracy: Location.Accuracy.Balanced,
          foregroundService: {
            notificationTitle: 'Location Tracking',
            notificationBody: 'Your location is being tracked in the background',
            notificationColor: '#FF0000'
          }
        });
      }
    }
  }
  catch(e){
    console.log(e);
  }
};

const PermissionsButton = () => (
  <View style={styles.container}>
    <Button onPress={requestPermissions} title="Enable background location" />
    <Button onPress={testTask} title="Enable test location" />

  </View>
);
async function testTask(){
  console.log( await TaskManager.getRegisteredTasksAsync());
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    console.log(locations);
    // do something with the locations captured in the background
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PermissionsButton;
