import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch } from "react-redux";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { routerOptions } from "../../routerOptions";

const HomeTab = createBottomTabNavigator();

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <HomeTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        ...routerOptions.tabOptions,
      }}
    >
      <HomeTab.Screen
        name="Posts"
        options={() => ({
          ...routerOptions.postsOptions(dispatch),
        })}
        component={PostsScreen}
      />
      <HomeTab.Screen
        name="Create"
        options={() => ({
          ...routerOptions.createPostsOptions(),
        })}
        component={CreatePostsScreen}
      />
      <HomeTab.Screen
        name="Profile"
        options={{ ...routerOptions.profileOptions() }}
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};
