import { ImageResponse } from "next/og";
import { firm } from "@/lib/content/firm";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0b1424",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div style={{ width: 40, height: 2, backgroundColor: "#cfa94e", display: "flex" }} />
          <span
            style={{
              color: "#cfa94e",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Advocates of the High Court of Kenya
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", color: "#faf8f3", fontSize: 68, lineHeight: 1.15 }}>
          <span>Mwango Gichana</span>
          <span style={{ color: "#cfa94e", fontSize: 40, marginTop: 12 }}>
            &amp; Co. Advocates
          </span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            color: "rgba(250,248,243,0.7)",
            fontSize: 26,
            fontFamily: "sans-serif",
          }}
        >
          {firm.location.town}, {firm.location.subCounty} &middot; Kenya
        </div>
      </div>
    ),
    { ...size }
  );
}
