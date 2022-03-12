import { CgClose } from 'react-icons/cg';
import { BiCheck } from 'react-icons/bi';

function Table({ data }) {
  function limiter(text, count) {
    return text?.slice(0, count) + (text?.length > count ? '...' : '');
  }

  return (
    <>
      <div className="overflow-x-auto">
        <div className="inline-block py-2 min-w-full">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full">
              <thead className="border-b-2">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 md:px-6 text-sm font-bold text-left text-gray-800"
                  >
                    Número
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 md:px-6 text-sm font-bold text-left text-gray-800"
                  >
                    Prévia da mensagem
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 md:px-6 text-sm font-bold text-left text-gray-800"
                  >
                    Resultado
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => {
                  return (
                    <tr className="text-sm">
                      <td className="px-2 py-4 md:px-6 whitespace-no-wrap border-b text-left">
                        {limiter(item.phone, 15)}
                      </td>
                      <td className="px-2 py-4 md:px-6 whitespace-no-wrap border-b text-left">
                        {limiter(item.message, 68)}
                      </td>
                      <td className="px-2 py-4 md:px-6 whitespace-no-wrap border-b pl-1">
                        {item.valid ? (
                          <div className="flex items-center space-x-3 justify-end">
                            <span>Válido</span>
                            <BiCheck className="text-green-600" size={18} />
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
    </>
  );
}

export default Table;
