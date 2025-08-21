import '../styles/index.css';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'Talinglobal Group',
  description: 'A boilerplate project with Next.js 15 and Tailwind CSS 3.4.17',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppIcon />
        <script type="module" ></script>
      </body>
    </html>
  );
}
