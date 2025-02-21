import medalCopper from '@/assets/medal-copper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import Image from 'next/image'

export function Ranking() {
  return (
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
  )
}
