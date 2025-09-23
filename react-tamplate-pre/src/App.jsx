
import { BrowserRouter } from 'react-router';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<add/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
