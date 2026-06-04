import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Top Logo Section */}
      <View className="flex-row items-center justify-center mt-10 mb-5">
        <Image 
          source={require("../../assets/images/moscot-logo.png")} 
          className="w-14 h-14 mr-3" 
          resizeMode="contain" 
        />
        <Text className="text-[32px] font-black text-[#111827] tracking-tight">foxy</Text>
      </View>

      {/* Main Content */}
      <View className="px-9 flex-1">
        <Text className="text-[45px] font-black text-[#0B1527] mb-3 leading-[44px] tracking-tight">
          Your AI language{"\n"}
          <Text className="text-[#6338f0]">teacher.</Text>
        </Text>
        
        <Text className="text-base text-[#6B7280] font-sans leading-relaxed pr-8">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>

        <View className="flex-1 justify-center items-center w-full min-h-[300px]">
          <View className="w-[85%] max-w-[320px] aspect-square relative justify-center items-center mt-4">
            
            {/* Mascot Image - absolutely positioned to easily overlap bubbles */}
            <Image 
              source={require("../../assets/images/mascot-welcome.png")} 
              className="absolute w-[115%] h-[115%] z-0"
              resizeMode="contain"
            />

            {/* Speech Bubbles */}
            <View className="absolute top-[10%] -left-[10%] bg-[#F0F6FF] px-4 py-2 sm:px-5 sm:py-2.5 rounded-3xl rounded-bl-sm rotate-[-6deg] z-10 shadow-sm border border-[#E5EFFF]">
              <Text className="text-base sm:text-lg font-bold text-[#1F2937]">Hello!</Text>
            </View>
            
            <View className="absolute -top-[5%] right-[5%] bg-[#F5F0FF] px-4 py-2 sm:px-5 sm:py-2.5 rounded-3xl rounded-br-sm rotate-[6deg] z-10 shadow-sm border border-[#EDE5FF]">
              <Text className="text-base sm:text-lg font-bold text-[#6338f0]">¡Hola!</Text>
            </View>

            <View className="absolute top-[50%] -right-[15%] bg-[#FFF0F0] px-4 py-2 sm:px-5 sm:py-2.5 rounded-3xl rounded-br-sm rotate-[-4deg] z-10 shadow-sm border border-[#FFE5E5]">
              <Text className="text-base sm:text-lg font-bold text-[#FF5A5A]">你好!</Text>
            </View>

          </View>
        </View>
      </View>

      {/* Pagination Dots */}
      <View className="flex-row justify-center items-center gap-2 mb-6">
        <View className="w-2.5 h-2.5 rounded-full bg-[#6338f0]" />
        <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
        <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
        <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-14 pt-4">
        <Link href="/sign-up" asChild>
          <Pressable className="bg-[#6338f0] py-4 rounded-[20px] flex-row items-center justify-center active:opacity-80 shadow-sm relative">
            <Text className="text-white text-lg font-bold text-center">Get Started</Text>
            <View className="absolute right-6">
              <Ionicons name="chevron-forward" size={24} color="white" />
            </View>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
