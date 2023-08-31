import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";

import colors from "../config/colors";

interface Props {
  progress: number;
  visible: boolean;
  onDone: () => void;
}

function UploadScreen({ progress, visible, onDone }: Props) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/*<AppText>{progress * 100}%</AppText>*/}

        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
