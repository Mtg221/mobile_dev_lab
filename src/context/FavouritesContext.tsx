import { createContext, useContext, useState, type ReactNode } from "react";

type FavouritesValue = {
  ids: string[];
  toggle: (id: string) => void;
  isFavourite: (id: string) => boolean;
};

const FavouritesContext = createContext<FavouritesValue | null>(null);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);

  function toggle(id: string) {
    setIds((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
    );
  }

  function isFavourite(id: string) {
    return ids.includes(id);
  }

  return (
    <FavouritesContext.Provider value={{ ids, toggle, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const value = useContext(FavouritesContext);

  if (!value) {
    throw new Error("useFavourites must be used inside FavouritesProvider");
  }

  return value;
}
