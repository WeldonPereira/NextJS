const page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        📚 Sobre o Next.js
      </h1>

      <section className="bg-gray-100 rounded-xl shadow p-4">
        <h2 className="text-2xl font-semibold mb-2">O que é Next.js?</h2>
        <p className="text-gray-700">
          Next.js é um framework poderoso para aplicações web modernas baseado
          no React. Ele facilita a criação de sites rápidos, dinâmicos e
          escaláveis, oferecendo recursos como renderização híbrida (SSR e SSG),
          roteamento automático, API routes e muito mais.
        </p>
      </section>

      <section className="bg-gray-100 rounded-xl shadow p-4">
        <h2 className="text-2xl font-semibold mb-2">Principais recursos</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🔧 Server-side Rendering (SSR)</li>
          <li>⚡ Static Site Generation (SSG)</li>
          <li>🚀 Incremental Static Regeneration (ISR)</li>
          <li>🧩 Roteamento baseado em arquivos</li>
          <li>🌐 API Routes para back-end integrado</li>
          <li>🎨 Suporte completo ao CSS e Tailwind CSS</li>
        </ul>
      </section>

      <section className="bg-gray-100 rounded-xl shadow p-4">
        <h2 className="text-2xl font-semibold mb-2">Por que usar Next.js?</h2>
        <p className="text-gray-700">
          É ideal para criar aplicações escaláveis, melhorar SEO através de
          SSR/SSG, simplificar o roteamento, e ainda permite integrar back-end
          facilmente com API routes. Além disso, possui ótima performance,
          suporte ativo da comunidade e integração com Vercel.
        </p>
      </section>

      <section className="bg-gray-100 rounded-xl shadow p-4">
        <h2 className="text-2xl font-semibold mb-2">
          Como se tornar Full Stack com Next.js?
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Aprenda HTML, CSS e JavaScript</li>
          <li>Estude React (fundamentos, hooks, context)</li>
          <li>Domine Next.js (SSR, SSG, API Routes)</li>
          <li>Explore bancos de dados (SQL ou NoSQL)</li>
          <li>Implemente autenticação e autorização</li>
          <li>Hospede projetos na Vercel ou outros provedores</li>
        </ol>
      </section>
    </div>
  );
};

export default page;
