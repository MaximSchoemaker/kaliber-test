import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './App.css'
import Spring from './components/Spring'
import Gesture from './components/Gesture'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Spring />
      <Gesture />
    </QueryClientProvider>
  )
}


export default App
