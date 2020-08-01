import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTownField, fetchTown } from "../actions/actionCreators";

export default function ChooseTown() {
  const { item, loading, error } = useSelector((state) => state.chooseTown);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeTownField(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTown(dispatch, item.town);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Введите город"
          name="town"
          required
          value={item.town}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        Дай погоду
      </button>
      <div>{error}</div>
    </form>
  );
}
