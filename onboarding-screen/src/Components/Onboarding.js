import {
  PixelRatio,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState, useRef } from "react";
import data from "../Data";
import RenderItem from "./RenderItem";
import CustomButton from "./CustomButton";
import { useSharedValue, withTiming } from "react-native-reanimated";
import Pagination from "./Pagination";
import  {
    SkImage ,
  Canvas,
  Mask,
  Circle,
  Group,
  Image,
  makeImageFromView,
  JsiSkImage
} from "@shopify/react-native-skia";

const Onboarding = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const buttonValue = useSharedValue(0);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  //masking logic
  const pd = PixelRatio.get();
  const [active, setactive] = useState(false);
  const [overlay, setoverlay] = useState(SkImage);
  const ref = useRef(null);
  const mask = useSharedValue(0);

  const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handlePress = async () => {
    if (currentIndex === data.length - 1 && !active) {
      console.log("End");
      return;
    }
    if (!active) {
      setactive(true);
      const snapshot1 = await makeImageFromView(ref);
      setoverlay(snapshot1);
      await wait(80);

      setcurrentIndex((pre) => pre + 1);
      mask.value = withTiming(SCREEN_HEIGHT, { duration: 1000 });
      buttonValue.value = withTiming(buttonValue.value + SCREEN_HEIGHT);

      setoverlay(null);
      mask.value = 0;
      setactive(false);
    }
  };
  return (
    <View style={styles.container}>
      <View ref={ref} collapsable={false}>
        {data.map((item, index) => {
          return (
            currentIndex === index && <RenderItem item={item} key={index} />
          );
        })}
      </View>
      {overlay && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents={"none"}>
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 160}
                  r={mask}
                  color="black"
                />
              </Group>
            }
          >
            <Image
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
          </Mask>
        </Canvas>
      )}
      <CustomButton handlePress={handlePress} buttonValue={buttonValue} />
      <Pagination data={data} buttonValue={buttonValue} />
      <Text style={styles.credit}>Illustration by OlFi from Ouch!</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  credit: {
    color: "white",
    position: "absolute",
    bottom: 22,
  },
});
