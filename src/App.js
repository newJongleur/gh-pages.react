import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/HomeView'
import About from './views/AboutView'

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LA />}>
            <Route path="/test" element={<Test />} />
          </Route> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};
// 用来作为 404 页面的组件
const NotFound = () => {
  return (
    <>
      <label>404</label>
    </>
  );
};