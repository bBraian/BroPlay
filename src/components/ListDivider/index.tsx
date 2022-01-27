import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {
    lineWidth: string
}

export function ListDivider({ lineWidth } : Props) {
    return (
        <View style={[
            styles.container,
            {
                width: lineWidth
            }
            ]} 
        /> 
    );
}