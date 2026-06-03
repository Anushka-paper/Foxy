import { View, Text, Image, TextInput, Pressable, ScrollView, Modal, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, router } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useState, useRef } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleCodeChange = (text: string) => {
    const newCode = text.replace(/[^0-9]/g, '').slice(0, 6);
    setCode(newCode);
    if (newCode.length === 6) {
      setShowVerification(false);
      router.replace("/");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }} keyboardShouldPersistTaps="handled">
        {/* Header */}
        <View className="px-6 pt-2 pb-2">
          <Pressable onPress={() => router.back()} className="w-10 h-10 justify-center">
            <Ionicons name="chevron-back" size={28} color="#111827" />
          </Pressable>
        </View>

        {/* Title */}
        <View className="px-6 mt-2">
          <Text className="text-[28px] font-bold text-[#111827] mb-1 tracking-tight">Create your account</Text>
          <Text className="text-[15px] text-[#6B7280] font-sans">Start your language journey today ✨</Text>
        </View>

        {/* Mascot */}
        <View className="items-center mt-6 justify-end z-10">
          <Image 
            source={require("../../assets/images/mascot-auth.png")} 
            className="w-[220px] h-[220px]"
            resizeMode="contain"
          />
        </View>

        {/* Form */}
        <View className="px-6 -mt-12 z-20">
          <View className="border border-[#E5E7EB] rounded-2xl px-4 py-3 mb-4 bg-white">
            <Text className="text-[13px] text-[#6B7280] mb-0.5">Email</Text>
            <TextInput 
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              className="text-[16px] text-[#111827] font-sans p-0 m-0 leading-tight"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="border border-[#E5E7EB] rounded-2xl px-4 py-3 mb-6 bg-white flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-[13px] text-[#6B7280] mb-0.5">Password</Text>
              <TextInput 
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                className="text-[16px] text-[#111827] font-sans p-0 m-0 leading-tight"
                secureTextEntry={!showPassword}
              />
            </View>
            <Pressable onPress={() => setShowPassword(!showPassword)} className="p-1">
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={22} color="#6B7280" />
            </Pressable>
          </View>

          <Pressable 
            onPress={() => setShowVerification(true)}
            className="bg-[#7354FA] py-4 rounded-[16px] items-center active:opacity-80 shadow-sm"
          >
            <Text className="text-white text-[17px] font-semibold">Sign Up</Text>
          </Pressable>
        </View>

        {/* Divider */}
        <View className="px-6 mt-8 mb-8 flex-row items-center justify-center">
          <View className="w-12 h-[1px] bg-[#E5E7EB]" />
          <Text className="px-3 text-[14px] text-[#6B7280] font-sans">or continue with</Text>
          <View className="w-12 h-[1px] bg-[#E5E7EB]" />
        </View>

        {/* Social Auth */}
        <View className="px-6 gap-3">
          <Pressable className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70">
            <Image source={{ uri: "https://img.icons8.com/color/48/000000/google-logo.png" }} className="w-5 h-5 absolute left-6" />
            <Text className="text-[#111827] text-[15px] font-medium">Continue with Google</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70">
            <FontAwesome5 name="facebook" size={22} color="#1877F2" className="absolute left-6" solid />
            <Text className="text-[#111827] text-[15px] font-medium">Continue with Facebook</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70">
            <FontAwesome5 name="apple" size={24} color="#000000" className="absolute left-6" />
            <Text className="text-[#111827] text-[15px] font-medium">Continue with Apple</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="mt-8 flex-row justify-center items-center">
          <Text className="text-[#6B7280] text-[15px] font-sans">Already have an account? </Text>
          <Link href="/sign-in" asChild>
            <Pressable>
              <Text className="text-[#7354FA] text-[15px] font-semibold">Log in</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>

      {/* Verification Modal */}
      <Modal visible={showVerification} transparent animationType="fade">
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-end bg-black/40"
        >
          <Pressable className="flex-1" onPress={() => setShowVerification(false)} />
          <View className="bg-white rounded-t-3xl p-8 pb-12">
            <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-6" />
            <Text className="text-2xl font-black text-center text-[#111827] mb-2">Check your email</Text>
            <Text className="text-center text-[#6B7280] mb-8 font-sans">
              We've sent a 6-digit verification code to your email.
            </Text>
            
            {/* Code Input Container */}
            <View className="relative mb-4">
              {/* Hidden Input over the boxes */}
              <TextInput
                ref={inputRef}
                value={code}
                onChangeText={handleCodeChange}
                keyboardType="number-pad"
                maxLength={6}
                caretHidden
                autoFocus
                style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0, zIndex: 10 }}
              />

              {/* Custom Code Input UI */}
              <View className="flex-row justify-between gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <View 
                    key={index} 
                    className={`flex-1 h-14 rounded-xl border-2 items-center justify-center ${
                      code.length === index ? 'border-[#7354FA] bg-[#F5F3FF]' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <Text className="text-2xl font-bold text-[#111827]">
                      {code[index] || ""}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}
