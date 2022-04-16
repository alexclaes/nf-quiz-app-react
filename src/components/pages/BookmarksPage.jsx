import CardList from "../CardList";

export default function BookmarksPage({ cards, onToggleBookmark }) {
  return <CardList cards={cards} onToggleBookmark={onToggleBookmark} />;
}
