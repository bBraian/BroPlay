import React, { ReactNode, useState } from "react";
import { View, Modal, ModalProps, TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import { Background } from "../Backgound";
import { styles } from "./styles";

type Props = ModalProps & {
    children: ReactNode;
    handleCloseGuildSelector: ()=>void;
}

export function ModalView({ children, handleCloseGuildSelector, ...rest } : Props) {
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={handleCloseGuildSelector}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <TouchableOpacity>
                                <View style={styles.bar} />
                            </TouchableOpacity>
                            
                            { children }
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
}