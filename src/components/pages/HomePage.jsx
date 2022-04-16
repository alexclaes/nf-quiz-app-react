import CardList from "../CardList";

export default function HomePage({ cards, onToggleBookmark }) {
  return <CardList cards={cards} onToggleBookmark={onToggleBookmark} />;
}
