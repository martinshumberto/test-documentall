import Button from '@/components/Button';
import { useStore } from '@/contexts/store';
import { api } from '@/services/api';
import { useState } from 'react';
import { Emoji } from 'react-apple-emojis';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { file, setFile, setResult } = useStore();
  const navigate = useNavigate();

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      await api({
        method: 'post',
        url: '/upload',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(({ data }) => {
        const remap = data?.data?.map((item) => {
          item.file = data.file.id;
          return item;
        });
        setResult(remap);
        navigate('/verify');
      });
    } catch (error) {
      console.log(error);
    }
  };

  const forceDownload = (path) => {
    window.location.href = path;
  };

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
            <form id="form" onSubmit={uploadFile}>
              <Button size={'lg'}>
                Selecionar lista
                <input
                  className="absolute left-0 top-0 opacity-0 h-full z-50 cursor-pointer"
                  type="file"
                  accept=".csv"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                    uploadFile(event.target.files[0]);
                  }}
                />
              </Button>
            </form>
          </div>

          <p className="text-lg font-medium px-10 mt-6 leading-6">
            Selecione um arquivo CSV para iniciar a verificação de uma lista com
            números e mensagens de SMS.
          </p>

          <small className="font-md text-gray-500 text-sm mt-6">
            Use nosso{' '}
            <a
              onClick={() => forceDownload('/modelo.csv')}
              className="underline text-primary cursor-pointer"
              download="modelo.csv"
            >
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
