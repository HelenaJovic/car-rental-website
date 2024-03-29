import Home from "../components/Home.vue";
import Register from "../components/Register.vue";
import UpdateUser from "../components/UpdateUser.vue";
import Login from "../components/Login.vue";
import YourProfile from "../components/YourProfile.vue";

export default [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/display", component: YourProfile },
  { path: "/updateUser", component: UpdateUser }
];
