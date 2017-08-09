import HomePage from "app/components/pages/Home/HomePage";
import MessagesPage from "app/components/pages/Messages/MessagesPage";
import SearchPage from "app/components/pages/Search/SearchPage";
import NotificationsPage from "app/components/pages/Notifications/NotificationsPage";

const routes = {
  Home: { screen: HomePage },
  Search: { screen: SearchPage },
  Notifications: { screen: NotificationsPage },
  Messages: { screen: MessagesPage }
};

export default routes;
