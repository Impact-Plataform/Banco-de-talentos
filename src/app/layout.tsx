import '../styles/globals.css';
import AppProvider from '../contexts/contextProvider';
import CustomChakraProvider from '../components/providers/CustomChakraUi';
import StyledRender from '../components/providers/StyledRender';
import Head from './head';


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-BR">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <Head/>
        <body>
          <StyledRender>
            <CustomChakraProvider>
              <AppProvider>
                {children}
              </AppProvider>
            </CustomChakraProvider>
          </StyledRender>
        </body>
      </html>
    );
  }