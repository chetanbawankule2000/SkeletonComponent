import { View, Text, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import SkeletonContent from "react-native-skeleton-content";

const { height, width } = Dimensions.get("window");

const MovieData = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,
        marginTop: 20,
      }}
      isLoading={loading}
      layout={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          children: [
            {
              width: 90,
              height: 90,
              marginBottom: 6,
              borderRadius: 45,
            },
            {
              width: width - 170,
              height: 40,
              marginBottom: 6,
              right: 10,
              top: 20,
            },
          ],
        },

        {
          width: "100%",
          height: width / 2,
          marginTop: 70,
        },
        { width: "70%", height: 50, marginVertical: 20 },
        { width: "70%", height: 25, marginVertical: 5 },
        { width: "70%", height: 25, marginVertical: 5 },
        {
          flexDirection: "row",
          marginTop: 20,
          children: [
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
            {
              width: 40,
              height: 40,
              borderRadius: 25,
              marginHorizontal: 5,
            },
          ],
        },
        {
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
          children: [
            {
              height: height / 5,
              width: width / 4,
              marginHorizontal: 5,
            },
            {
              height: height / 5,
              width: width / 4,
              marginHorizontal: 5,
            },
            {
              height: height / 5,
              width: width / 4,
              marginHorizontal: 5,
            },
          ],
        },
      ]}
      duration={2000}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          “It is easier to prevent bad habits than to break them.“
        </Text>
      </View>
    </SkeletonContent>
  );
};

export default MovieData;
