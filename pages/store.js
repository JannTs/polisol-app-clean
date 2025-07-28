import { useEffect, useState } from 'react';
import { BuyNowButton } from '@ecwid/nextjs-ecwid-plugin';

export default function Store() {
  const [ecwidReady, setEcwidReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tryEcwidInit = () => {
        if (window.Ecwid && window.Ecwid.OnAPILoaded) {
          window.Ecwid.OnAPILoaded.add(() => {
            setEcwidReady(true);
          });
        } else {
          // Повторим попытку через 100 мс
          setTimeout(tryEcwidInit, 100);
        }
      };
      tryEcwidInit();
    }
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Buy Now Button Example</h1>
      {ecwidReady ? (
        <BuyNowButton
          storeId="10995149"
          productId="671365720"
          isShowPrice={true}
        />
      ) : (
        <p>Загрузка Ecwid...</p>
      )}
    </main>
  );
}
