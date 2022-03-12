import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { CgClose } from 'react-icons/cg';
import { BiCheck } from 'react-icons/bi';
import { Emoji } from 'react-apple-emojis';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '@/contexts/store';
import { api } from '@/services/api';

function Result() {
  const [count, setCount] = useState(0);
  const { result } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (result) {
      let i = 0;
      result.forEach((item) => {
        if (item.valid === true) {
          i++;
        }
      });
      setCount(i);
    } else {
      navigate('/');
    }
  });

  const saveListing = async () => {
    try {
      await api.post('/save', result).then(() => {
        navigate('/finish');
      });
    } catch (error) {
      console.log(error);
    }
  };

  function limiter(text, count) {
    return text?.slice(0, count) + (text?.length > count ? '...' : '');
  }

  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-10 px-4 md:py-20 md:px-8 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl mx-6">
          <h1 className="text-4xl font-bold md:px-32">
            Encontramos <span className="text-secondary">{count}</span>{' '}
            mensagens válidas em sua lista{' '}
            <Emoji name="party-popper" width={38} className="inline mb-2" />
          </h1>

          <div className="mt-10 w-full">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full">
                      <thead className="border-b-2">
                        <tr>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-bold text-left text-gray-800"
                          >
                            Número
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-bold text-left text-gray-800"
                          >
                            Prévia da mensagem
                          </th>
                          <th
                            scope="col"
                            className="py-3 px-6 text-sm font-bold text-left text-gray-800"
                          >
                            Resultado
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result?.map((item) => {
                          return (
                            <tr className="text-sm">
                              <td className="px-6 py-4 whitespace-no-wrap border-b text-left">
                                {item.phone}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b text-left">
                                {limiter(item.message, 68)}
                              </td>
                              <td className="px-6 py-4 whitespace-no-wrap border-b pl-1">
                                {item.valid ? (
                                  <div className="flex items-center space-x-3 justify-end">
                                    <span>Válido</span>
                                    <BiCheck
                                      className="text-green-600"
                                      size={18}
                                    />
                                  </div>
                                ) : (
                                  <div className="flex items-center space-x-3 justify-end">
                                    <span>Inválida</span>
                                    <CgClose className="text-red-600" />
                                  </div>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold">
              Está pronto para prosseguir?{' '}
              <Emoji name="thinking-face" width={25} className="inline mb-2" />
            </h2>
            <div className="flex space-x-4 mt-5 items-center">
              <Link to="/">
                <Button
                  theme="outline"
                  icon={<CgClose className="text-gray-500" size={22} />}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                onClick={saveListing}
                icon={<BiCheck className="text-white" size={25} />}
              >
                Salvar lista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
