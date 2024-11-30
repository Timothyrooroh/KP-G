import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import logoHalut from "../../assets/img/logoHalut.png";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
  const router = useRouter();

  const navigation = useNavigation
  return (
    <View className="pt-16 px-6 bg-blue-900 flex-1">
      {/* Elemen Header */}
      <View className="items-center mb-16 h-[20vh]">
        <View className="bg-white absolute h-[464px] w-[424px] top-[-140px] rounded-full items-center justify-center">
          <Text className="text-black text-center uppercase text-xl font-bold">Tata Ruang</Text>
          <Text className="text-black text-center uppercase text-lg mt-3 font-bold">Kabupaten Halmahera Utara</Text>
        </View>
      </View>

      {/* Elemen Logo */}
      <View className="items-center mb-16">
        <View className="bg-white p-5 rounded-full">
          <Image className="w-24 h-32" source={logoHalut} />
        </View>
      </View>

      {/* Elemen Grid */}
      <View className="flex-row flex-wrap justify-between gap-3">
        {/* Tombol 1 */}
        <TouchableOpacity
          className="bg-white rounded-md px-1 py-5 w-[30%]"
          onPress={() => router.push("/rtrw")}
        >
          <Text className="text-center text-sm">RTRW/RDTR</Text>
        </TouchableOpacity>
        {/* Tombol 2 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => router.push("/sipetarung")}
        >
          <Text className="text-center text-sm">SIPETARUNG</Text>
        </TouchableOpacity>
        {/* Tombol 3 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => router.push("/screens/Profil")}
        >
          <Text className="text-center text-sm">FPR</Text>
        </TouchableOpacity>
        {/* Tombol 4 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => router.push("/pengendalian")}
        >
          <Text className="text-center text-sm">Pengendalian</Text>
        </TouchableOpacity>
        {/* Tombol 5 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => router.push("/aturan")}
        >
          <Text className="text-center text-sm">Aturan</Text>
        </TouchableOpacity>
        {/* Tombol 6 */}
        <TouchableOpacity
          className="bg-white rounded-md p-3 py-5 w-[30%]"
          onPress={() => router.push("/buhmi")}
        >
          <Text className="text-center text-sm">Buhmi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
