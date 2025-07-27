export default async function handler(req, res) {
  const { productId, slug } = req.query;

  const storeId = '10995149';
  const baseUrl = `https://store${storeId}.company.site`;

  let targetUrl = baseUrl;
  if (productId) {
    const slugPart = slug || 'product';
    targetUrl = `${baseUrl}/#!/${slugPart}/p/${productId}`;
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; polisol-proxy/1.0)'
      }
    });

    if (!response.ok) {
      throw new Error(`Ecwid responded with status ${response.status}`);
    }

    let html = await response.text();
    html = html.replace(/<meta[^>]*http-equiv=["']X-Frame-Options["'][^>]*>/gi, '');

    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(html);
  } catch (err) {
    console.error('Ошибка при загрузке Ecwid:', err.message);
    res.status(500).send('Ошибка при загрузке контента');
  }
}
