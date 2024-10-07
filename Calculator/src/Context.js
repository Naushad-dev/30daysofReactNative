import { createContext, useState,useEffect } from "react";
import { Audio } from "expo-av";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState("light");
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");
  const [sound, setsound] = useState();

  const clickSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/click2.mp3")
    );
    setsound(sound);
    // await sound.playAsync();
  };
  useEffect(() => {
    clickSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      await sound.replayAsync();
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        settheme,
        input,
        setinput,
        result,
        setresult,
        clickSound,
        playSound
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
