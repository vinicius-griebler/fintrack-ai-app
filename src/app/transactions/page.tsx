import { Sidebar } from '../_components/sidebar'
import { Header } from '../_components/header'
import { prisma } from '@/src/lib/prisma'
import { auth } from '@/src/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Inter } from 'next/font/google'
import Image from 'next/image'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/src/app/_components/ui/table'

import EditIcon from '@/src/assets/edit-icon.png'
import DeleteIcon from '@/src/assets/delete-icon.png'

export const dynamic = 'force-dynamic'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(amount)
}

function formatDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date)
}

export default async function TransactionsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const userId = session?.user.id
    if (!userId) redirect('/sign-in')

    const transactions = await prisma.transaction.findMany({
        where: { userId },
        orderBy: { date: 'desc' },
    })

    return (
        <div className="flex min-h-screen bg-[#0F111A]">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Header userName={session.user.name} date={new Date()} />

                <main className={['p-8', inter.className].join(' ')}>
                    <div className="flex items-baseline justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-[#F1F5F9]">
                                Transações
                            </h1>
                            <p className="mt-1 text-sm text-[#94A3B8]">
                                Todas as movimentações da sua conta
                            </p>
                        </div>
                        <div className="text-sm text-[#94A3B8]">
                            {transactions.length} registros
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden rounded-xl border border-[#1E293B] bg-[#0B0D14]">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-[#1E293B]">
                                    <TableHead className="px-4 text-[#94A3B8]">
                                        Nome
                                    </TableHead>
                                    <TableHead className="text-[#94A3B8]">
                                        Tipo
                                    </TableHead>
                                    <TableHead className="text-[#94A3B8]">
                                        Categoria
                                    </TableHead>
                                    <TableHead className="text-[#94A3B8]">
                                        Método de pagamento
                                    </TableHead>
                                    <TableHead className="text-right text-[#94A3B8]">
                                        Valor
                                    </TableHead>
                                    <TableHead className="px-4 text-right text-[#94A3B8]">
                                        Data
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {transactions.map((t) => {
                                    const amount = Number(t.amount)
                                    const amountColor =
                                        t.type === 'EXPENSE'
                                            ? 'text-[#F87171]'
                                            : 'text-[#34D399]'

                                    return (
                                        <TableRow
                                            key={t.id}
                                            className="border-[#1E293B] hover:bg-white/5"
                                        >
                                            <TableCell className="px-4 font-medium text-[#F1F5F9]">
                                                {t.name}
                                            </TableCell>
                                            <TableCell className="text-[#CBD5E1]">
                                                {t.type}
                                            </TableCell>
                                            <TableCell className="text-[#CBD5E1]">
                                                {t.category}
                                            </TableCell>
                                            <TableCell className="text-[#CBD5E1]">
                                                {t.paymentMethod}
                                            </TableCell>
                                            <TableCell
                                                className={[
                                                    'text-right',
                                                    amountColor,
                                                ].join(' ')}
                                            >
                                                {formatCurrency(amount)}
                                            </TableCell>
                                            <TableCell className="px-4 text-right text-[#CBD5E1]">
                                                {formatDate(t.date)}
                                            </TableCell>

                                            <TableCell className="px-4 py-5">
                                                <div className="flex justify-end gap-4">
                                                    <Image
                                                        src={EditIcon}
                                                        alt="Editar Transação"
                                                        className="cursor-pointer"
                                                    />
                                                    <Image
                                                        src={DeleteIcon}
                                                        alt="Deletar Transação"
                                                        className="cursor-pointer"
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}

                                {transactions.length === 0 && (
                                    <TableRow className="border-[#1E293B]">
                                        <TableCell
                                            colSpan={6}
                                            className="px-4 py-10 text-center text-sm text-[#94A3B8]"
                                        >
                                            Nenhuma transação encontrada.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    )
}
