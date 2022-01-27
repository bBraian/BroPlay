import React, { useState } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Background } from "../../components/Backgound";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildModal, setOpenGuildModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuildSelector() {
        setOpenGuildModal(true);
    }

    function handleCloseGuildSelector() {
        setOpenGuildModal(false);
    }

    function handleGuildSelect(guildSelected: GuildProps) {
        setGuild(guildSelected)
        setOpenGuildModal(false);
    }
    
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                    <Header 
                        title="Agendar Partida"
                    />

                    <Text style={[styles.label, {marginLeft: 24, marginTop: 34, marginBottom: 18}]}>
                        Category
                    </Text>

                    <CategorySelect 
                        hasCheckBox
                        setCategory={setCategory}
                        CategorySelected={category}
                    />

                    <View style={styles.form}>

                        <RectButton onPress={handleOpenGuildSelector}>
                            <View style={styles.select}>

                                {
                                   guild.icon ? <GuildIcon /> : <View style={styles.image} />
                                }
                                

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Select a server'}
                                    </Text>
                                </View>

                                <Feather 
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom:12}]}>
                                    Day / Month
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom:12}]}>
                                    Hour : Minute
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                            
                            
                        </View>
                        
                        <View style={[styles.field, {marginBottom: 12}]}>
                            <Text style={styles.label}>
                                Description
                            </Text>
                            <Text style={styles.caracteresLimit}>
                                Max 100 character
                            </Text>
                        </View>

                        <TextArea 
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />

                        <View style={styles.footer}>
                            <Button title="Agendar" />
                        </View>
                        

                    </View>
            </ScrollView>

            <ModalView visible={openGuildModal} onRequestClose={handleCloseGuildSelector} handleCloseGuildSelector={handleCloseGuildSelector} >
                <Guilds handleGuildSelected={handleGuildSelect} />
            </ModalView>            
        </KeyboardAvoidingView>
    );
}