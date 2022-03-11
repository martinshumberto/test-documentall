import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/lib/data.json';

function App() {
  const page = useRoutes(routes);

  return (
    <>
      <EmojiProvider data={emojiData}>{page}</EmojiProvider>
    </>
  );
}

export default App;
