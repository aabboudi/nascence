import { Button } from "./ui/button"

export function CTA({ action = "Ready for worry free business support?" }: { action?: string }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {action}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <LetsTalk />
          </div>
        </div>
      </div>
    </section>
  )
}

function LetsTalk() {
  return (
    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
      Subscribe
    </Button>
  )
}
