import { motion } from 'framer-motion'

export function SlideResumen1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-16 py-10 flex flex-col">

        {/* Header - Consistente con SlideIndice */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
            Retrospectiva
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Resumen 2025
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid principal 2x2 - 85% del espacio restante */}
        <motion.div
          className="grid grid-cols-2 grid-rows-2 gap-4 min-h-0"
          style={{ height: '85%' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Card: Informes */}
          <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5 shrink-0">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Informes</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Lista de informes numerada - centrada verticalmente */}
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-x-10 gap-y-[14px] w-full">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">01</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Deconstruyendo las LOC</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">02</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Ley Lafkenche: radiografía judicial</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">03</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">El control preventivo del TC</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">04</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">¿Existe una Corte Suprema?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">05</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Justicia especializada y T. Amb.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">06</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Judicialización de la salud</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">07</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Tribunales Amb. al Milímetro</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">08</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Tutelas laborales: ¿abuso?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">09</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Licencias médicas: ¿privado?</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0 w-5">10</span>
                  <p className="text-white/90 text-[15px] font-normal leading-snug">Corrupción en el Poder Judicial</p>
                </div>
              </div>
            </div>

            {/* Dato IA destacado */}
            <div className="shrink-0 mt-5 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-4">
                <span className="text-[28px] font-semibold text-white tracking-tight">30.000</span>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400/70">
                    <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-white/50 text-sm">documentos analizados con IA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Comunicaciones */}
          <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col">
            <div className="flex items-center gap-3 mb-6 shrink-0">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Comunicaciones</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-6 w-full">
                {/* Columnas */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/[0.04] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
                      <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm0 4h16v2H4v-2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white block mb-1">XX</span>
                  <span className="text-white/50 text-[13px]">Columnas</span>
                </div>
                {/* Medios */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/[0.04] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
                      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white block mb-1">XX</span>
                  <span className="text-white/50 text-[13px]">Medios</span>
                </div>
                {/* Spotify */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#1DB954]/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#1DB954]">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white block mb-1">XX</span>
                  <span className="text-white/50 text-[13px]">Podcasts</span>
                </div>
                {/* LinkedIn */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" className="text-[#0A66C2]">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white block mb-1">XX</span>
                  <span className="text-white/50 text-[13px]">LinkedIn</span>
                </div>
                {/* YouTube */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#FF0000]/10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#FF0000]">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-2xl font-semibold text-white block mb-1">XX</span>
                  <span className="text-white/50 text-[13px]">YouTube</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Seminarios + Exposición */}
          <div className="bg-white/[0.03] rounded-xl border border-white/[0.06] overflow-hidden flex">
            {/* Imagen del seminario */}
            <div className="w-[35%] relative shrink-0">
              <img
                src="/assets/seminario.png"
                alt="Seminario OJO"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/80" />
            </div>

            {/* Contenido */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-5 shrink-0">
                <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Actividades</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Seminarios */}
              <div className="mb-4">
                <p className="text-white/40 text-[11px] uppercase tracking-wider mb-3 font-medium">Seminarios</p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0">01</span>
                    <div>
                      <p className="text-white/90 text-[15px] leading-snug">La persecución penal frente a la opinión pública</p>
                      <span className="text-white/40 text-[12px]">Julio 2025</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-blue-400/80 text-[13px] font-semibold tabular-nums shrink-0">02</span>
                    <div>
                      <p className="text-white/90 text-[15px] leading-snug">Hacia una justicia ambiental oportuna</p>
                      <span className="text-white/40 text-[12px]">Noviembre 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exposición */}
              <div className="pt-4 border-t border-white/[0.08]">
                <p className="text-white/40 text-[11px] uppercase tracking-wider mb-2 font-medium">Exposición Legislativa</p>
                <p className="text-white/90 text-[15px] leading-snug">
                  Comisión de Constitución — Reforma nombramientos Poder Judicial
                </p>
                <span className="text-white/40 text-[12px]">Diciembre 2024</span>
              </div>
            </div>
          </div>

          {/* Card: Lanzamiento - Con imagen visible */}
          <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col">
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
