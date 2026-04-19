import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import HomeLayout from "./Layouts/HomeLayout"
import ProductId from "./pages/Product"

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<ProductId />} />
      <Route path="*" element={<NotFound />} /> 
      </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
  )
}

export default App