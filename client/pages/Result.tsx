import { useState } from 'react';
import Button from '@/components/Button';
import { CgClose } from 'react-icons/cg';
import { BiCheck } from 'react-icons/bi';
import { Emoji } from 'react-apple-emojis';
import { Link } from 'react-router-dom';

function Result() {
  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-10 px-4 md:py-20 md:px-48 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl mx-6">
          <h1 className="text-4xl font-bold px-36">
            Encontramos <span className="text-secondary">32</span> mensagens
            válidas em sua lista{' '}
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
                        <tr className="bg-white last:border-none border-b-2 text-left">
                          <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap">
                            (62) 99999-9901
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap">
                            Olá fulano, você está recebendo essa mensagem...
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <span>Válida</span>
                              <BiCheck className="text-green-500" size={25} />
                            </div>
                          </td>
                        </tr>
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
            <div className="flex space-x-4 mt-5">
              <Link to="/">
                <Button
                  theme="outline"
                  icon={<CgClose className="text-gray-500" size={22} />}
                >
                  Cancelar
                </Button>
              </Link>
              <Link to="/finish">
                <Button icon={<BiCheck className="text-white" size={25} />}>
                  Salvar lista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
