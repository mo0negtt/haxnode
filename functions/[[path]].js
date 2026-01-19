export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Si la ruta empieza con /api, mandamos la petición a tu Worker de mo0negtt
  if (url.pathname.startsWith('/api')) {
    const workerUrl = `https://haxnode.mo0negtt.workers.dev${url.pathname.replace('/api', '')}`;
    
    // Clonamos la petición original para enviarla al Worker
    return fetch(workerUrl, context.request);
  }
  
  // Si no es /api, que siga cargando la web normal (el editor)
  return context.next();
}
