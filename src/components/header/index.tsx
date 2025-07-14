import Link from "next/link";

const Index = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link href="/">Next</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/dashboard"
                className="hover:text-yellow-400 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-yellow-400 transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Index;
