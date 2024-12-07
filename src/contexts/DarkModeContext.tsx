import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

// Definir los tipos para el contexto
interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Crear el contexto con un valor por defecto de tipo `undefined`
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Proveedor del contexto
interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Verificar el valor guardado en localStorage
    const savedMode = localStorage.getItem("darkMode");
    console.log(savedMode);
    if (savedMode) {
      setDarkMode(savedMode == "true");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // Guardar el modo en localStorage
    localStorage.setItem("darkMode", darkMode.toString());

    // Cambiar la clase 'dark' en el <body>
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
