export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gray-400">{children}</div>;
}
