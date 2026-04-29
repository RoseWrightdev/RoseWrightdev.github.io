"use client";

import { useEffect, useRef, useState, useId } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "var(--font-geist-sans)",
});

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const id = useId().replace(/:/g, "");
  const isInitialRender = useRef(true);

  useEffect(() => {
    // Avoid double rendering in dev mode
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }

    const renderChart = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(`mermaid-${id}`, chart);
        setSvg(renderedSvg);
      } catch (err) {
        console.error("Mermaid rendering failed:", err);
        setError(true);
      }
    };

    renderChart();
  }, [chart, id]);

  if (error) {
    return (
      <pre className="p-4 bg-red-50 text-red-600 rounded-lg overflow-x-auto text-sm">
        <code>{chart}</code>
      </pre>
    );
  }

  if (!svg) {
    return (
      <div className="flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-lg animate-pulse">
        <span className="text-zinc-400 text-sm">Loading diagram...</span>
      </div>
    );
  }

  return (
    <div 
      className="mermaid-container flex flex-col items-center my-8 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
