import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "DevOrbit — The Control Center for Everything You Ship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          position: "relative",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={150}
          height={150}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 24,
            fontSize: 62,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#15161a",
          }}
        >
          devorbit
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 14,
            fontSize: 26,
            color: "#5a5b63",
          }}
        >
          The control center for everything you ship
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 10,
            background: "#2f6fed",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

export const dynamic = "force-static";
