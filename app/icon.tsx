import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1424",
          color: "#cfa94e",
          fontSize: 18,
          fontFamily: "serif",
          letterSpacing: -1,
        }}
      >
        MG
      </div>
    ),
    { ...size }
  );
}
