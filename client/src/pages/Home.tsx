import { useState } from 'react';
import Button from '@/components/Button';
import { BsTelephone } from 'react-icons/bs';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-20 px-48 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl">
          <h1 className="text-4xl font-bold">
            Verifique a validade de uma lista de mensagens 👍
          </h1>

          <Button size={'lg'}>Selecionar lista</Button>

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
