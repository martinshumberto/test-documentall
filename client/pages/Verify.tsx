import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import { VscLoading } from 'react-icons/vsc';
import { Link, useRoutes } from 'react-router-dom';
import LoadingSpinner from '@/components/LoadingSpinner';

function Verify() {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-24 text-center">
        <div className="flex flex-col items-center rounded-xl bg-white py-10 px-4 md:py-32 md:px-32 shadow-2xl shadow-primary/20 border-4 border-primary max-w-4xl mx-6">
          <h1 className="text-4xl font-bold">
            Estamos verificando todas as mensagens em seu arquivo...
          </h1>

          <div className="mt-10">
            <LoadingSpinner />
          </div>

          <small className="font-md text-gray-500 text-sm">
            Você quer{' '}
            <Link to="/" className="underline text-primary">
              cancelar e voltar ao início
            </Link>
            ?
          </small>
        </div>
      </div>
    </div>
  );
}

export default Verify;
