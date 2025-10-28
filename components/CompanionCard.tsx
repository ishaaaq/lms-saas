import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    bg: string;
}
export default function CompanionCard({id, name, topic, subject, duration, bg}: CompanionCardProps) {
  return (
    <article className="companion-card" style={{backgroundColor: bg}}>
          
          <div className="flex items-center justify-between">
            <div className='subject-badge rounded-md'>
              {subject}
            </div>
              <button className="companion-bookmark rounded-md">
                    <Image src="/icons/bookmark.svg" alt='bookmark' width={13.5} height={13.5}/>

                </button>
            </div> 
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex items-center gap-2">
                <Image src='/icons/clock.svg' alt='duration' width={13.5} height={13.5}/>
                <p className="text-sm">{`${duration} mins duration`}</p>
                 </div>
       <Link href={`/companions/${id}`} className='w-full'>
       <button className="btn-primary w-full justify-center">
        Launch Lesson
       </button>
       </Link>
    </article>
  )
}
