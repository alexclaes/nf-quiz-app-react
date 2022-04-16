import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookmarkIcon from "./components/icons/BookmarkIcon";
import CreateIcon from "./components/icons/CreateIcon";
import HomeIcon from "./components/icons/HomeIcon";
import ProfileIcon from "./components/icons/ProfileIcon";
import BookmarksPage from "./components/pages/BookmarksPage";
import CreatePage from "./components/pages/CreatePage";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import PageWrapper from "./components/PageWrapper";

const pages = [
  {
    id: "home",
    IconComponent: HomeIcon,
    PageComponent: HomePage,
  },
  {
    id: "bookmarks",
    IconComponent: BookmarkIcon,
    PageComponent: BookmarksPage,
  },
  {
    id: "create",
    IconComponent: CreateIcon,
    PageComponent: CreatePage,
  },
  {
    id: "profile",
    IconComponent: ProfileIcon,
    PageComponent: ProfilePage,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const CurrentPageComponent = pages
    .filter(({ id }) => id === currentPage)
    .map(({ PageComponent }) => PageComponent)[0];

  console.log(CurrentPageComponent);
  console.log(HomePage);

  function onNavItemClick(pageId) {
    setCurrentPage(pageId);
  }

  return (
    <>
      <Header>Quiz-App</Header>
      <PageWrapper>
        <CurrentPageComponent />
      </PageWrapper>
      <Footer navItems={pages} onNavItemClick={onNavItemClick} />
    </>
  );
}

export default App;
