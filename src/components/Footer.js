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
            <h2>Pacman Simulator</h2>
            <p>
              This application is a simulation of Pacman moving in a 5x5 unit
              grid. Enter commands to move Pacman around the grid, and report
              its new location.
            </p>

            <p>Rules:</p>
            <ul>
              <li>
                The first valid command is a PLACE command, after that, any
                sequence of commands may be issued, in any order, including
                another PLACE command. All commands prior to an initial PLACE
                command are ignored.
              </li>
              <li>
                This application is case sensitive. Pacman will only respond to
                uppercase commands, writted in the correct format.
              </li>
              <li>
                Acceptible command formats:
                <ul>
                  <li>PLACE X,Y,F</li>
                  <li>MOVE</li>
                  <li>LEFT</li>
                  <li>RIGHT</li>
                  <li>REPORT</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <a
            href="https://github.com/jesudason/pacman"
            className="Footer__icon github"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <button
            className="Footer__icon info"
            onClick={() => setShowModal(true)}
            tabIndex="0"
            type="button"
          >
            <FaInfo size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
