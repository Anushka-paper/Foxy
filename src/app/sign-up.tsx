import { View, Text, Image, TextInput, Pressable, ScrollView, Modal, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, router } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useState, useRef } from "react";
import { VerificationModal } from "../components/VerificationModal";
import { useSignUp, useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const isValid = email.includes("@") && password.length >= 8;

  useWarmUpBrowser();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({ strategy: "oauth_facebook" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

  const handleOAuth = async (startOAuthFlow: any) => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  const handleSignUp = async () => {
    if (!isLoaded) return;
    setIsLoading(true);
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setShowVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      alert(err.errors?.[0]?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (verifyCode: string) => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verifyCode,
      });
      
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        setShowVerification(false);
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
        alert("Invalid code");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      alert(err.errors?.[0]?.message || "Invalid code");
    }
  };

  const handleCodeChange = (text: string) => {
    const newCode = text.replace(/[^0-9]/g, '').slice(0, 6);
    setCode(newCode);
    if (newCode.length === 6) {
      handleVerifyCode(newCode);
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
              value={email}
              onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
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
            onPress={() => {
              setCode("");
              handleSignUp();
            }}
            disabled={!isValid || isLoading}
            className={`py-4 rounded-[16px] items-center active:opacity-80 shadow-sm ${isValid ? 'bg-[#7354FA]' : 'bg-[#D1D5DB]'}`}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white text-[17px] font-semibold">Sign Up</Text>
            )}
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
          <Pressable 
            onPress={() => handleOAuth(googleAuth)}
            className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70"
          >
            <Image source={{ uri: "https://img.icons8.com/color/48/000000/google-logo.png" }} className="w-5 h-5 absolute left-6" />
            <Text className="text-[#111827] text-[15px] font-medium">Continue with Google</Text>
          </Pressable>

          <Pressable 
            onPress={() => handleOAuth(facebookAuth)}
            className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70"
          >
            <FontAwesome5 name="facebook" size={22} color="#1877F2" className="absolute left-6" solid />
            <Text className="text-[#111827] text-[15px] font-medium">Continue with Facebook</Text>
          </Pressable>

          <Pressable 
            onPress={() => handleOAuth(appleAuth)}
            className="flex-row items-center justify-center py-3.5 rounded-[16px] border border-[#E5E7EB] bg-white active:opacity-70"
          >
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

      <VerificationModal 
        visible={showVerification} 
        onClose={() => setShowVerification(false)} 
        code={code} 
        onChangeCode={handleCodeChange} 
        inputRef={inputRef} 
      />
    </SafeAreaView>
  );
}
