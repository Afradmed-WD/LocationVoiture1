import React, { useState } from "react";

const DateTimePicker = () => {
  const [date, setDate] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setShowPicker(false);
  };

  return (
    <div>
      <h2>Sélectionnez une date et une heure</h2>
      <button onClick={() => setShowPicker(true)}>Choisir la date</button>

      {showPicker && (
        <div style={{
          position: "absolute",
          background: "white",
          padding: "10px",
          border: "1px solid #ccc",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
        }}>
          <input
            type="datetime-local"
            value={date}
            onChange={handleDateChange}
          />
          <button onClick={() => setShowPicker(false)}>Fermer</button>
        </div>
      )}

      {date && <p>Date sélectionnée : {date}</p>}
    </div>
  );
};

export default DateTimePicker;
