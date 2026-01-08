import { motion } from 'framer-motion'

export function SlideResumen1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 flex flex-col slide-scroll lg:overflow-hidden">

        {/* Header - Consistente con SlideIndice */}
        <motion.div
          className="mb-4 sm:mb-6 md:mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
            Retrospectiva
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 tracking-tight">
            Resumen 2025
          </h2>
          <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 md:mt-5 rounded-full"></div>
        </motion.div>

        {/* Grid principal - responsive: 1 col móvil, 2x2 desktop */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-6 sm:gap-8 lg:gap-10 min-h-0 flex-1 lg:flex-none pb-4 lg:pb-0 max-w-[64%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Card: Publicaciones */}
          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <h3 className="text-white text-[13px] uppercase tracking-[0.15em] font-semibold">Publicaciones</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Número total + desglose en layout horizontal */}
            <div className="flex-1 flex items-center justify-center gap-8">
              {/* Número total */}
              <div className="text-center">
                <span className="text-6xl font-bold text-white tracking-tight block">22</span>
                <span className="text-white/40 text-[12px] uppercase tracking-widest">total</span>
              </div>

              {/* Separador */}
              <div className="w-px h-24 bg-white/10"></div>

              {/* Desglose */}
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <span className="text-white text-[15px] font-medium w-36">Informes</span>
                  <span className="text-2xl font-semibold text-white tabular-nums">11</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-white text-[15px] font-medium w-36">Notas Web</span>
                  <span className="text-2xl font-semibold text-white tabular-nums">7</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-white text-[15px] font-medium w-36">Temas Públicos</span>
                  <span className="text-2xl font-semibold text-white tabular-nums">4</span>
                </div>
              </div>
            </div>

            {/* Dato IA destacado */}
            <div className="shrink-0 mt-3 pt-2.5 border-t border-white/[0.08]">
              <div className="relative rounded-xl overflow-hidden bg-white/[0.03]">
                {/* Línea superior dorada */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 112, 0.3) 20%, rgba(212, 175, 112, 0.5) 50%, rgba(212, 175, 112, 0.3) 80%, transparent 100%)'
                  }}
                />

                {/* Contenido principal */}
                <div className="px-5 py-4 flex items-center gap-5">
                  {/* Bloque del ícono */}
                  <div
                    className="w-[52px] h-[52px] rounded-[11px] flex items-center justify-center shrink-0"
                    style={{
                      background: 'linear-gradient(145deg, rgba(212, 175, 112, 0.12) 0%, rgba(212, 175, 112, 0.04) 100%)',
                      border: '1px solid rgba(212, 175, 112, 0.25)'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af70" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>

                  {/* Bloque de texto */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-[34px] font-bold leading-none"
                        style={{
                          background: 'linear-gradient(135deg, #ffffff 0%, #d4af70 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          letterSpacing: '-0.5px'
                        }}
                      >
                        30.000
                      </span>
                      <span className="text-[12px] text-slate-500 font-medium">documentos</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[11px] text-slate-500">analizados con</span>
                      <span
                        className="text-[8px] font-bold px-2 py-0.5 rounded uppercase"
                        style={{
                          background: 'rgba(212, 175, 112, 0.1)',
                          border: '1px solid rgba(212, 175, 112, 0.4)',
                          color: '#d4af70',
                          letterSpacing: '0.5px'
                        }}
                      >
                        IA
                      </span>
                    </div>
                  </div>
                </div>

                {/* Línea inferior gradiente */}
                <div
                  className="h-[2px]"
                  style={{ background: 'linear-gradient(90deg, #d4af70 0%, #22d3ee 100%)' }}
                />
              </div>
            </div>
          </div>

          {/* Card: Comunicaciones */}
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden flex">
            {/* Collage de imágenes de prensa - lado izquierdo */}
            <div className="w-[28%] relative shrink-0 flex flex-col">
              <div className="flex-1 relative overflow-hidden">
                <img src="/assets/prensa-1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex-1 relative overflow-hidden">
                <img src="/assets/prensa-2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex-1 relative overflow-hidden">
                <img src="/assets/prensa-3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              {/* Overlay gradiente hacia el contenido */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/40 to-slate-900/95" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/60" />
            </div>

            {/* Contenido */}
            <div className="flex-1 p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-4 shrink-0">
                <h3 className="text-white text-[13px] uppercase tracking-[0.15em] font-semibold">Comunicaciones</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                  {/* Columnas y cartas */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl bg-white/[0.04] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-white block mb-0.5">16</span>
                    <span className="text-white/50 text-[13px]">Columnas y cartas</span>
                  </div>
                  {/* Medios */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl bg-white/[0.04] flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor"/>
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-white block mb-0.5">22</span>
                    <span className="text-white/50 text-[13px]">Medios</span>
                  </div>
                  {/* Spotify + YouTube */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl bg-white/[0.04] flex items-center justify-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" className="text-[#1DB954]">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="currentColor"/>
                      </svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" className="text-[#FF0000]">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-white block mb-0.5">2.562</span>
                    <span className="text-white/50 text-[13px]">visualizaciones</span>
                  </div>
                  {/* LinkedIn */}
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" className="text-[#0A66C2]">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-white block mb-0.5">3.435</span>
                    <span className="text-white/50 text-[13px]">seguidores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Seminarios + Exposición */}
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden flex">
            {/* Imagen del seminario */}
            <div className="w-[32%] relative shrink-0">
              <img
                src="/assets/seminario.png"
                alt="Seminario OJO"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/20 to-slate-900/90" />
            </div>

            {/* Contenido */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4 shrink-0">
                <h3 className="text-white text-[13px] uppercase tracking-[0.15em] font-semibold">Actividades</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Lista de actividades */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-5">
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-400 text-[14px] font-bold tabular-nums shrink-0 mt-0.5">01</span>
                    <div>
                      <p className="text-white text-[15px] leading-tight font-medium">La persecución penal frente a la opinión pública</p>
                      <span className="text-white/50 text-[11px]">Julio 2025</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-400 text-[14px] font-bold tabular-nums shrink-0 mt-0.5">02</span>
                    <div>
                      <p className="text-white text-[15px] leading-tight font-medium">Hacia una justicia ambiental oportuna</p>
                      <span className="text-white/50 text-[11px]">Noviembre 2025</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-400 text-[14px] font-bold tabular-nums shrink-0 mt-0.5">03</span>
                    <div>
                      <p className="text-white text-[15px] leading-tight font-medium">Exposición en Comisión de Constitución: reforma nombramientos Poder Judicial</p>
                      <span className="text-white/50 text-[11px]">Diciembre 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Lanzamiento - Con imagen visible */}
          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06] flex flex-col">
            <div className="flex items-center gap-3 mb-4 shrink-0">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Lanzamiento</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Browser mockup */}
            <div className="flex-1 min-h-0 relative">
              {/* Barra del navegador */}
              <div className="bg-slate-800/80 rounded-t-lg px-3 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                </div>
                <div className="flex-1 bg-slate-700/50 rounded px-3 py-1 ml-2">
                  <span className="text-white/30 text-[10px]">sentenciasdestacadas.cl</span>
                </div>
              </div>
              {/* Contenido web */}
              <div className="relative overflow-hidden rounded-b-lg" style={{ height: 'calc(100% - 32px)' }}>
                <img
                  src="/assets/sentencias-destacadas.png"
                  alt="Sentencias Destacadas - Preview"
                  className="w-full h-full object-cover object-top"
                />
                {/* Fade inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}
