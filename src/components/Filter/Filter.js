import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filter-slice";
import selectorsFilter from "../../redux/filter/filter-selectors";
import Title from "../Text";
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(selectorsFilter.getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <Title text="Find contacts by name" id="medium" />
      <div className={s.filter}>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </>
  );
};

export default Filter;
