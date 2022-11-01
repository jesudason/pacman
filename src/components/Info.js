import { FaGithub, FaInfo } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Info.scss";
import { useState, useRef } from "react";
import { Instructions } from "./index";
import { useOnClickOutside } from "../functions/utils";

export default function Info() {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <div className="Info">
      {showModal ? (
        <div className="Lightbox">
          <div className="Lightbox__container" ref={ref}>
            <span
              title="Close"
              className="Lightbox__close"
              onClick={() => setShowModal(false)}
            >
              <IoClose size={24} />
            </span>
            <Instructions />
          </div>
        </div>
      ) : (
        <div className="Links">
          <a
            href="https://github.com/jesudason/pacman"
            className="Links__icon"
            tabIndex="0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <button
            className="Links__icon"
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
