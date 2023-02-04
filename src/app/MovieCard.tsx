import Link from 'next/link';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MovieCardModel } from '@/models/MovieCardModel';

export default function MovieCard({ id, title, poster_path, release_date }: MovieCardModel) {
    
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const getDate = (release_date: string) => {
        return formatDistance(new Date(release_date), new Date(), { addSuffix: true, locale: ptBR })
    }

    return (
        <div className='relative'>
            <Link href={`/movie/${id}`}>
                <img src={imagePath + poster_path} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex flex-col justify-end p-2">
                    <h3>{title}</h3>
                    <p>{getDate(release_date)}</p>
                </div>
            </Link>
        </div>
    )
}