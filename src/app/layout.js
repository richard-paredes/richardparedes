import "./globals.css";

export const metadata = {
  title: "Richard Paredes",
  description: "Created with love, by Richard Paredes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#f2f0ef] text-[black]">
      <body className="theme-bg">{children}</body>
    </html>
  );
}
