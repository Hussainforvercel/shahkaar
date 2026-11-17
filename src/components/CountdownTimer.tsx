"use client";

import { useSyncExternalStore } from "react";

interface CountdownTimerProps {
  launchDate?: string | number;
}

let cachedTarget: number | null = null;

function getLaunchTarget(customDate?: string | number): number {
  if (cachedTarget !== null) return cachedTarget;
  if (typeof window === "undefined") return 0;

  if (customDate) {
    cachedTarget = typeof customDate === "number" ? customDate : new Date(customDate).getTime();
    return cachedTarget;
  }

  try {
    const stored = localStorage.getItem("shahkaar_launch_target");
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed > Date.now()) {
        cachedTarget = parsed;
        return cachedTarget;
      }
    }
  } catch {
    // Ignore storage restrictions
  }

  const defaultTarget = Date.now() + 30 * 24 * 60 * 60 * 1000;
  cachedTarget = defaultTarget;

  try {
    localStorage.setItem("shahkaar_launch_target", defaultTarget.toString());
  } catch {
    // Ignore storage restrictions
  }

  return cachedTarget;
}

function subscribe(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function createSnapshotGetter(launchDate?: string | number) {
  return () => {
    const target = getLaunchTarget(launchDate);
    return Math.max(0, Math.floor((target - Date.now()) / 1000));
  };
}

const getServerSnapshot = () => -1;

export function CountdownTimer({ launchDate }: CountdownTimerProps) {
  const remainingSeconds = useSyncExternalStore(
    subscribe,
    createSnapshotGetter(launchDate),
    getServerSnapshot
  );

  const isMounted = remainingSeconds >= 0;

  const days = isMounted ? Math.floor(remainingSeconds / (60 * 60 * 24)) : 0;
  const hours = isMounted ? Math.floor((remainingSeconds / (60 * 60)) % 24) : 0;
  const minutes = isMounted ? Math.floor((remainingSeconds / 60) % 60) : 0;
  const seconds = isMounted ? remainingSeconds % 60 : 0;

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full max-w-md mx-auto my-6 sm:my-8">
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {units.map((unit, idx) => (
          <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tabular-nums tracking-tight text-[#FAF7F2]">
                {isMounted ? format(unit.value) : "--"}
              </span>
              <span className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/80 font-medium">
                {unit.label}
              </span>
            </div>
            {idx < units.length - 1 && (
              <span className="text-[#D4AF37]/30 text-lg sm:text-xl font-light -mt-4">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
