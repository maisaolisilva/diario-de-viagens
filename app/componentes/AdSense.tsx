'use client';

import { useEffect } from 'react';

export default function AdSense() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3489210929203210";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return null; // Não renderiza nada, só injeta o script após a montagem da página
}
