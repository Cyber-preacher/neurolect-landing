import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import { Section, Feature } from "@/components/Section"
import LeadForm from "@/components/LeadForm"

// Debug logs to see what's what
// eslint-disable-next-line no-console
console.log("TYPES:", {
  Navbar: typeof Navbar,
  Hero: typeof Hero,
  Footer: typeof Footer,
  Section: typeof Section,
  Feature: typeof Feature,
  LeadForm: typeof LeadForm,
})

export default function Page() {
  return (
    <main style={{ padding: 24, display: "grid", gap: 12 }}>
      {/* Toggle these back on one-by-one */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Section title="X"><Feature title="Y">Z</Feature></Section> */}
      {/* <LeadForm /> */}
      {/* <Footer /> */}
      <div>🔧 Debug mode (uncomment components one by one)</div>
    </main>
  )
}
