import React from 'react';
import c from './BtnRoutes.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {routeList} from "../../utils/routeList";

function BtnRoutes() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className={c.row}>
        {
          routeList.map(item => (
            <div key={item.id} className={c.btn}>
              <NavLink className={({ isActive }) => (isActive ? c.linkActive : c.link)} to={item.route}>
                {item.text}
              </NavLink>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
}

export default BtnRoutes;