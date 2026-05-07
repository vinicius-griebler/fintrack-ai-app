import Image from "next/image"
import { Inter } from "next/font/google"

import dashboardIcon from "@/src/assets/dashboard-icon.png"
import transactionsIcon from "@/src/assets/transactions-icon.png"
import logoutIcon from "@/src/assets/logout-icon.png"
import logo from "@/src/assets/logo.png"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const Sidebar = () => {
  return (
    <aside
      className={`${inter.className} flex w-64 flex-col border-r border-[#1E293B] bg-[#0F111A] text-[#F1F5F9]`}
    >
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="bg-[#060cc5] rounded-xl py-4 px-2.5">
          <Image src={logo} alt="FinTrack" priority />
        </div>
        <p className="text-xl font-bold leading-5 tracking-[-0.025em]">
          Fintrack
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 px-4 py-4">
        <a href="http://localhost:3000" className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-text-[#94A3B8] hover:bg-[#060cc5] hover:text-white transition-colors">
              
          <Image src={dashboardIcon} alt="Ícone do Dashboard" />
        <span className="text-base text-white font-medium leading-normal">
          Dashboard
        </span>

        </a>
               
        <a href="/transactions" className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8]  hover:bg-[#060cc5] hover:text-white transition-colors"
      >
          <Image src={transactionsIcon} alt="Ícone de Transações" className="brightness-0 invert" />
        <span className="text-base text-white font-medium leading-normal ">
          Transações
        </span>
      </a>
    </nav>

    <div className="border-t border-[#1E293B] px-6 py-6">
      <a href="/sign-in" className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8]"
      >
        <Image src={logoutIcon} alt="" className="brightness-0 invert" />
        <span className="text-base text-white font-medium leading-normal text-center">
          Sair
        </span>
      </a>
    </div>
  </aside>
  );
};