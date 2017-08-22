import HomePage from "app/components/pages/Home/HomePage";
import MessagesPage from "app/components/pages/Messages/MessagesPage";
import SearchPage from "app/components/pages/Search/SearchPage";
import NotificationsPage from "app/components/pages/Notifications/NotificationsPage";
import SyllabusPage from "app/components/pages/Syllabus/SyllabusPage";

const routes = {
  Home: { screen: HomePage },
  Search: { screen: SearchPage },
  Notifications: { screen: NotificationsPage },
  Messages: { screen: MessagesPage },
  Syllabus: { screen: SyllabusPage }
};

export default routes;
