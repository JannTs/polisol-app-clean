import Script from 'next/script';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Ecwid встроенный вручную</h1>

      <div id="my-store-10995149"></div>
      <div>
        <Script
          id="ecwid-script"
          src="https://app.ecwid.com/script.js?10995149&data_platform=code&data_date=2025-07-27"
          type="text/javascript"
          strategy="afterInteractive"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-10995149");`,
          }}
        />
      </div>
    </main>
  );
}