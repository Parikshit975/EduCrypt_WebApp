import React, { useMemo } from 'react';
import styles from './button1.module.css';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Button1 = ({ value, handleClick }) => {
  const defaultValue = useMemo(() => "View All Blogs", []);

  return (
    <div className="navbar-collapse">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button
            className={`m-0 btn ${styles.userBtn} text-decoration-none`}
            onClick={handleClick}
          >
            {value}{" "}
            {value === defaultValue && <HiOutlineArrowNarrowRight />}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Button1;
