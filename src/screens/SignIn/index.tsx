import React from "react";
import { 
  View, 
  Text, 
  Image
} from "react-native";
import IllustationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Backgound";


export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>


        <Image 
          source={IllustationImg} 
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>

          <Text style={styles.title}>
            Conecte-se{`\n`} 
            e organize suas{`\n`} 
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          <ButtonIcon 
            title="Entrar com Discord" 
            onPress={handleSignIn}
          />
        </View>

      </View>
    </Background>
  );
}