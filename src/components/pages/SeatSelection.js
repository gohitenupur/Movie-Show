import React, {  useState } from "react";
import "../../styles/seat.css";

// DRY

const SeatSelection = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  function seatNum(i, j) {
    return 8 * i + j + 1;
  }

  return (
    <div className="container">
      <div className="seats contents">
        {[1, 2, 3].map((seatRow, i) => {
          return (
            <div className={`row mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                return (
                  <div
                    className={`seat ${
                      selectedSeat.includes(seatNum(i,j)) ? "success" : ""
                    }`}
                    key={seatNum(i,j)}
                    onClick={() => {
                      const previousSeats = [...selectedSeat];
                      if (selectedSeat.includes(seatNum(i,j))) {
                        const allSeatsExceptCurrent = previousSeats.filter(
                          (currentSeat) => {
                            return currentSeat !== seatNum(i,j);
                          }
                        );
                        setSelectedSeat(allSeatsExceptCurrent);
                      } else {
                        console.log("Here",seatNum(i,j))
                        setSelectedSeat([...previousSeats, seatNum(i,j)]);
                      }
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
        {selectedSeat.length?<button className="booked">
            Book Tickets
        </button>:null}
      </div>
    </div>
  );
};

export default SeatSelection;