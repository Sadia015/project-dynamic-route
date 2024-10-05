import Nav from "../../components/nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <div>
        <Nav/>
        {children}
      </div>
      </body>
  );
}