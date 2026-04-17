import { Sidebar } from "@/src/app/_components/sidebar"
import { Header } from "@/src/app/_components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header />
      </main>
    </div>
  )
}