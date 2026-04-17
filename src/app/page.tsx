import { Sidebar } from "@/src/app/_components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
      </main>
    </div>
  )
}