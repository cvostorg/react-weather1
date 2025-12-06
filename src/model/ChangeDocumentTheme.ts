import { Theme } from "../context/ThemeContext";

export function changeDocumentTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}