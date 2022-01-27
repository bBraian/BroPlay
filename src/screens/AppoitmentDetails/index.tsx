import React from "react";
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Fontisto } from "@expo/vector-icons"
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

import { Background } from "../../components/Backgound";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Braian',
            avatarUrl: 'https://github.com/bBraian.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Derick',
            avatarUrl: 'https://github.com/6derick6.png',
            status: 'ocupado'
        }
    ]
    return (
        <Background>
            <Header 
                title="Details"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Amigos do teu Pai</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challanger sem perder uma partida</Text>
                </View>
                
            </ImageBackground>

            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider lineWidth="79%"/>}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        
        </Background>
    );
}