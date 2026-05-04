import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Root from './src/navigation/Root';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    const init = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
      } finally {
        RNBootSplash.hide({ fade: true });
      }
    };

    init();
  }, []);
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default App;
