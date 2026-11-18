import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0b0b0c";
const FG = "#f2f0ea";
const MUTED = "#a3a19b";
const ACCENT = "#c6ff3d";

const display = await readFile(join(process.cwd(), "assets/fonts/SpaceGrotesk-Bold.woff"));
const mono = await readFile(join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.woff"));

export default async function Image() {
  const [first, last] = profile.name.split(" ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: BG,
          color: FG,
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "JetBrains Mono", fontSize: 26 }}>
          <div style={{ display: "flex" }}>
            AS<span style={{ color: ACCENT }}>/</span>
          </div>
          {profile.openToWork && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                border: `2px solid ${ACCENT}`,
                color: ACCENT,
                borderRadius: 999,
                padding: "10px 24px",
                fontSize: 20,
                letterSpacing: 3,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 999, background: ACCENT }} />
              OPEN TO FULL-TIME ROLES
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 168, lineHeight: 0.85, letterSpacing: -8 }}>
          <span>{first.toUpperCase()}</span>
          <span style={{ color: ACCENT }}>{last.toUpperCase()}.</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "JetBrains Mono", fontSize: 24 }}>
          <div style={{ display: "flex", color: MUTED }}>
            <span style={{ color: FG }}>{profile.role}</span>&nbsp;· Java · Spring Boot · React · AI
          </div>
          <div style={{ display: "flex", color: ACCENT }}>amanjots.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: display, style: "normal", weight: 700 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
