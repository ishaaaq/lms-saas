'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm } from "react-hook-form"
import  {z} from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"
const formSchema = z.object({
  name: z
    .string()
    .min(1, {message: "Companion is required"} ),
subject: z
    .string()
    .min(1,{message: "subject is required"} ),
  topic: z
    .string()
    .min(1, {message:"topic is required" }),
  voice: z
    .string()
    .min(1, {message:"voice is required" }),
  style: z
    .string()
    .min(1, {message:"style is required"} ),
  duration: z.coerce.number()
    .min(1, {message:"duration is required" })
    
 })


 export default function CompanionForm() {
     const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
        subject: "",
        topic: '',
        voice: '',
        style: '',
        duration: 15,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" {...field} 
                onChange={field.onChange} value={field.value} className="input"/>
              </FormControl>
              <FormDescription>
                This is your companion display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
     
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select  {...field} 
                onValueChange={field.onChange} value={field.value} defaultValue={field.value} className="input">
                    <SelectTrigger className='input capitalize'>
<SelectValue placeholder='Select the subject'/>
                    </SelectTrigger>
                    <SelectContent>
                        {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject} className="capitalize">{subject}</SelectItem>
                        ))}
                        
                    </SelectContent>
                </Select>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion teach?</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter the topic you want to learn -Ex: Derivatives" {...field} 
                onChange={field.onChange} value={field.value} className="input"/>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select {...field} 
                onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                    <SelectTrigger className='input capitalize'>
<SelectValue placeholder='Select voice type'/>
                    </SelectTrigger>
                    <SelectContent>
                       
                            <SelectItem value="Female" className="capitalize">Female</SelectItem>
                            <SelectItem value="Male" className="capitalize">Male</SelectItem>
                    
                        
                    </SelectContent>
                </Select>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select  {...field} 
                onValueChange={field.onChange} value={field.value} defaultValue={field.value} className="input">
                    <SelectTrigger className='input capitalize'>
<SelectValue placeholder='Select voice style'/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="formal" className="capitalize">Formal</SelectItem>
                            <SelectItem value="casual" className="capitalize">Casual</SelectItem>
                        
                    </SelectContent>
                </Select>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter duration in minutes" {...field} 
                onChange={field.onChange} value={field.value} className="input"/>
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
       
        
        <Button type="submit" className="w-full cursor-pointer">Build your companion</Button>
      </form>
    </Form>
  )
}
