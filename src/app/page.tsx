const page = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4 text-green-600">
        Bem-vindo ao projeto Next.js
      </h1>

      <p className="mb-4 text-gray-700">
        <span className="font-semibold">Next.js</span> é um framework poderoso
        para construir aplicações web usando React. Ele facilita a criação de
        rotas, renderização do lado do servidor (SSR), geração de sites
        estáticos (SSG) e muito mais.
      </p>

      <p className="mb-6 text-gray-700">
        Com Next.js, você combina o melhor dos dois mundos: velocidade de
        carregamento e flexibilidade para desenvolver interfaces modernas.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-500">
        Caminho para se tornar Full Stack:
      </h2>

      <ul className="list-disc list-inside text-gray-800 space-y-1 mb-6">
        <li>🌱 Aprender HTML, CSS e JavaScript</li>
        <li>⚛️ Dominar React e Next.js</li>
        <li>🗄️ Estudar bancos de dados (SQL e NoSQL)</li>
        <li>🔧 Praticar desenvolvimento de APIs (Node.js, Express, etc.)</li>
        <li>🚀 Conhecer boas práticas de deploy e hospedagem</li>
        <li>🛠️ Explorar ferramentas modernas: Docker, CI/CD, testes, etc.</li>
      </ul>

      <p className="text-gray-700">
        Esse é só o começo! Com dedicação, prática e curiosidade, você pode se
        tornar um desenvolvedor Full Stack e criar projetos incríveis.
      </p>
    </div>
  );
};

export default page;
