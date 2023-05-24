
import { gql, useQuery } from "@apollo/client"
import { Header } from "./components/Hearder"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"

const GET_LESSONS_QUERY = 
gql`
query{
  lessons{
    id
    title
    teacher {
      name
    }
  }
}
`

interface Lesson {
  id: string
  title: string
}

function App() {
 const { data } = useQuery <{lessons:Lesson[] }>(GET_LESSONS_QUERY) 
  
  

  return (
    <div>
      <Header/>
      <Lesson/>
      <ul>
        {data?.lessons.map(lesson =>{
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
      <Sidebar/>
      <Video/>
    </div>
  )
}

export default App

//CMS = Content Manangerment System

//        OLD
//wordPress = Traz o painem ADMIN é o font-end (Temas)
// =====================================================================

//         NEW
//Handless CMS (GraphCMS) = Painel ADMIN (dados dornecidos atravez de API(Rest ou graphQL))

// React consome essa API do CMS 


//
