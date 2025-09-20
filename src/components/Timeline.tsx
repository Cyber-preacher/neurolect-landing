import * as React from "react";

export type TimelineItem = { title: string; body?: React.ReactNode };

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <ol className="relative border-s pl-6 space-y-6">
      {items.map((it, i) => (
        <li key={i} className="ms-4">
          <div className="absolute w-3 h-3 bg-foreground rounded-full -start-1.5 mt-2.5" />
          <h3 className="font-medium">{it.title}</h3>
          {it.body && <p className="text-muted-foreground">{it.body}</p>}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
