import { FaGithub } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import "./Footer.scss";
import { useState, useEffect, useRef } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Footer() {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <div className="Footer">
      {showModal ? (
        <div className="Lightbox">
          <div className="Lightbox__content" ref={ref}>
            <span
              title="Close"
              className="Lightbox__close"
              onClick={() => setShowModal(false)}
            >
              X
            </span>
            LIGHTBOX
          </div>
        </div>
      ) : (
        <div>
          <a
            href="https://github.com/jesudason/pacman"
            className="Footer__icon github"
            tabIndex="0"
          >
            <FaGithub />
          </a>
          <span
            className="Footer__icon info"
            onClick={() => setShowModal(true)}
            tabIndex="0"
          >
            <FaInfo />
          </span>
        </div>
      )}
    </div>
  );
}
