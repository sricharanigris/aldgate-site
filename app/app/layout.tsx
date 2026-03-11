export const metadata = {
  title: "Aldgate & Co",
  description: "Designing intelligent architecture for complex real-world systems."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
