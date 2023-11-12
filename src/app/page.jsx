import Users from "@/components/Users";

export const metadata = {
  title: 'Mi pagina especial Home'
}

// Server componenet
function HomePage() {
  return (
    <section>
      <h1>Hello World</h1>
      {/* Client component */}
      <Users />
    </section>
  )
}

export default HomePage;