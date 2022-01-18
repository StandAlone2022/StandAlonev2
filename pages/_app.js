import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import "../src/styles/css/index.css";
import "aos/dist/aos.css";
import "swiper/css";
import "animate.css";

import reducer from "../redux/reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Router from "next/router";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  const [preLoader, setpreLoader] = useState(true);
  Router.events.on("routeChangeStart", (url) => {
    setloading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setTimeout(() => {
      setloading(false);
    }, [1500]);
  });
  useEffect(() => {
    setTimeout(() => {
      setpreLoader(false);
    }, [1500]);
  }, [loading]);
  if (preLoader) {
    return (
      <div className="loader">
        <HashLoader loading={preLoader} size={150} color={"#F79824"} />
      </div>
    );
  }
  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader loading={loading} size={150} color={"#F79824"} />
        </div>
      ) : (
        <Provider store={store}>
          <Component {...pageProps} loading={loading} />
        </Provider>
      )}
    </>
  );
}

export default MyApp;
