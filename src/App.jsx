import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './App.css'
import Page from './components/Page'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider >
  )
}


export default App
