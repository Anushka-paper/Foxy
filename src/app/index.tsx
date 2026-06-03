import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-surface p-4">
      <View className="bg-background rounded-2xl p-6 shadow-sm border border-gray-200 w-full max-w-sm items-center">
        <Text className="text-4xl font-black text-primary-default mb-2">Foxy</Text>
        <Text className="text-lg font-bold text-text-primary mb-2">Language Learning</Text>
        <Text className="text-base font-sans text-text-secondary text-center mb-8">
          Learn a new language in a fun and interactive way!
        </Text>
        
        <Link href="/onboarding" asChild>
          <Pressable className="bg-primary-default py-4 px-8 rounded-full w-full active:opacity-80 mb-4">
            <Text className="text-white text-center font-bold text-lg">View Onboarding</Text>
          </Pressable>
        </Link>

        <Pressable className="bg-success-default py-4 px-8 rounded-full w-full active:opacity-80">
          <Text className="text-white text-center font-bold text-lg">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
