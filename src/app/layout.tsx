import StyledComponentsRegistry from "../../lib/registry";
import GlobalStyle from "./GlobalStyle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>클레르 옵스퀴르 33원정대</title>
      </head>
      <body
      >
        <StyledComponentsRegistry>
          <GlobalStyle/>
          {children}
          {/* <Player/> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
