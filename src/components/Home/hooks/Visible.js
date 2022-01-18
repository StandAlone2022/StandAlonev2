import ReactVisibilitySensor from "react-visibility-sensor";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Visible = ({ children, setIsVis, run = true, aos = true }) => {
  const onChan = (isVisible) => {
    if (run) {
      if (isVisible) {
        setIsVis(true);
      }
    }
  };
  useEffect(() => {
    Aos.init();
  }, [setIsVis]);
  return (
    <>
      <ReactVisibilitySensor onChange={onChan}>
        {aos ? (
          <div data-aos="zoom-in" data-aos-duration="2000">
            {children}
          </div>
        ) : (
          <div>{children}</div>
        )}
      </ReactVisibilitySensor>
    </>
  );
};

export default Visible;
