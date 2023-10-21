import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BookMySeat from './components/BookMySeat'
import Home from './components/Home'
import './App.css'


const App = ()=>(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/book-tickets" element={<BookMySeat/>} />
</Routes>
</BrowserRouter>
)



export default App
