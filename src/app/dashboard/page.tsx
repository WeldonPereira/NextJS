const page = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Dashboard - Next.js</h1>
      
      <p className="mb-4 text-gray-700">
        Este projeto está usando <span className="font-semibold">Next.js</span>, um framework React que permite
        criar aplicações web modernas com renderização híbrida (SSR e SSG), roteamento automático
        e otimização de performance.
      </p>
      
      <p className="mb-6 text-gray-700">
        A estrutura do projeto conta com a <code className="bg-gray-100 px-1 rounded">App Router</code>, localizada na pasta 
        <code className="bg-gray-100 px-1 rounded">src/app</code>. Cada subpasta com um arquivo 
        <code className="bg-gray-100 px-1 rounded">page.tsx</code> representa uma rota acessível no navegador.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 text-blue-500">Informações do projeto:</h2>
      
      <ul className="list-disc list-inside text-gray-800 space-y-1 mb-6">
        <li>📦 Framework: Next.js 14 (ou superior)</li>
        <li>⚛️ Linguagem: TypeScript</li>
        <li>🎨 Estilos: Tailwind CSS e/ou CSS Modules</li>
        <li>🚀 Renderização híbrida: SSG, SSR e ISR</li>
      </ul>
      
      <p className="text-gray-700">
        Você pode acessar outras páginas, como <code className="bg-gray-100 px-1 rounded">/sobre</code>, diretamente pelo navegador ou adicionando links no layout.
      </p>
    </div>
  );
};

export default page;
