"use client";

import React, { useState } from "react";
import { Music, Play, Pause, Sparkles, Sliders, Disc, Download, Video, Radio, Layers, Volume2, Loader2, ExternalLink } from "lucide-react";

interface GeneratedTrack {
  id: string;
  genre: string;
  bpm: number;
  bars: number;
  audioUrl?: string;
  videoUrl?: string;
  durationSec: number;
  scale: string;
  stems: string[];
}

export default function Home() {
  const [genre, setGenre] = useState<"lofi" | "synthwave">("lofi");
  const [bpm, setBpm] = useState(82);
  const [bars, setBars] = useState(8);
  const [generating, setGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<GeneratedTrack | null>({
    id: "init_lofi",
    genre: "lofi",
    bpm: 82,
    bars: 8,
    durationSec: 23,
    scale: "D Minor / Jazz 9th (Dm9 → G13 → Cmaj7 → Am7)",
    stems: ["808 Low-End Bass", "Boom-Bap Snare & Swung Hats", "Warm Poly-Detuned Keys", "Vinyl Surface Crackle"],
  });

  const handleGenerate = async () => {
    setGenerating(true);
    setIsPlaying(false);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre, bpm, bars }),
      });
      const data = await res.json();
      if (data.success) {
        setTrack(data.track);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080A10] text-slate-100 flex flex-col justify-between">
      {/* Studio Header */}
      <header className="border-b border-slate-800/80 bg-[#0C101C]/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 via-pink-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-rose-950/40">
              <Music className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-2">
                BeatForge <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-semibold">AI Audio Studio</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>44.1 kHz DSP Synthesis</span>
            </span>
            <a
              href="https://github.com/ashokwebs/beatforge"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition flex items-center gap-1"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Studio Console */}
      <main className="max-w-6xl mx-auto px-4 py-10 flex-1 w-full space-y-8">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Neural Harmonics & Procedural Audio DSP
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Autonomous AI Music Generation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400">
              Studio Instrumentals & Vertical Reels
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Zero copyright strikes, 100% original royalty-free audio tracks. Compose custom beats and render automated waveform visualizer videos in seconds.
          </p>
        </div>

        {/* Master Console Panel */}
        <div className="bg-[#0E1322] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
          {/* Genre & Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-800/80">
            {/* Genre Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-rose-400" /> Genre Architecture
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setGenre("lofi");
                    setBpm(82);
                  }}
                  className={`p-3 rounded-xl border text-left transition ${
                    genre === "lofi"
                      ? "bg-rose-950/40 border-rose-500 text-white shadow-lg"
                      : "bg-[#090C15] border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="font-bold text-xs">Lofi Chill</div>
                  <div className="text-[10px] text-slate-500 mt-1">82 BPM · Jazzy 9th</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setGenre("synthwave");
                    setBpm(120);
                  }}
                  className={`p-3 rounded-xl border text-left transition ${
                    genre === "synthwave"
                      ? "bg-rose-950/40 border-rose-500 text-white shadow-lg"
                      : "bg-[#090C15] border-slate-800 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="font-bold text-xs">Synthwave 80s</div>
                  <div className="text-[10px] text-slate-500 mt-1">120 BPM · Cyberpunk</div>
                </button>
              </div>
            </div>

            {/* Tempo BPM Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-rose-400" /> Tempo (BPM)
                </label>
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                  {bpm} BPM
                </span>
              </div>
              <input
                type="range"
                min="65"
                max="140"
                value={bpm}
                onChange={(e) => setBpm(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer mt-3"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                <span>65 Chill</span>
                <span>85 Lofi</span>
                <span>120 Dance</span>
                <span>140 Trap</span>
              </div>
            </div>

            {/* Structure / Length */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-rose-400" /> Composition Length
                </label>
                <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                  {bars} Bars (~{Math.round((bars * 4 * 60) / bpm)}s)
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                {[4, 8, 16].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBars(b)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                      bars === b
                        ? "bg-rose-600 text-white border-rose-500"
                        : "bg-[#090C15] border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    {b} Bars
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Output:</span> 44.1 kHz Studio Master (WAV) + 1080x1920 Waveform Reel (MP4)
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="px-6 py-3 bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 hover:from-rose-500 hover:to-violet-500 text-white font-bold text-xs rounded-xl shadow-xl shadow-rose-950/40 transition flex items-center gap-2.5 whitespace-nowrap"
            >
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              Synthesize AI Track & Video
            </button>
          </div>

          {/* Track Player Console */}
          {track && (
            <div className="bg-[#080B14] border border-slate-800 rounded-2xl p-6 space-y-6">
              {/* Visualizer Simulation Bars */}
              <div className="flex items-end justify-between h-20 gap-1.5 px-4 py-2 bg-black/40 rounded-xl border border-slate-800/80">
                {[45, 68, 85, 30, 95, 60, 40, 75, 90, 50, 70, 80, 60, 45, 88, 70, 92, 55, 65, 80, 40, 60, 75, 85, 95, 50, 70, 60].map((val, i) => (
                  <div
                    key={i}
                    style={{ height: `${val}%` }}
                    className={`flex-1 rounded-t transition-all duration-300 ${
                      isPlaying
                        ? "bg-gradient-to-t from-rose-500 to-violet-400 animate-pulse"
                        : "bg-slate-700/60"
                    }`}
                  />
                ))}
              </div>

              {/* Track Meta & Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-lg"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <div>
                      <h3 className="font-bold text-sm text-white capitalize">{track.genre} Instrumental #{track.id.slice(-4)}</h3>
                      <p className="text-xs text-slate-400 font-mono">{track.scale} · {track.bpm} BPM</p>
                    </div>
                  </div>
                </div>

                {/* Stems */}
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  {track.stems.map((stem, idx) => (
                    <span key={idx} className="bg-slate-800/80 border border-slate-700/60 text-slate-300 px-2 py-1 rounded-lg flex items-center gap-1 font-mono">
                      <Layers className="w-3 h-3 text-rose-400" /> {stem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Export Links */}
              <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-800/80 gap-3 text-xs">
                <span className="text-slate-500 font-mono text-[11px]">Ready for YouTube Shorts, Reels, Spotify</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert("WAV audio rendered locally! Run 'beatforge generate' to export directly to disk.")}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5 text-rose-400" /> Export WAV Audio
                  </button>
                  <button
                    onClick={() => alert("Vertical reel MP4 rendered locally! Run 'beatforge generate --video' to export.")}
                    className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/40 text-rose-300 rounded-xl font-medium flex items-center gap-1.5 transition"
                  >
                    <Video className="w-3.5 h-3.5 text-rose-400" /> 9:16 Video Reel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0C101C]/60 py-6 text-center text-xs text-slate-500">
        <p>BeatForge — Autonomous AI Music Studio & Audio DSP Workstation for Creators.</p>
      </footer>
    </div>
  );
}
