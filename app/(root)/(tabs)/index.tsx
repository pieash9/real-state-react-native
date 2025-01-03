import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik-extrabold text-3xl  my-10">
        Welcome to ReState
      </Text>

      <Link href={"/sign-in"}>Sign in</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
