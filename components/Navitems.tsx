'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navitems = [
    {label: 'Home', href:'/'},
    {label: 'Companions', href:'/companions'},
    {label: 'My journey', href:'my-journey'}
]

export default function Navitems() {
    const pathname = usePathname()
  return (
    <div className="gap-4 flex items-center">
      {navitems.map(({label, href}) => (
        <Link key={label}  href={href} className={cn(pathname === href && 'text-primary font-semibold')}
        >{label}</Link>
      ))}
    </div>
  )
}
