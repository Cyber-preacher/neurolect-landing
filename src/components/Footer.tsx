// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Neurolect</span>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="hover:underline" href="/team">Team</a>
          <a className="hover:underline" href="/press">Press</a>
          <a className="hover:underline" href="/changelog">Changelog</a>
          <a className="hover:underline" href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
