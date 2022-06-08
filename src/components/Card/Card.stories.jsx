import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div style={{ paddingTop: '3em', maxWidth: '400px' }}>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => (
  <Card id="123" question="Some question" answer="Some answer" />
);

export const Bookmarked = () => (
  <Card id="123" question="Some question" answer="Some answer" isBookmarked />
);
