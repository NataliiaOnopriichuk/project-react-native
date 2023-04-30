import ProfileIcon from "react-native-vector-icons/Feather";


const profileOptions = () => {
    return {
        tabBarIcon: ({ color }) => (
            <ProfileIcon name="user" color={color} size={24} />
        ),
        headerShown: false,
    };
};

export default profileOptions;
