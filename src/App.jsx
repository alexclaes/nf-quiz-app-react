import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
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
import fetchData from "./lib/fetchData";

const pages = [
  {
    id: "home",
    IconComponent: HomeIcon,
  },
  {
    id: "bookmarks",
    IconComponent: BookmarkIcon,
  },
  {
    id: "create",
    IconComponent: CreateIcon,
  },
  {
    id: "profile",
    IconComponent: ProfileIcon,
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cards, updateCards] = useImmer([]);

  function onNavItemClick(pageId) {
    setCurrentPage(pageId);
  }

  function onToggleBookmark(id) {
    updateCards((draft) => {
      const index = draft.findIndex((card) => card.id === id);
      if (index !== -1) {
        draft[index].isBookmarked = !draft[index].isBookmarked;
      }
    });
  }

  useEffect(() => {
    fetchData("https://opentdb.com/api.php?amount=10&type=multiple", (data) => {
      updateCards((draft) => {
        draft = data.results.map((result, index) => ({
          id: index,
          question: result.question,
          answer: result.correct_answer,
          isBookmarked: false,
        }));
        return draft;
      });
    });
  }, []);

  return (
    <>
      <Header>Quiz-App</Header>
      <PageWrapper>
        {currentPage === "home" && (
          <HomePage cards={cards} onToggleBookmark={onToggleBookmark} />
        )}
        {currentPage === "bookmarks" && (
          <BookmarksPage
            cards={cards.filter(({ isBookmarked }) => isBookmarked)}
            onToggleBookmark={onToggleBookmark}
          />
        )}
        {currentPage === "create" && <CreatePage />}
        {currentPage === "profile" && <ProfilePage />}
      </PageWrapper>
      <Footer navItems={pages} onNavItemClick={onNavItemClick} />
    </>
  );
}

export default App;
