import './App.css'
import { library } from './mocks/books.json'
import { Header } from './components/Header.jsx'
import { Books } from './components/Books.jsx'

const data = library.map(item => item.book)

function App () {
  return (
    <div className='page'>
      <header>
        <h1 className='text-3xl font-bold underline'>Buscador de libros</h1>
      </header>
      <main>
        <Books data={data} />
      </main>
    </div>
  )
}

export default App
