// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import { Entypo } from '@expo/vector-icons';

export function TabBarIconCustom({ style, ...rest }: IconProps<ComponentProps<typeof Entypo>['name']>) {
    return <Entypo size={35} {...rest} />;
  }
