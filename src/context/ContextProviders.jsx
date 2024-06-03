//TODO: Remove if unused
import { NameContextProvider } from 'src/context/NameContext';

export const ContextProviders = ({ children }) => {
  return <NameContextProvider>{children}</NameContextProvider>;
};
