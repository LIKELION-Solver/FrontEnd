import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import cn from "classnames";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./QnA.scss"

const Menu = () => {
  const [visible, setVisible] = useState(false);
 
  return (
    <div>
      <div className={cn("MenuSection")}>
        <TransitionGroup>
          {visible && (
            <CSSTransition classNames={`${visible? 'slideDown':'slideUp'}`} timeout={300}>
              <div className={cn("hideMenuSection")}>
                <ul className={cn("hideMenuUl")}>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/Login">
                      Login/Join
                    </Link>
                  </li>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/Map">
                      Map
                    </Link>
                  </li>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/Bug">
                      Bug
                    </Link>
                  </li>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/Notice">
                      Notice
                    </Link>
                  </li>
                  <li className={cn("Menulist")}>
                    <Link className={cn("MenuLink")} to="/About">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

            
        <button onClick={() => setVisible(!visible)} visible={visible}>
          {visible ? (
            <div className={cn("CloseMenuButton")}>
              <FiX className={cn("closeButton")} />
            </div>
          ) : (
            <div className={cn("OpenMenuButton")}>
              <FiMenu className={cn("openButton")} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Menu;
