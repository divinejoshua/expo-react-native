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

                headerLargeTitle : true,
                //Search
                headerSearchBarOptions :{
                  placeholder : "Search Wetroverse",
                  hideWhenScrolling : false, //Hide search bar when scrolling
                  cancelButtonText: "Close me"
                }
        }} />
    </Stack>
  );
}
