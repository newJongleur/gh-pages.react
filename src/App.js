// import { BrowserRouter, Routes, Route } from "react-router-dom";// History模式
import { HashRouter, Routes, Route } from "react-router-dom";// Hash模式
import Home from './views/HomeView'
import About from './views/AboutView'
import About from './views/NotFoundView'

export default () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<LA />}>
            <Route path="/test" element={<Test />} />
          </Route> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  )
};
