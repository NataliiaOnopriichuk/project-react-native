import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Icons
import ArrowIcon from 'react-native-vector-icons/AntDesign';



const mapOptions = () => {
    const navigation = useNavigation()
    return ({
        // Header
        title: "Map",
        headerStyle: {
            height: 88,

            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontWeight: "bold",
            fontSize: 17,
            lineHeight: 22,
        },
        headerLeft: () => (
            <TouchableOpacity
                activeOpacity={0.1}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    left: 16
                }}
                onPress={() => navigation.goBack()}
            >
                <ArrowIcon name="arrowleft" color="#BDBDBD" size={24} />
            </TouchableOpacity>
        ),
    })
}

export default mapOptions;
