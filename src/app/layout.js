import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DrobospaceX - Immersive Future Technologies",
  description: "Step into the next reality with cutting-edge AR, VR, AI, and 3D experiences. DrobospaceX transforms ideas into immersive digital realities.",
  keywords: "AR, VR, XR, Metaverse, 3D, AI, Immersive Technology, Spatial Computing",
  authors: [{ name: "DrobospaceX Automation" }],
  icons: {
    icon: '/globe.svg',
    apple: '/globe.svg',
    shortcut: '/file.svg'
  },
  openGraph: {
    title: "DrobospaceX - Immersive Future Technologies",
    description: "Transforming ideas into immersive digital realities through cutting-edge AR, VR, AI, 3D experiences, and next-generation web innovation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
