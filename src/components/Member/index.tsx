import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

type MemberProps = {
    id: string;
    username: string;
    avatarUrl: string;
    status: string;
}

type Props = {
    data: MemberProps
}

export function Member({ data } : Props) {
    const isOnline = data.status === 'online';
    const { on, primary } = theme.colors;

    return (
        <View style={styles.container}>
            <Avatar 
                urlImage={data.avatarUrl}
            />

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>
                <View style={styles.status}>
                    <View 
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />
                    <Text style={styles.nameStatus}>
                        { isOnline ? 'Disponível' : 'Ocupado' }
                    </Text>
                </View>
            </View>

        </View>
    )
}