import BookmarkButton from './BookmarkButton';

export default {
  title: 'Components/BookmarkButton',
  component: BookmarkButton,
};

export const Default = () => <BookmarkButton />;

export const Active = () => <BookmarkButton active={true} />;
