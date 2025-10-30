// Script para verificar que el backend esté funcionando
const http = require('http');
const https = require('https');

// Use NEXT_PUBLIC_API_URL when available (Vercel), otherwise REACT_APP_API_URL, then localhost for local dev
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3001';

console.log('🔍 Verificando conexión con el backend...');
console.log(`📡 URL del backend: ${BACKEND_URL}`);
console.log('');

function verificarBackend(url) {
  return new Promise((resolve, reject) => {
    const isHttps = url.startsWith('https://');
    const client = isHttps ? https : http;
    
    const request = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });
    
    request.on('error', (error) => {
      reject(error);
    });
    
    // Timeout de 5 segundos
    request.setTimeout(5000, () => {
      request.destroy();
      reject(new Error('Timeout: El servidor no respondió en 5 segundos'));
    });
  });
}

async function main() {
  try {
    const resultado = await verificarBackend(BACKEND_URL);
    
    console.log('✅ ¡Backend conectado exitosamente!');
    console.log(`📊 Status: ${resultado.status}`);
    console.log(`🔧 Headers CORS: ${resultado.headers['access-control-allow-origin'] || 'No configurado'}`);
    console.log('');
    
    if (resultado.status === 200) {
      console.log('🎉 El backend está funcionando correctamente.');
    } else if (resultado.status === 404) {
      console.log('⚠️ El backend está funcionando pero no tiene una ruta raíz configurada (404 es normal).');
    } else {
      console.log(`⚠️ El backend respondió con status ${resultado.status}`);
    }
    
    console.log('');
    console.log('📋 Próximo paso: Ejecuta npm start para iniciar el frontend');
    
  } catch (error) {
    console.log('❌ Error al conectar con el backend:');
    console.log(`   ${error.message}`);
    console.log('');
    console.log('🔧 Posibles soluciones:');
    console.log('   1. Verifica que el backend esté ejecutándose en puerto 3001');
    console.log('   2. Ejecuta en el directorio del backend: node index.js');
    console.log('   3. Verifica la configuración en el archivo .env del backend');
    console.log('');
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 El error ECONNREFUSED indica que no hay nada ejecutándose en el puerto 3001');
    }
  }
}

main();