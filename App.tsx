import React, {useEffect} from 'react';
import {TestScreen} from './src/screens/TestScreen/test-screen';
import codePush from 'react-native-code-push';
import {Button, Platform, Text, TouchableOpacity} from 'react-native';

const options = {
  updateDialog: {title: 'Do you want to update your app?'},
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.MANUAL,
  deploymentKey:
    Platform.OS === 'android'
      ? 'imwM9HJk5svJrWXL0OZ-tDX3WTjThtCX45iim'
      : 'YOUR_IOS_DEPLOYMENT_KEY',
};

const checkUpdate = () => {
  codePush.sync(options);
};

function App(): React.JSX.Element {
  useEffect(() => {
    if (!__DEV__) {
      checkUpdate();
    }
  }, []);

  return (
    <>
      <TestScreen />
    </>
  );
}

export default codePush(options)(App);
