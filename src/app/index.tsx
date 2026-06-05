import { Text, View, Pressable, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useAuth, useClerk, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#6338f0" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View className="flex-1 justify-center items-center bg-surface p-4">
      <View className="bg-background rounded-2xl p-6 shadow-sm border border-gray-200 w-full max-w-sm items-center">
        <Text className="text-4xl font-black text-primary-default mb-2">Foxy</Text>
        <Text className="text-lg font-bold text-text-primary mb-2">Language Learning</Text>
        <Text className="text-base font-sans text-text-secondary text-center mb-8">
          Welcome back, {user?.primaryEmailAddress?.emailAddress}!
        </Text>
        <Link href="/language-selection" asChild>
          <Pressable className="bg-primary-default py-4 px-8 rounded-full w-full active:opacity-80 mt-4">
            <Text className="text-white text-center font-bold text-lg">Choose Language</Text>
          </Pressable>
        </Link>
        
        <Pressable 
          className="bg-red-500 py-4 px-8 rounded-full w-full active:opacity-80 mt-4"
          onPress={() => signOut()}
        >
          <Text className="text-white text-center font-bold text-lg">Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
}
