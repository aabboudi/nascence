import { cn } from "@/lib/utils";
import { AlarmClockCheck, Clipboard, Trophy, Handshake, Lock, Shield, Users } from "lucide-react";

export default function IconsBlock() {
  return (
    <div className="dark:bg-muted/50 relative mx-auto w-fit">
      <div
        role="presentation"
        className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
      <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
        <IntegrationCard>
          <Shield />
        </IntegrationCard>
        <IntegrationCard>
          <AlarmClockCheck />
        </IntegrationCard>
      </div>
      <div className="mx-auto my-2 flex w-fit justify-center gap-2">
        <IntegrationCard>
          <Clipboard />
        </IntegrationCard>
        <IntegrationCard
          borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
          className="dark:bg-white/10">
          <Trophy />
        </IntegrationCard>
        <IntegrationCard>
          <Handshake />
        </IntegrationCard>
      </div>

      <div className="mx-auto flex w-fit justify-center gap-2">
        <IntegrationCard>
          <Users />
        </IntegrationCard>

        <IntegrationCard>
          <Lock />
        </IntegrationCard>
      </div>
    </div>
  );
}

const IntegrationCard = ({ children, className, borderClassName }: { children: React.ReactNode; className?: string; borderClassName?: string }) => {
  return (
    <div className={cn('bg-background relative flex size-20 rounded-xl dark:bg-transparent', className)}>
      <div
        role="presentation"
        className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  )
}
