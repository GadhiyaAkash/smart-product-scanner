import React from 'react';
import AppNavigation from './src/core/navigator/AppNavigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@rneui/themed';
import { AppTheme } from './src/core/Theme/CoreTheme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/core/redux/store';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  return (<>
    {
      !!fontsLoaded &&
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={AppTheme}>
            <AppNavigation></AppNavigation>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    }
  </>
  );
}