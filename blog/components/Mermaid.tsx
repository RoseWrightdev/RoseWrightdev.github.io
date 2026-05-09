"use client";

import { useEffect, useState, useId } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: isDarkMode ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: "var(--font-geist-sans)",
          themeVariables: {
            fontSize: "14px",
          }
        });

        const { svg: renderedSvg } = await mermaid.render(`mermaid-${id}`, chart);
        if (isMounted) {
          setSvg(renderedSvg);
          setError(false);
        }
      } catch (err) {
        console.error("Mermaid rendering failed:", err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    renderChart();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => renderChart();
    mediaQuery.addEventListener("change", handler);
    
    return () => {
      isMounted = false;
      mediaQuery.removeEventListener("change", handler);
    };
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
      className="mermaid-container flex flex-col items-center my-8 p-6"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

