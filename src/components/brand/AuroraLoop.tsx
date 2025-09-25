// src/components/brand/AuroraLoop.tsx
export default function AuroraLoop({ className = "", ariaHidden = true }: { className?: string; ariaHidden?: boolean }) {
  return (
    <div className={`aurora ${className}`} aria-hidden={ariaHidden}>
      <div className="aurora__ring" />
      <div className="aurora__ring aurora__ring--slow" />
      <div className="aurora__ring aurora__ring--rev" />
    </div>
  );
}
