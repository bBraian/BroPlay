import React, { useState } from "react";
import { View, FlatList} from "react-native";

import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Backgound";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const [category, setCategory] = useState('');

    const navigation = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Amigos do teu Pai',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que nós vamos meter um Pubg e ganhar essa porra'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Amigos do teu Pai',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que nós vamos meter um Pubg e ganhar essa porra'
        },
        {
            id: '3',
            guild: {
                id: '2',
                name: 'Amigos do teu Pai',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que nós vamos meter um Pubg e ganhar essa porra'
        },
        {
            id: '4',
            guild: {
                id: '2',
                name: 'Amigos do teu Pai',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que nós vamos meter um Pubg e ganhar essa porra'
        },
        {
            id: '5',
            guild: {
                id: '2',
                name: 'Amigos do teu Pai',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que nós vamos meter um Pubg e ganhar essa porra'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppoitmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <View>
                <CategorySelect
                    CategorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <ListHeader 
                title="Partidas agendadas"
                subtitle="Total 6"
            />

            <FlatList 
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item}
                        onPress={handleAppoitmentDetails}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider lineWidth="75%"/>}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 69}}
            />

        </Background>
    );
}