import { View, Text, Image, Dimensions } from "react-native";

import { getLabelFromValue } from "../utils/grades";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = {
  data: any;
};

const IMG_WIDTH = 200;

export const ProblemListItem = ({ data }: Props) => {
  return (
    <View
      style={{
        borderWidth: 0.5,
        borderColor: "#dedede",
        borderRadius: 6,
      }}
    >
      <View style={{ padding: 8 }}>
        <Text style={{ fontSize: 20, paddingBottom: 6 }}>
          {data.name} - {getLabelFromValue(data.grade)}
        </Text>
        <Text>{data.description}</Text>
      </View>
      {data.imageUrl && (
        <Image
          source={{ uri: data.imageUrl }}
          style={{
            width: windowWidth - 48,
            height: windowWidth * 1.3,
          }}
          resizeMode="contain"
        />
      )}
    </View>
  );
};
