export function Video({ src, className }: { src: string; className?: string }) {
  return (
    <video controls preload="preload" className={className}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
