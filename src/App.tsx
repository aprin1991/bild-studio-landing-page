import "styles/global.scss";
import { Provider } from "react-redux";
import store from "redux/store";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useLayoutEffect } from "react";
import { Loading } from "components/loading";
import { Footer, Header } from "components";
import "react-toastify/dist/ReactToastify.css";
import "./styles/aos.css";
import Custom404 from "pages/404";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const contextClass = {
  success: "bg-green-800 text-white",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Wrapper>
        <div className="App">
          <Header />
          <main>
            <AnimatePresence exitBeforeEnter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<Loading />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Custom404 />
                    </Suspense>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <ToastContainer
            position="top-left"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={4}
            toastClassName={({ type }) =>
              contextClass[type || "default"] +
              " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            autoClose={3000}
          />
        </div>
      </Wrapper>
    </Provider>
  );
}
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
export default App;
