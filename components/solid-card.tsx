import { Card, CardContent } from "./ui/card";

export default function SolidCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="my-16">
      <Card className="bg-background">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{title}</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-balance">{desc}</p>
        </CardContent>
      </Card>
    </div>
  )
}
