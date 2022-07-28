import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3em', maxWidth: '400px' }}>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => (
  <Card question="This is the question" answer="This is the answer" />
);

export const IsBookmarked = () => (
  <Card
    question="This is the question"
    answer="This is the answer"
    isBookmarked
  />
);
