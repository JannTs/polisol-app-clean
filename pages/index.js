// pages/index.js
import dynamic from 'next/dynamic';

const EcwidStorefront = dynamic(
  () => import('@ecwid/nextjs-ecwid-plugin').then(mod => mod.EcwidStorefront),
  { ssr: false }
);

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Добро пожаловать в Polisol Store</h1>
      <EcwidStorefront storeId="10995149" layout="grid" />
    </main>
  );
}
