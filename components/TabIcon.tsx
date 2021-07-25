import React from "react"
import {
    View,
    Image,
    ImageSourcePropType
} from "react-native"
import { COLORS } from "../constants"

type TabIcon = {
    focused: boolean;
    icon: ImageSourcePropType
}

const TabIcon = ({ focused, icon }: TabIcon) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? COLORS.primary : COLORS.gray
                }}
            />
        </View>
    )
}

export default TabIcon;