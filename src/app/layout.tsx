
import QueryProvider from '@/QueryProvider';
import "@/styles/index.scss";
import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className="main-layout">{children}</div>
        </body>
      </html>
    </QueryProvider>
  );
}
