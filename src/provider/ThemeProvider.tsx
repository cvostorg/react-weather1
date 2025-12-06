import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { changeDocumentTheme } from "../model/ChangeDocumentTheme";
import { storage } from "../model/Storage";

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('site_theme') || Theme.LIGHT);

  changeDocumentTheme(theme); // fire on page init

  function chTheme(theme: Theme) {
    storage.setItem('site_theme', theme);
    setTheme(theme);
    changeDocumentTheme(theme);
  }

  return <ThemeContext.Provider value={{
    theme: theme,
    changeTheme: chTheme
  }} {...props}>{children}</ThemeContext.Provider>
}