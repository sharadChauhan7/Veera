import axios from 'axios';
import { getLocation } from './permission.js';
import * as Location from 'expo-location';
import { session } from '../context/ctx.jsx';

export const sendAlert = async () => {
    try {
      let userData = await axios.post('http://172.16.92.103:3000/api/auth/user',{token:session});
      userData = userData.data.user;
      userData.location = await getLocation(Location);
      let res = await axios.post('http://172.16.92.103:3000/api/help/sos', userData);
    } catch (err) {
      console.log("Error sending alert:", err.message);
    }
  };

 export async function Emergency(errorMsg) {
    if (errorMsg) {
      console.log(errorMsg);
      return;
    }
    console.log("Emergency");
    // sendAlert();
  }
  
  export function FalseTrue() {
    console.log("FalseTrue");
  }