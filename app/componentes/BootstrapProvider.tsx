'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS do Bootstrap

export function BootstrapProvider({ children }: { children: React.ReactNode }) {
  // useEffect para garantir que o código seja executado no cliente
  useEffect(() => {
    // O Bootstrap será carregado quando o componente for montado
  }, []);

  return <>{children}</>;
}
