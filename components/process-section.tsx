import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper"

const steps = [
  {
    step: 1,
    title: "Schedule a call",
    description: "Our team will work with you to get an understanding of your specific business requirements",
  },
  {
    step: 2,
    title: "Connect with our team",
    description: "We employ our vetted team members who will best fit your business culture and needs",
  },
  {
    step: 3,
    title: "Enjoy more efficiency",
    description: "Focus on your business, while our team of experts takes care of the rest",
  },
]

export function ProcessSectionHorizontal() {
  return (
    <div className="space-y-8 text-center max-w-7xl mx-auto pb-32">
      <Stepper defaultValue={3}>
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            className="relative flex-1 flex-col!"
            disabled={true}
          >
            <StepperTrigger className="flex-col gap-3 rounded">
              <StepperIndicator className="size-8 text-xl" />
              <div className="space-y-0.5 px-2">
                <StepperTitle className="text-xl">{title}</StepperTitle>
                <StepperDescription className="max-sm:hidden max-w-xs text-balance">
                  {description}
                </StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none mt-1" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  )
}

export function ProcessSectionVertical() {
    return (
    <div className="space-y-8 text-center px-5">
      <Stepper defaultValue={3} orientation="vertical">
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            className="relative items-start not-last:flex-1"
            disabled={true}
          >
            <StepperTrigger className="items-start rounded pb-12 last:pb-0">
              <StepperIndicator className="mt-1" />
              <div className="mt-0.5 space-y-0.5 px-2 text-left">
                <StepperTitle>{title}</StepperTitle>
                <StepperDescription>{description}</StepperDescription>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)] mt-1" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  )
}
