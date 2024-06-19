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
                headerStyle: {
                    backgroundColor: '#eeeeee',
                },
                headerLargeTitle : true,
                headerLargeStyle:{ backgroundColor : "#ffffff"},
                headerLargeTitleStyle:{ color : "#fed138"}
        }} />
    </Stack>
  );
}
