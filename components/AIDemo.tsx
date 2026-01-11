
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Sparkles } from 'lucide-react';

const AIDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="ai-demo" className="py-20 bg-[#050b1a]/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Experience the <span className="text-indigo-400">Natural</span> <br />
              Conversation Flow
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our AI isn't just a chatbot with a voice. It's a context-aware medical assistant that understands clinical needs, insurance terms, and patient urgency.
            </p>
            <ul className="space-y-4">
              {[
                "Natural Language Understanding",
                "Contextual Awareness",
                "Emotional Intelligence",
                "Instant Database Lookups"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="glass border rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Live Demo Recording
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Elara in Action</h3>
                <p className="text-gray-400 text-sm">Listen to a real conversation with our AI</p>
              </div>

              <div className="space-y-6">
                {/* Waveform Visualization */}
                <div className="h-32 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/5 border border-indigo-500/20 flex items-center justify-center px-8">
                  <div className="flex items-end justify-center gap-1 w-full h-16">
                    {[...Array(40)].map((_, i) => {
                      const height = Math.sin(i * 0.5) * 30 + 30;
                      const isActive = isPlaying && (currentTime / duration) * 40 > i;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-indigo-400' : 'bg-gray-600'
                          }`}
                          style={{
                            height: `${height}%`,
                            opacity: isActive ? 1 : 0.3,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-600/30"
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7 text-white fill-white" />
                    ) : (
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    )}
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
                    <Volume2 className="w-4 h-4 text-gray-400" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-indigo-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <audio ref={audioRef} src="/demo-audio.mp3" preload="metadata" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;