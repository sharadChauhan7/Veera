import { View, Text } from 'react-native'
import React from 'react'
import { useSession } from '../../../context/ctx.jsx';
import { useState } from 'react';
import { Emergency,FalseTrue } from '../../../util/sosMethod.js';
import Anomali from '../../../components/Anomali';


const home = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  return (
    <Anomali isTrue={()=>{Emergency(errorMsg)}} isFalse={FalseTrue} />
  )
}

export default home