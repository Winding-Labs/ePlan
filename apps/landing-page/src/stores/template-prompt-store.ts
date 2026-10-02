import { create } from "zustand";

interface TemplatePromptState {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

// The project prompt on a /templates/<slug> page, shared between the prompt
// itself and the buttons elsewhere on the page that fill or focus it.
export const useTemplatePromptStore = create<TemplatePromptState>((set) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
}));
