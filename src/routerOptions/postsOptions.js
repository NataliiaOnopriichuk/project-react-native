import { TouchableOpacity } from 'react-native-gesture-handler';
import PostsIcon from 'react-native-vector-icons/AntDesign';
import LogOut from '../components/LogOut/LogOut';


const postsOptions = () => {
  return {
    // Header
    title: "Posts",
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
    headerRight: () => (
      <TouchableOpacity style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        right: 16
      }}>
        <LogOut />
      </TouchableOpacity>
    ),

    //Tab
    tabBarIcon: ({ color }) => (
      <PostsIcon name="appstore-o" color={color} size={24} />
    ),
  };
};

export default postsOptions;
