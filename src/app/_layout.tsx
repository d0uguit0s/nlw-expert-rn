import { SafeAreaView } from 'react-native'
import { Slot } from 'expo-router'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from '@/components/loading'

export default function Layout() {
  const [fotnsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })

  if(!fotnsLoaded) {
    return <Loading />
  }

  return(
    <SafeAreaView className='bg-slate-900 flex-1'>
      <Slot/>
    </SafeAreaView>
  )
}