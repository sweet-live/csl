import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import BodyWorks from "./Panels/BodyWorks";
import Management from "./Panels/Management";
import MetalWorks from "./Panels/MetalWorks";
import PaintWorks from "./Panels/PaintWorks";
import "./servicetabs.scss";

const ServiceTabs = () => {
  const [active, setActive] = useState(0);

  const renderPanel = () => {
    switch (active) {
      case 0:
        return <BodyWorks />;
      case 1:
        return <PaintWorks />;
      case 2:
        return <MetalWorks />;
      case 3:
        return <Management />;
      default:
        return <div />;
    }
  };
  return (
    <div className="tabs">
      <div className="button-panel">
        <div
          className={`button ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Bodyworks
        </div>
        <div
          className={`button ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Paintworks
        </div>
        <div
          className={`button ${active === 2 ? "active" : ""}`}
          onClick={() => setActive(2)}
        >
          Custom metal works
        </div>
        <div
          className={`button ${active === 3 ? "active" : ""}`}
          onClick={() => setActive(3)}
        >
          Project management
        </div>
      </div>
      <div className="panel">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={active}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            {renderPanel()}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default ServiceTabs;
