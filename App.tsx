import React from 'react';
import {checkUpdate} from './src/utils/dev';
import {TestScreen} from './src/screens/TestScreen/test-screen';

function App(): React.JSX.Element {
  checkUpdate();

  return <TestScreen />;
}

export default App;
