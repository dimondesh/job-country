export function Video({
  src,
  posterSrc,
  className,
}: {
  src: string;
  posterSrc: string;
  className?: string;
}) {
  return (
    <video controls preload="auto" poster={posterSrc} className={className}>
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  );
}
