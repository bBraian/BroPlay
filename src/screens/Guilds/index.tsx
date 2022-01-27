import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Guild";

type Props = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected } : Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '2',
            name: 'Servidor Discord',
            icon: null,
            owner: true
        },
        {
            id: '3',
            name: 'A terra não é plana',
            icon: null,
            owner: true
        },
        {
            id: '4',
            name: 'A terra não é plana',
            icon: null,
            owner: true
        },
        {
            id: '5',
            name: 'A terra não é plana',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>

            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild 
                        data={item} 
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider lineWidth="70%" />}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 84}}
                style={styles.guilds}
            />

        </View>
    );
}