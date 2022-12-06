import { ActivityIndicator, StatusBar } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Home } from "./src/pages/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}
      
    </>
  );
}
