import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import projectConfig from '../../project.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: projectConfig.LONGNAME,
  description: projectConfig.DESCRIPTION,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <pre>{JSON.stringify(projectConfig, null, 2)}</pre>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
