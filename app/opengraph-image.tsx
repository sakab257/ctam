import { ImageResponse } from "next/og"
import { centers } from "@/lib/site"

// Image de partage (Facebook, WhatsApp, LinkedIn, X...) utilisée par toutes les pages.
// TODO : remplacer/compléter par une vraie photo des centres quand elle sera disponible.
export const alt = "CTAM - Centres de contrôle technique AUTOSUR au Blanc-Mesnil et à Ivry-sur-Seine"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #4338ca 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            CTAM
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              padding: "6px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.18)",
            }}
          >
            Centres agréés AUTOSUR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            Contrôle technique
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600, opacity: 0.95 }}>
            Auto, moto, utilitaire - Réservation en ligne 24h/24
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {Object.values(centers).map((center) => (
            <div
              key={center.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 28px",
                borderRadius: 20,
                background: "white",
                color: "#111827",
                gap: 4,
              }}
            >
              <div style={{ display: "flex", fontSize: 32, fontWeight: 800, color: "#1d4ed8" }}>
                {center.name} ({center.address.departmentCode})
              </div>
              <div style={{ display: "flex", fontSize: 26, fontWeight: 600 }}>
                {center.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  )
}
