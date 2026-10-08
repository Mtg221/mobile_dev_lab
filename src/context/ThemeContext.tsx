import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

export type ThemeColors = {
  background: string;
  card: string;
  text: string;
  subtext: string;
  border: string;
  accent: string;
  inputBg: string;
  messagesBg: string;
};

const lightColors: ThemeColors = {
  background: "#ffffff",
  card: "#ffffff",
  text: "#000000",
  subtext: "#666666",
  border: "#dddddd",
  accent: "#1a5276",
  inputBg: "#ffffff",
  messagesBg: "#f4f4f4",
};

const darkColors: ThemeColors = {
  background: "#121212",
  card: "#1e1e1e",
  text: "#ffffff",
  subtext: "#aaaaaa",
  border: "#333333",
  accent: "#4a90e2",
  inputBg: "#2a2a2a",
  messagesBg: "#1a1a1a",
};

type ThemeContextValue = {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
