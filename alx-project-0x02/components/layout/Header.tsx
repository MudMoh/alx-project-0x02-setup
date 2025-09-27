import Link from 'next/link'; 


const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
       
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;