import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { useRef, useEffect } from "react";

import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              body,html {
              width: ${windowWidth}px; height: ${windowHeight * 0.7}px;}`;

export const ImageEditor = () => {
  const ref = useRef<SignatureViewRef>(null);

  useEffect(() => {
    ref.current?.changePenColor("blue");
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          justifyContent: "center",
          paddingTop: 100,
        }}
      >
        <SignatureScreen
          ref={ref}
          bgSrc="https://res.cloudinary.com/dlkxtrc8y/image/upload/v1645380423/des/template_ifpxxd.png"
          bgWidth={windowWidth}
          bgHeight={windowHeight * 0.7}
          webStyle={style}
          onOK={(img) => console.log(img)}
          descriptionText="Mark your holds"
        />
        <View style={{ flexDirection: "row", padding: 20 }}>
          <TouchableOpacity
            onPress={() => ref.current?.changePenColor("red")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: "red",
              margin: 5,
            }}
          />
          <TouchableOpacity
            onPress={() => ref.current?.changePenColor("green")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: "green",
              margin: 5,
            }}
          />
          <TouchableOpacity
            onPress={() => ref.current?.changePenColor("blue")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: "blue",
              margin: 5,
            }}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
