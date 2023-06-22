import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {Link, useParams} from 'react-router-dom' 
import classNames from "classnames"

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {

  const {slug} = useParams<{slug:string}>()

  const isActiveLesson = slug === props.slug

  const isLassonAvailableat = isPast(props.availableAt)
  const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm",{
    locale: ptBR,
  })

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableAtDateFormatted}
      </span>
      
      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500':isActiveLesson,        
      })}>
        <header className="flex items-center justify-between">
          {isLassonAvailableat ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-white':isActiveLesson,
              'text-blue-500':!isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em Breve
            </span>
          )
          }

          <span className={classNames("text-xs text-white font-bold rounded px-2 py-[0.125rem] border",{
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO ViVO' : 'AULA PRÁTICA'}
          </span>

        </header>

        <span>
          <strong className={classNames("mt-5 block",{
            'text-whith': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}>
            {props.title}
          </strong>
        </span>
      </div>
    </Link>
  )
}