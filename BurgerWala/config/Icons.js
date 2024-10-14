import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const icons = {
    index: (props) => (
      <AntDesign name="home" size={18}  {...props} />
    ),
    Orders: (props) => (
      <MaterialIcons
        name="delivery-dining"
        size={18}
        
        {...props}
      />
    ),
    chats: (props) => (
      <Ionicons name="chatbubble-outline" size={18}  {...props} />

    ),
    profile: (props) => (
      <AntDesign name="user" size={18}  {...props} />
    ),
  };