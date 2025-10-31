import { doesBrowserSupportWebLLM } from "@built-in-ai/web-llm";
import { useEffect, useState } from "react";

export function useBrowserAISupport() {
  const [browserSupportsModel, setBrowserSupportsModel] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    setBrowserSupportsModel(doesBrowserSupportWebLLM());
  }, []);

  return browserSupportsModel;
}
