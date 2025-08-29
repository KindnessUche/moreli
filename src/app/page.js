"use client";

import { useEffect, useState } from "react";
import Overlay from "./components/overlay";
import LandingPage from "./components/LandingPage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadTime = setTimeout(() => setLoading(false), 3800);
    return () => clearTimeout(loadTime);
  });
  return (
    <div
      className="relative overflow-x-hidden"
      style={{ overflow: loading && "hidden" }}
    >
      <Overlay></Overlay>
      <LandingPage loading={loading}></LandingPage>
    </div>
  );
}
