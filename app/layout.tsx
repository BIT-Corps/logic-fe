import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import "node_modules/react-modal-video/scss/modal-video.scss";
import "./globals.css";
import { theme } from "./lib";

export const metadata: Metadata = {
  title: "LOGIC",
  description:
    "The LOGIC Church stands as a beacon of The Love Of God In Christ Jesus here in Lagos Nigeria and to the world at large.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
