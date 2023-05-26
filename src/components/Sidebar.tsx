import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            slug
            title
            lessonType
            availableAt
        }
    }
    `

interface GetLessonQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className="w-[348px] bg-gray-700 border-l p-6 border-gray-600 ">
            <span className=" font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
              {data?.lessons.map(lessons => {
                return(
                    <Lesson
                    key={lessons.id}
                    title={lessons.title}
                    slug={lessons.slug}
                    type={lessons.lessonType}
                    availableAt={new Date(lessons.availableAt)}
                    />
                )
              }) }
            </div>
        </aside>

    )
}