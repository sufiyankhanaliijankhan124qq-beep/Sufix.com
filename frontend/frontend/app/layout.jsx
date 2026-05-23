import "../styles/globals.css";

export const metadata = {
  title: "Sufix",
  description: "Premium Wallet Platform"
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
