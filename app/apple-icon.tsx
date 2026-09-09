import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          backgroundColor: "#0b1424",
          color: "#faf8f3",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#cfa94e",
            fontSize: 72,
            fontFamily: "serif",
            letterSpacing: -2,
          }}
        >
          MG
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 6,
            width: 44,
            height: 2,
            backgroundColor: "#cfa94e",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
