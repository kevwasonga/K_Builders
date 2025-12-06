export const updateMetaTags = (title: string, description: string, imageUrl: string) => {
  document.title = `${title} - Clause Interior Fits`;

  const updateMetaTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  const updateNameMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.content = content;
  };

  updateMetaTag('og:title', `CLAUSE INTERIOR FITS - ${title}`);
  updateMetaTag('og:description', description);
  updateMetaTag('og:image', imageUrl);
  updateMetaTag('og:url', window.location.href);

  updateNameMetaTag('twitter:title', `CLAUSE INTERIOR FITS - ${title}`);
  updateNameMetaTag('twitter:description', description);
  updateNameMetaTag('twitter:image', imageUrl);
};
