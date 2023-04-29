import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/Fontisto';

const createPostOptions = () => {
    const navigation = useNavigation();
    return {
        //header
        title: "Create post",
        headerStyle: {
            height: 88,

            borderBottomWidth: 1,
            borderBottomColor: "#b3b3b3",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
        },

        headerLeft: () => (
            <TouchableOpacity style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                left: 16
            }} onPress={() => navigation.navigate("Posts")}>
                <ArrowIcon name="arrowleft" color="#BDBDBD" size={24} />
            </TouchableOpacity>
        ),

        //Tab
        tabBarIcon: ({ focused, size, color }) => (
            <View style={{ backgroundColor: "#FF6C00", width: 70, alignItems: "center", borderRadius: 20, padding: 13.5 }}>
                <PlusIcon name="plus-a" color="#FFFFFF" size={13} />
            </View>
        ),
        tabBarStyle: { display: "none" }

    };
}

export default createPostOptions;
