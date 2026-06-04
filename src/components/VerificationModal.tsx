import { View, Text, TextInput, Modal, KeyboardAvoidingView, Platform, Pressable } from "react-native";
import { RefObject } from "react";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  code: string;
  onChangeCode: (text: string) => void;
  inputRef: RefObject<TextInput>;
}

export function VerificationModal({ visible, onClose, code, onChangeCode, inputRef }: VerificationModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-end bg-black/40"
      >
        <Pressable className="flex-1" onPress={onClose} />
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
              onChangeText={onChangeCode}
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
  );
}
