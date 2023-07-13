import { UiHeader } from "./styles/components/UiHeader"
import {UiFooter} from "./styles/components/UiFooter"
import {UiMain} from "./styles/components/UiMain"
import Navbar from "./components/Navbar"
import GlobalStyles from "./styles/GlobalStyles"

function App() {

  return (
    <>
    <GlobalStyles />
    <UiHeader>
      <Navbar></Navbar>
    </UiHeader>
    <UiMain></UiMain>
    <UiFooter></UiFooter>
    </>
  )
}

export default App
