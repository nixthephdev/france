import { Camera, Film } from "lucide-react";

export function MediaPlaceholder({
  kind = "photo",
  title,
  note,
  className = "",
}: {
  kind?: "photo" | "video";
  title: string;
  note: string;
  className?: string;
}) {
  const Icon = kind === "video" ? Film : Camera;
  return (
    <div
      className={"media-placeholder " + className}
      role="img"
      aria-label={title + ". " + note + ". Temporary " + kind + " placeholder."}
    >
      <div className="placeholder-decoration" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="placeholder-label">
        <Icon size={22} strokeWidth={1.2} aria-hidden="true" />
        <span>{kind === "video" ? "Video" : "Photo"} placeholder</span>
      </div>
      <div className="placeholder-caption">
        <strong>{title}</strong>
        <span>{note}</span>
      </div>
    </div>
  );
}
