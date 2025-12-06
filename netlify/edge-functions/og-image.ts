export default async (request: Request, context: any) => {
  const url = new URL(request.url);
  const hash = url.hash.replace('#', '');
  
  const response = await context.next();
  const html = await response.text();
  
  if (!hash) {
    return new Response(html, response);
  }

  const projectTitle = decodeURIComponent(hash);
  const imageUrl = `${url.origin}/home_construction.jpg`;
  
  const updatedHtml = html
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="CLAUSE INTERIOR FITS - ${projectTitle}"`
    )
    .replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${imageUrl}"`
    );

  return new Response(updatedHtml, {
    headers: response.headers,
  });
};

export const config = { path: "/*" };
