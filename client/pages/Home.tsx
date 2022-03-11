import Button from '@/components/Button';
import { Emoji } from 'react-apple-emojis';

function Home() {
  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-10 px-4 md:py-20 md:px-48 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl mx-6">
          <div className="flex">
            <h1 className="text-4xl font-bold">
              Verifique a validade de uma lista de mensagens{' '}
              <Emoji name="thumbs-up" width={38} className="inline mb-2" />
            </h1>
          </div>

          <div className="mt-10">
            <Button size={'lg'}>
              Selecionar lista
              <input
                className="absolute left-0 top-0 opacity-0 h-full z-50 cursor-pointer"
                type="file"
              />
            </Button>
          </div>

          <p className="text-lg font-medium px-10 mt-6 leading-6">
            Selecione um arquivo CSV para iniciar a verificação de uma lista com
            números e mensagens de SMS.
          </p>

          <small className="font-md text-gray-500 text-sm mt-6">
            Use nosso{' '}
            <a href="" className="underline text-primary">
              modelo
            </a>{' '}
            de arquivo se você tem alguma dúvida.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Home;
