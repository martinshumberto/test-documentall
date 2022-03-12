import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/lib/data.json';
import { StoreProvider } from './contexts/store';

function App() {
  const page = useRoutes(routes);

  return (
    <>
      <EmojiProvider data={emojiData}>
        <div>{page}</div>
      </EmojiProvider>
    </>
  );
}

export default App;
