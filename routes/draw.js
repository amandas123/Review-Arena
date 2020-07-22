import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const baseDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    About: {
      screen: AboutStack,
    },
  },
  {
    drawerBackgroundColor: "#545151",
  }
);

export default createAppContainer(baseDrawerNavigator);
