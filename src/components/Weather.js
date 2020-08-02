import React from "react";
import { useSelector } from "react-redux";

export default function Weather() {
  const { data, loading, error, isActive } = useSelector(
    (state) => state.weather
  );
  const { name, main, weather, wind, clouds } = data;
  const icon = data?.weather?.[0]?.icon;

  if (loading) {
    return (
      <div className="spinner-border text-danger mt-3" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-3" role="alert">
        Погоды не произошло, потому что произошла ошибка
      </div>
    );
  }

  if (!isActive) return null;

  return (
    <div className="weather mt-3">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Город</th>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Температура (С)</td>
            <td>{main?.temp}</td>
          </tr>
          <tr>
            <td>Ощущается как (С)</td>
            <td>{main?.feels_like}</td>
          </tr>
          <tr>
            <td>{weather?.[0]?.description}</td>
            <td>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt="icon"
                style={{ width: "35px" }}
              />
            </td>
          </tr>
          <tr>
            <td>Ветер (м/с)</td>
            <td>{wind?.speed}</td>
          </tr>
          <tr>
            <td>Облачность (%)</td>
            <td>{clouds?.all}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
