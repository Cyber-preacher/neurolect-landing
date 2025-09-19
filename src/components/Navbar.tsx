"use client"
import Link from "next/link"
import { useState } from "react"
import ThemeToggle from "@/components/ThemeToggle"
import { COPY } from "@/lib/copy"


export default function Navbar() {
const [open, setOpen] = useState(false)
return (
<header className="sticky top-0 z-50 w-full backdrop-blur bg-background/70 border-b">
<div className="container flex h-14 items-center justify-between">
<Link href="/" className="font-semibold tracking-tight">Neurolect</Link>


{/* Desktop nav */}
<nav className="hidden md:flex items-center gap-3 text-sm">
{COPY.nav.map((n) => (
<Link key={n.href} href={n.href} className="px-2 py-1">
{n.label}
</Link>
))}
<ThemeToggle />
</nav>


{/* Mobile */}
<button className="md:hidden rounded-lg border px-2 py-1" onClick={() => setOpen(v => !v)} aria-label="Menu">☰</button>
</div>


{open && (
<nav className="md:hidden border-t bg-background">
<div className="container py-2 flex flex-col gap-1">
{COPY.nav.map((n) => (
<Link key={n.href} href={n.href} className="py-2" onClick={() => setOpen(false)}>
{n.label}
</Link>
))}
<div className="py-2"><ThemeToggle /></div>
</div>
</nav>
)}
</header>
)
}
