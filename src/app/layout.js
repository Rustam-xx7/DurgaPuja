import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "দুর্গাপূজার গান · Durga Puja Pandal Radio & Song Playlist",
  description: "Live Bengali Durga Puja Pandal Songs, Agomoni Chants, Dhaak Beats, and YouTube Video Playlist.",
  keywords: "Durga Puja, Bengali Songs, Agomoni, Dhaak, Kolkata Puja, YouTube Playlist, Pandal Radio",
  openGraph: {
    title: "দুর্গাপূজার গান · Durga Puja Radio",
    description: "Listen to 24/7 Bengali Durga Puja festive songs & video playlists.",
    images: ["/images/durgaImage.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${plusJakarta.variable} font-sans antialiased selection:bg-sindoor selection:text-white flex flex-col min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
