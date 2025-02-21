import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { InviteCard } from './invite-card'

export function Stats() {
  return (
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
  )
}
