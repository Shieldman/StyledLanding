import { UiHeader } from "./styles/components/UiHeader"
import {UiFooter} from "./styles/components/UiFooter"
import {UiMain} from "./styles/components/UiMain"
import Navbar from "./components/Navbar"
import GlobalStyles from "./styles/GlobalStyles"
import PokeModule from "./components/PokeModule"


function App() {

  return (
    <>
    <GlobalStyles />
    <UiHeader>
      <Navbar></Navbar>
    </UiHeader>
    <UiMain>
      <PokeModule />
    </UiMain>
    <UiFooter>
      <p>All rights reserved to Arnau || 2023</p>
    </UiFooter>
    </>
  )
}

export default App
