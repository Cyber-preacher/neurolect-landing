import * as React from "react";

export type SectionShellProps = {
  id?: string;
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  className = "",
  title,
  subtitle,
  children
}) => {
  const sectionClasses = [
    "w-full",
    "py-16",
    "md:py-24",
    "scroll-mt-24",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClasses}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <header className="mb-8 md:mb-10">
            {title && (
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-muted-foreground max-w-3xl">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionShell;

