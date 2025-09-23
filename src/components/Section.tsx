import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="container py-16 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {children}
      </div>
    </section>
  )
}

export function Feature({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  )
}

