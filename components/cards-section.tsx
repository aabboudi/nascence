import { Card, CardContent } from "./ui/card";

interface CardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

interface CardsSectionProps {
  title?: string;
  desc?: string;
  cards: CardProps[];
}

export default function CardsSection(props: CardsSectionProps) {
  return (
    <section className="py-20 bg-muted/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {props.title && <h2 className="text-3xl font-bold max-w-xl text-foreground mx-auto mb-6">{props.title}</h2>}
            {props.desc && <p className="text-xl text-muted-foreground">{props.desc}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {props.cards.map((card, index) => {
              const CardIcon = card.icon;

              return (
                <Card className="text-center" key={index}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-background border-2 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CardIcon className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{card.title}</div>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
