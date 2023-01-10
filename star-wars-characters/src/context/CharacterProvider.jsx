import { CharacterContext } from './CharacterContext';

export const CharacterProvider = ({ children }) => {
  return <CharacterContext.Provider value={{ number: 0 }}>{children}</CharacterContext.Provider>;
};
