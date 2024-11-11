import { Audio } from "expo-av";

const PlaySound = async (soundName) => {
  try {
    const path = await getSoundPath(soundName);
    console.log(path);
    if (path) {
      const { sound } = await Audio.Sound.createAsync(path);
      sound.playAsync();
    } else {
      return;
    }
  } catch (error) {
    console.log("error while playing sound", error);
  }
};

const getSoundPath = (soundName) => {
  switch (soundName) {
    case "ting":
      return require("../assets/sfx/ting.mp3");
    case "ting 2":
      return require("../assets/sfx/ting2.mp3");
    case "motivation":
      return require("../assets/sfx/motivation.mp3");
    case "meditation":
      return require("../assets/sfx/meditation.mp3");
    case "laugh":
      return require("../assets/sfx/laugh.mp3");
    case "notification":
      return require("../assets/sfx/notification.mp3");
    default:
      throw new Error(`Sound ${soundName} not available`);
  }
};
export default PlaySound;
