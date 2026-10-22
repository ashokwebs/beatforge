# 🎧 BeatForge — Autonomous AI Music Studio & Audio DSP Workstation

BeatForge is a generative music composition and audio synthesis platform for creators, video editors, and game developers. It synthesizes original, copyright-free instrumental tracks and renders vertical (9:16) audio visualizer video reels in seconds.

---

## 🌟 Key Capabilities
1. **Procedural & Neural Beat Synthesis:**
   * Pure DSP sound synthesis using NumPy/SciPy: 808 sub-bass, kick drums, snared drums, hi-hats with swing, and detuned polyphonic chords.
2. **Generative Musical Genres:**
   * **Lofi Chill:** 82 BPM, jazz 9th chords ($Dm9 \to G13 \to Cmaj7 \to Am7$), vinyl atmosphere.
   * **Cyberpunk Synthwave:** 120 BPM, driving 16th-note rolling bass, four-on-the-floor kick, 80s retro synth pads.
3. **Automated Video Visualizer Generator:**
   * Generates full HD 1080x1920 vertical video reels with frequency spectrum waveform visualizers powered by ffmpeg.
4. **HuggingFace Ready:**
   * Staged architecture for `facebook/musicgen-small` text-to-music conditional generation on NVIDIA RTX 4050 GPU.

---

## 🚀 Quickstart

```bash
# 1. Install CLI
beatforge --help

# 2. Generate a Lofi Beat (Audio + 9:16 Video Reel)
beatforge generate --genre lofi --bars 8 -o my_lofi_beat.wav --video

# 3. Generate a Cyberpunk Synthwave Beat
beatforge generate --genre synthwave --bars 8 -o cyberpunk_ride.wav --video

# 4. Launch the Web Studio
cd beatforge
npm install
npm run dev
# Open http://localhost:3000
```
