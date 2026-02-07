export type Track = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  durationSec: number;
  cover: string;
  audio: string;
  mood: { label: string; score: number };
  energy: number;
  coherence: number;
  beatComplexity: number;
};

export const tracks: Track[] = [
  {
    id: "t1",
    title: "Neon Dreams",
    artist: "Auralis AI • Cyber Genesis",
    album: "Synthia Wave",
    durationSec: 143,
    cover: "/covers/neon-dreams.svg",
    audio: "/audio/neon-dreams.wav",
    mood: { label: "Midnight Focus", score: 0.92 },
    energy: 0.74,
    coherence: 0.92,
    beatComplexity: 8.4
  },
  {
    id: "t2",
    title: "Midnight Echo",
    artist: "Synthetix AI",
    durationSec: 165,
    cover: "/covers/midnight-echo.svg",
    audio: "/audio/neon-dreams.wav",
    mood: { label: "Deep Echoes", score: 0.86 },
    energy: 0.61,
    coherence: 0.89,
    beatComplexity: 7.7
  },
  {
    id: "t3",
    title: "Glitch in the Void",
    artist: "Void Weaver",
    durationSec: 128,
    cover: "/covers/glitch-void.svg",
    audio: "/audio/neon-dreams.wav",
    mood: { label: "Neon Energy", score: 0.82 },
    energy: 0.82,
    coherence: 0.84,
    beatComplexity: 9.1
  },
  {
    id: "t4",
    title: "Subatomic Flow",
    artist: "Atomic_Node",
    durationSec: 190,
    cover: "/covers/subatomic-flow.svg",
    audio: "/audio/neon-dreams.wav",
    mood: { label: "Cyber Lounge", score: 0.78 },
    energy: 0.57,
    coherence: 0.81,
    beatComplexity: 6.9
  }
];

export const moodPlaylists = [
  { id: "p1", title: "Midnight Focus", match: 0.98, icon: "moon" },
  { id: "p2", title: "Neon Energy", match: 0.82, icon: "bolt" },
  { id: "p3", title: "Deep Echoes", match: 0.88, icon: "wave" },
  { id: "p4", title: "Cyber Lounge", match: 0.74, icon: "disc" }
];
