import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LANGUAGES } from "../data/languages";

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("es");

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* Header */}
      <View className="flex-row items-center px-4 py-3">
        <Pressable onPress={() => router.back()} className="p-2 -ml-2">
          <Ionicons name="chevron-back" size={24} color="#1f2937" />
        </Pressable>
        <Text className="text-xl font-bold text-center flex-1 mr-8 text-slate-900">Choose a language</Text>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-2">
        <View className="flex-row items-center bg-slate-50 rounded-full px-4 py-3 border border-slate-200">
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput
            className="flex-1 ml-2 text-base text-slate-800"
            placeholder="Search languages"
            placeholderTextColor="#9ca3af"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <Text className="text-lg font-bold text-slate-800 mb-4">Popular</Text>

        <View className="space-y-3 pb-32">
          {filteredLanguages.map((lang) => {
            const isSelected = selectedLanguage === lang.id;
            
            // Mock learners count mapping based on UI prompt
            const learnersMap: Record<string, string> = {
              'es': '28.4M',
              'fr': '19.4M',
              'ja': '12.7M',
              'ko': '9.3M',
              'de': '8.1M',
              'zh': '7.4M'
            };
            const learners = learnersMap[lang.id] || '5.2M';

            return (
              <Pressable
                key={lang.id}
                onPress={() => setSelectedLanguage(lang.id)}
                className={`flex-row items-center justify-between p-4 mb-1 rounded-3xl ${
                  isSelected ? "border-2 border-primary-default bg-primary-default/5" : "bg-white"
                }`}
              >
                <View className="flex-row items-center">
                  <View className="w-12 h-12 items-center justify-center mr-3">
                    <Text className="text-[32px] leading-none">{lang.emoji}</Text>
                  </View>
                  <View>
                    <Text className={`text-lg font-bold ${isSelected ? "text-slate-900" : "text-slate-800"}`}>{lang.name}</Text>
                    <Text className="text-sm text-slate-500">
                      {learners} learners
                    </Text>
                  </View>
                </View>

                {isSelected ? (
                  <View className="w-6 h-6 rounded-full bg-primary-default items-center justify-center">
                    <Ionicons name="checkmark" size={16} color="white" />
                  </View>
                ) : (
                  <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
                )}
              </Pressable>
            );
          })}
        <Pressable 
          onPress={() => router.back()}
          className="bg-primary-default py-4 mt-2 rounded-3xl w-full items-center shadow-sm"
        >
          <Text className="text-white font-bold text-lg">Continue</Text>
        </Pressable>
        </View>
        
        {/* Footer Image */}
        <View className="w-screen -ml-4 -mt-32 pointer-events-none">
          <Image 
            source={require('../../assets/images/earth.png')} 
            className="w-full h-80 opacity-100"
            resizeMode="cover"
          />
        </View>
      </ScrollView>
      

      
    </View>
  );
}
