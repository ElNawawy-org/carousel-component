import { RootLayout } from 'src/organisms/RootLayout';

import { ContextProviders } from 'src/context/ContextProviders';

import 'src/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    //TODO: Remove if unused
    <ContextProviders>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ContextProviders>
  );
};

export default App;
