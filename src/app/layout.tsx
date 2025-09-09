import { poppins } from '../fonts';
import '../styles/globals.css';

export default function RootLayout({
   children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${poppins.variable}`}>
        <body>{children}</body>
        </html>
    );
}
