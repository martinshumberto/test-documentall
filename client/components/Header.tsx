import { BsTelephone } from 'react-icons/bs';

function Header() {
  return (
    <header className="mx-auto bg-white shadow-lg shadow-gray-200/50 h-30 text-lg flex items-center justify-center h-32">
      <div className="flex items-center justify-center text-4xl font-extrabold text-primary">
        <div>
          <BsTelephone size={46} className="text-secondary" />
        </div>
        Truephone
      </div>
    </header>
  );
}

export default Header;
