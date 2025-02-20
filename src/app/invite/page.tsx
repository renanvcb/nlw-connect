import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { InviteCard } from '@/components/invite-card'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/logo.svg'
import medalCopper from '@/assets/medal-copper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InputRoot>
            <InputIcon>
              <Link className="size-5" />
            </InputIcon>
            <InputField
              readOnly
              defaultValue="devstage.com/codecraft-summit-2025/renan-2741"
            />
            <IconButton className="-mr-2">
              <Copy className="size-5" />
            </IconButton>
          </InputRoot>

          <div className="grid gap-3 md:grid-cols-3">
            <InviteCard
              dataText="1042"
              title="Acessos ao link"
              icon={<MousePointerClick className="size-5" />}
            />
            <InviteCard
              dataText="700"
              title="Inscrições feitas"
              icon={<BadgeCheck className="size-5" />}
            />
            <InviteCard
              dataText="3º"
              title="Posição no ranking"
              icon={<Medal className="size-5" />}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[550px] space-y-5 md:max-w-[400px]">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>

        <div className="space-y-4">
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | André Souza
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1.128
            </span>

            <Image
              className="absolute top-0 right-8"
              src={medalGold}
              alt="medalha de ouro"
            />
          </div>
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">2º</span> | Melissa Loures
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              928
            </span>

            <Image
              className="absolute top-0 right-8"
              src={medalSilver}
              alt="medalha de ouro"
            />
          </div>
          <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">3º</span> | Renan Borges
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              700
            </span>

            <Image
              className="absolute top-0 right-8"
              src={medalCopper}
              alt="medalha de ouro"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
