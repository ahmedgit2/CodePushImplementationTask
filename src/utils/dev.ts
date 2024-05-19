import {Platform} from 'react-native';
import codePush from 'react-native-code-push';
export const checkUpdate = () => {
  codePush.sync({
    deploymentKey:
      Platform.OS == 'android'
        ? '9de85ce6-7d14-4e9e-8294-3822af227f59'
        : '545dc3bb-61c5-4ca4-83cd-486a5ca8429b',
    installMode: codePush.InstallMode.IMMEDIATE,
    mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
    updateDialog: {title: 'do you want update your app'},
  });
};
