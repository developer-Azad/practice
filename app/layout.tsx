import { LayoutProps } from 'models';
import { metaDatas } from 'utils/meta';
import { outfit } from 'styles/fonts';
import { Provider } from 'components';
import 'styles/globals.css';

export const metadata = metaDatas('Buxx - Tanda');

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={outfit.className}>
      {/* Fix later */}
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='favicon.ico' />
        <link rel='icon' href='favicon.ico' />
        <meta name='keywords' content='HR' />
        <meta name='author' content='Chigbo Ifeanyi James' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='apple-mobile-web-app-title' content='waiting list' />
        <link rel='icon' type='image/svg+xml' href='favicon.ico' />
        <link rel='manifest' href='manifest.json' />
        <link rel='apple-touch-icon' href='favicon.ico' />
      </head>

      <body className={outfit.className}>
        <div id='portal' />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
