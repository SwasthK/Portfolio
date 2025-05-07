export default function TrackHeader({
  title,
  description,
  gap = 30,
}: {
  title: string;
  description?: string;
  gap?: number;
}) {

  return (
    <div className="flex flex-col gap-2" style={{ marginBottom: `${gap}px` }}>
      <p className="font-[500] text-2xl">{title}</p>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
}
