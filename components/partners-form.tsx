"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  PhoneInput
} from "@/components/ui/phone-input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from "@/components/ui/multi-select"
import {
  Textarea
} from "@/components/ui/textarea"

const formSchema = z.object({
  first_name: z.string().min(1).min(1).max(50),
  last_name: z.string().min(1).min(1).max(50),
  company_name: z.string().min(1).min(1).max(50),
  partner_role: z.string().min(1).min(1).max(50),
  email: z.string(),
  phone_number: z.string().optional(),
  partner_contract_vehicle: z.string().max(100).optional(),
  partner_naics: z.array(z.string()).min(1, {
    error: "Please select at least one item"
  }),
  partner_message: z.string()
});

const naics_codes = [
  {"code": 561720, "service": "Janitorial Services"},
  {"code": 561210, "service": "Facilities Support Services"},
  {"code": 561730, "service": "Landscaping Services"},
  {"code": 562111, "service": "Waste Collection"},
]

export default function PartnersForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      company_name: "",
      partner_role: "",
      email: "",
      phone_number: "",
      partner_contract_vehicle: "",
      partner_naics: [],
      partner_message: "",
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      
      // toast(
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      //   </pre>
      // );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto px-4 lg:px-0 py-10">
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input 
                placeholder="John"
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input 
                placeholder="Doe"
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input 
                placeholder="Your Company, LLC"
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="partner_role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Input 
                placeholder="Role"
                
                type=""
                {...field} />
              </FormControl>
              <FormDescription>Your role or title within the company.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-6">
            
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                placeholder="john.doe@your-company.com"
                
                type="email"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
          <div className="col-span-6">
            
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="Placeholder"
                    {...field}
                    defaultCountry="US"
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
            
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="partner_contract_vehicle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Vehicle</FormLabel>
              <FormControl>
                <Input 
                placeholder="Contract vehicle"
                
                type="text"
                {...field} />
              </FormControl>
              <FormDescription>Any specific contract vehicle.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
           <FormField
              control={form.control}
              name="partner_naics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NAICS Codes</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="max-w-xs"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select your core NAICS codes" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                      <MultiSelectorList>
                        {naics_codes.map(naics => (
                          <MultiSelectorItem key={naics.code} value={naics.code.toString()}>{naics.code.toString()} - {naics.service}</MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>
                  {/* <FormDescription>Select your company's core NAICS codes</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
        
        <FormField
          control={form.control}
          name="partner_message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message..."
                  // className="resize-none"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>You can @mention other users and organizations.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="cursor-pointer" type="submit">Submit</Button>
        <Button className="cursor-pointer ml-3" type="reset" variant="outline" onClick={() => form.reset()}>Reset</Button>
      </form>
    </Form>
  )
}
