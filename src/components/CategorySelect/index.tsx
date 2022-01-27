import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";

import { Category } from "../Category";
import { categories } from "../../utils/categories";

type Props = {
    CategorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({ CategorySelected, setCategory, hasCheckBox = false } : Props) {
    return (
        <ScrollView 
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
        
        {
            categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === CategorySelected}
                    onPress={() => setCategory(category.id)}
                    hasCheckBox={hasCheckBox}
                />
            ))
        }

        </ScrollView>
    );
}