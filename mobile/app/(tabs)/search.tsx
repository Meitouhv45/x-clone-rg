import { Feather } from "@expo/vector-icons";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TRENDING_TOPICS = [
  { topic: "#ReactNative", tweets: "125K" },
  { topic: "#TypeScript", tweets: "89K" },
  { topic: "#WebDevelopment", tweets: "234K" },
  { topic: "#AI", tweets: "567K" },
  { topic: "#TechNews", tweets: "98K" },
  { topic: "#JavaScript", tweets: "1.2M" },
  { topic: "#ReactJS", tweets: "845K" },
  { topic: "#NextJS", tweets: "432K" },
  { topic: "#NodeJS", tweets: "376K" },
  { topic: "#Expo", tweets: "54K" },
  { topic: "#ReactNative", tweets: "612K" },
  { topic: "#MobileDevelopment", tweets: "287K" },
  { topic: "#Frontend", tweets: "498K" },
  { topic: "#Backend", tweets: "321K" },
  { topic: "#FullStack", tweets: "674K" },
  { topic: "#OpenSource", tweets: "759K" },
  { topic: "#Programming", tweets: "2.1M" },
  { topic: "#SoftwareEngineering", tweets: "392K" },
  { topic: "#CloudComputing", tweets: "284K" },
  { topic: "#DevOps", tweets: "198K" },
  { topic: "#Docker", tweets: "176K" },
  { topic: "#Kubernetes", tweets: "143K" },
  { topic: "#CyberSecurity", tweets: "221K" },
  { topic: "#MachineLearning", tweets: "689K" },
  { topic: "#DataScience", tweets: "547K" },
  { topic: "#Startup", tweets: "334K" },
  { topic: "#SaaS", tweets: "412K" },
  { topic: "#Blockchain", tweets: "503K" },
  { topic: "#Web3", tweets: "468K" },
  { topic: "#UIUX", tweets: "256K" },
  { topic: "#DesignSystems", tweets: "119K" },
  { topic: "#APIs", tweets: "182K" },
  { topic: "#OpenAI", tweets: "891K" },
  { topic: "#TechTrends", tweets: "365K" },
];

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* HEADER */}
      <View className="px-4 py-3 border-b border-gray-100">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
          <Feather name="search" size={20} color="#657786" />
          <TextInput
            placeholder="Search Twitter"
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#657786"
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Trending for you
          </Text>
          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="py-3 border-b border-gray-100"
            >
              <Text className="text-gray-500 text-sm">
                Trending in Technology
              </Text>
              <Text className="font-bold text-gray-900 text-lg">
                {item.topic}
              </Text>
              <Text className="text-gray-500 text-sm">
                {item.tweets} Tweets
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
