import { Image } from "react-native";
import { perfilIconStyle } from "../../app.style";

const Imagen = ({ size, focused, color }) => {
  return (
    <Image
      source={{
        uri: "https://randomuser.me/api/portraits/lego/1.jpg",
      }}
      style={perfilIconStyle(size, focused, color)}
    />
  );
};

export default Imagen;
