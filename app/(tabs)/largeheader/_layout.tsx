import { Stack, Tabs } from 'expo-router';
export default function Layout() {
  return (
    <Stack>
         <Stack.Screen
            name='index'
            options={{
                headerTitle : "Blur large",
                headerShadowVisible: false,
                headerBlurEffect : 'regular' , //Not working
                headerTransparent : true,
                //Large header
                headerLargeTitle : true,
                headerLargeTitleStyle:{ color : "#fed138"}
        }} />
    </Stack>
  );
}
