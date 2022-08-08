import { StyleSheet, Text, View, Dimensions } from "react-native";
import MovieData from "./src/components/MovieData";

export default function App() {
  return (
    <View style={styles.container}>
      <MovieData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
