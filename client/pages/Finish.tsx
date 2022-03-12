import { Link } from 'react-router-dom';
import { Emoji } from 'react-apple-emojis';

function Finish() {
  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-10 px-4 md:py-24 md:px-44 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl mx-6">
          <h1 className="text-4xl font-bold text-primary">
            É isso aí!{' '}
            <Emoji name="rocket" width={38} className="inline mb-2" />
          </h1>

          <h1 className="text-4xl font-bold mt-12">
            Sua lista está pronta para entrar em produção!
          </h1>

          <p className="text-lg font-medium px-10 mt-6 leading-6">
            Já guardamos todos as mensagens válidas para que você possa usá-las
            em uma campanha no futuro.
          </p>

          <small className="font-md text-gray-500 text-sm mt-5">
            <Link to="/" className="underline text-primary">
              Voltar ao início
            </Link>{' '}
            para iniciar outra verificação.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Finish;
