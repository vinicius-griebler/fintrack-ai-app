import Image from "next/image";
import { Inter } from "next/font/google";

import userAvatar from "@/src/assets/avatar.png"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600",],
});

export const Header = () => {
    return (
        <header className={`${inter.className} flex items-center justify-between
        border-b border-[#1E293B] bg-[#0F111A] px-[32px] py-[16px]`}>

            <div className="flex flex-col">
                <div className="text-lg font-bold leading-6 tracking-[-0.025em] text-[#F1F5F9]">
                Bem-vindo de volta, Vinícius! 👋
                </div>
                <div className="text-xs font-normal leading-4 tracking-[-0.025em] text-[#94A3B8]">
                    Segunda-feira, 30 de Agosto
                </div>
            </div>

    )

function formatTodayPtBr(date: Date) {
  const text = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  // Capitaliza a primeira letra do dia da semana (ex.: "sexta-feira" -> "Sexta-feira")
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const Header = ({ userName = "Vinícius" }: HeaderProps) => {
  const today = formatTodayPtBr(new Date());

  return (
    <header
      className={`${inter.className} flex items-center justify-between rounded-2xl border border-card bg-background-header px-6 py-5 text-foreground`}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium text-muted-foreground">Bem-vindo de volta,</p>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-2xl font-bold tracking-[-0.02em]">{userName}</h1>
          <span className="text-sm font-medium text-muted-foreground">{today}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-card bg-background"
          aria-label="Notificações"
        >
          <Image
            src="/figma/header/bell.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-card bg-background"
          aria-label="Configurações"
        >
          <Image
            src="/figma/header/settings.svg"
            alt=""
            width={20}
            height={20}
          />
        </button>

        <div className="flex items-center gap-3 rounded-2xl border border-card bg-background px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#9333EA] text-sm font-bold">
            {userName.trim().slice(0, 1).toUpperCase()}
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold">{userName}</span>
            <span className="text-xs font-medium text-muted-foreground">Conta</span>
          </div>
          <Image
            src="/figma/header/chevron-down.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
    </header>
  );
};