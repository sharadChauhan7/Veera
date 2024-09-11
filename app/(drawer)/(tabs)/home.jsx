import { View, Text } from 'react-native'
import React from 'react'
import { useSession } from '../../../context/ctx.jsx';
import { useState } from 'react';
import axios from 'axios';
import { getLocation } from '../../../util/permission.js';
import * as Location from 'expo-location';
import Anomali from '../../../components/Anomali';

const home = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const {session} = useSession();


    async function Emergency() {
        if(errorMsg){
            console.log(errorMsg);
            return;
        }
        console.log("Emergency");
        sendAlert();
        // console.log(contacts);
        
    }
    function FalseTrue() {
        console.log("FalseTrue");
    }
    const sendAlert = async () => {
      try {
        let userData = await axios.post('http://172.16.92.103:3000/api/auth/user',{token:session});
        userData = userData.data.user;
        userData.location = await getLocation(Location);
        let res = await axios.post('http://172.16.92.103:3000/api/help/sos', userData);
      } catch (err) {
        console.log("Error sending alert:", err.message);
      }
    };
  return (
    <Anomali isTrue={Emergency} isFalse={FalseTrue} />
  )
}

export default home