import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from "./components/FriendContact";
import NewFriend from './components/NewFriend';

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.mount('#app');
