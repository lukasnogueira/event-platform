import { ApolloProvider } from "@apollo/client"
import { Router } from "./router"
import { client } from "./lib/apollo"
import { BrowserRouter} from "react-router-dom"


function App() {



  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
      </ApolloProvider>
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
