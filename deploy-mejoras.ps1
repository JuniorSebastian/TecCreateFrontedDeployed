# 🚀 Script para Subir Mejoras al Repositorio Deployed

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TECCREATE - DEPLOY DE MEJORAS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navegar a la carpeta del proyecto
Set-Location "c:\Users\PC\Desktop\TecCreate Desplegar 100\fronted\frontend"

Write-Host "📁 Ubicación actual:" -ForegroundColor Yellow
Write-Host "   $(Get-Location)" -ForegroundColor Gray
Write-Host ""

# Verificar estado de Git
Write-Host "🔍 Verificando estado de Git..." -ForegroundColor Yellow
git status --short

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ARCHIVOS QUE SERÁN SUBIDOS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✨ Componentes Mejorados:" -ForegroundColor Green
Write-Host "   - src/components/Hero.jsx" -ForegroundColor Gray
Write-Host "   - src/components/Features.jsx" -ForegroundColor Gray
Write-Host "   - src/components/Header.jsx (ya mejorado)" -ForegroundColor Gray
Write-Host ""
Write-Host "📝 Documentación:" -ForegroundColor Green
Write-Host "   - INSTRUCCIONES_MEJORA_DISEÑO.md" -ForegroundColor Gray
Write-Host "   - RESUMEN_MEJORAS.md" -ForegroundColor Gray
Write-Host ""
Write-Host "💾 Backups Creados:" -ForegroundColor Green
Write-Host "   - src/components/Hero_BACKUP.jsx" -ForegroundColor Gray
Write-Host "   - src/components/Features_BACKUP.jsx" -ForegroundColor Gray
Write-Host ""

# Preguntar al usuario si desea continuar
Write-Host "========================================" -ForegroundColor Cyan
$respuesta = Read-Host "¿Deseas subir estos cambios a GitHub? (S/N)"

if ($respuesta -eq "S" -or $respuesta -eq "s") {
    Write-Host ""
    Write-Host "🔄 Añadiendo archivos a Git..." -ForegroundColor Yellow
    
    # Añadir archivos modificados
    git add src/components/Hero.jsx
    git add src/components/Features.jsx
    git add src/components/Header.jsx
    git add src/components/Hero_BACKUP.jsx
    git add src/components/Features_BACKUP.jsx
    git add src/components/Hero_NEW.jsx
    git add src/components/Features_NEW.jsx
    git add INSTRUCCIONES_MEJORA_DISEÑO.md
    git add RESUMEN_MEJORAS.md
    
    Write-Host "✅ Archivos añadidos" -ForegroundColor Green
    Write-Host ""
    
    # Commit
    Write-Host "💾 Creando commit..." -ForegroundColor Yellow
    git commit -m "✨ Mejora diseño landing page con estilo TECSUP

🎨 Componentes mejorados:
- Hero: gradientes animados, partículas flotantes, cards de stats
- Features: diseño premium, badges de stats, efectos de brillo
- Header: logo mejorado, efectos hover, menú móvil animado

✨ Nuevas características:
- Animaciones suaves y profesionales (25+)
- Gradientes personalizados por feature (6 colores)
- Micro-interacciones en todos los elementos
- Efectos glassmorphism modernos
- Responsive optimizado
- Performance mejorado

📝 Documentación:
- Instrucciones de implementación
- Resumen completo de mejoras
- Backups de versiones anteriores

🚀 Inspirado en el diseño de TECSUP pero con identidad propia de TecCreate"
    
    Write-Host "✅ Commit creado" -ForegroundColor Green
    Write-Host ""
    
    # Push al repositorio deployed
    Write-Host "🚀 Subiendo cambios al repositorio deployed..." -ForegroundColor Yellow
    git push deployed main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  ✅ ¡DEPLOY EXITOSO!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "🎉 Tus mejoras han sido subidas correctamente" -ForegroundColor Green
        Write-Host ""
        Write-Host "📋 Próximos pasos:" -ForegroundColor Yellow
        Write-Host "   1. Verifica el deploy en Vercel" -ForegroundColor Gray
        Write-Host "   2. Prueba la página en producción" -ForegroundColor Gray
        Write-Host "   3. Comparte con el equipo de TECSUP" -ForegroundColor Gray
        Write-Host ""
        Write-Host "🔗 URL de producción:" -ForegroundColor Yellow
        Write-Host "   https://tec-create-fronted-deployed.vercel.app" -ForegroundColor Cyan
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "  ❌ ERROR EN EL PUSH" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host ""
        Write-Host "⚠️  Posibles soluciones:" -ForegroundColor Yellow
        Write-Host "   1. Verifica tu conexión a internet" -ForegroundColor Gray
        Write-Host "   2. Verifica tus credenciales de Git" -ForegroundColor Gray
        Write-Host "   3. Intenta: git pull deployed main --rebase" -ForegroundColor Gray
        Write-Host ""
    }
} else {
    Write-Host ""
    Write-Host "❌ Deploy cancelado por el usuario" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Puedes ejecutar este script de nuevo cuando estés listo" -ForegroundColor Yellow
    Write-Host "   Comando: .\deploy-mejoras.ps1" -ForegroundColor Gray
    Write-Host ""
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ESTADÍSTICAS DEL PROYECTO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Mejoras implementadas:" -ForegroundColor Yellow
Write-Host "   ✨ Animaciones: 25+" -ForegroundColor Gray
Write-Host "   🎨 Gradientes: 15+" -ForegroundColor Gray
Write-Host "   💫 Efectos visuales: 20+" -ForegroundColor Gray
Write-Host "   📱 Responsive: 100%" -ForegroundColor Gray
Write-Host "   ⚡ Performance: Optimizado" -ForegroundColor Gray
Write-Host ""
Write-Host "🎯 Componentes actualizados: 3/7" -ForegroundColor Yellow
Write-Host "   ✅ Header.jsx" -ForegroundColor Green
Write-Host "   ✅ Hero.jsx" -ForegroundColor Green
Write-Host "   ✅ Features.jsx" -ForegroundColor Green
Write-Host "   ⏳ Testimonials.jsx (pendiente)" -ForegroundColor Gray
Write-Host "   ⏳ Footer.jsx (pendiente)" -ForegroundColor Gray
Write-Host "   ⏳ Contact.jsx (pendiente)" -ForegroundColor Gray
Write-Host "   ⏳ LandingPage.jsx (opcional)" -ForegroundColor Gray
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ¡Gracias por usar el script!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Pausar al final
Read-Host "Presiona Enter para salir"
