import React, { useState } from "react";

// Creamos el espacio para el contexto = estado global
const ContextTheme = React.createContext();

// Componente proveedor del tema
const ProviderTheme = ({ children }) => {
  const [theme, setTheme] = useState({
    align: "center",
    fontSize: 30,
  });

  // Funciones para controlar el tamaño de la letra
  const increaseFont = () => {
    setTheme({ ...theme, fontSize: theme.fontSize + 1 });
  };
  const decreaseFont = () => {
    setTheme({ ...theme, fontSize: theme.fontSize - 1 });
  };

  // Funciones para el alineado
  const alignCenter = () => {
    setTheme({ ...theme, align: "center" });
  };
  const alignLeft = () => {
    setTheme({ ...theme, align: "left" });
  };
  const alignRight = () => {
    setTheme({ ...theme, align: "right" });
  };

  return (
    <ContextTheme.Provider
      value={{
        theme,
        increaseFont,
        decreaseFont,
        alignCenter,
        alignLeft,
        alignRight,
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export { ProviderTheme, ContextTheme };
