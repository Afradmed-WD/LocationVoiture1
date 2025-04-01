import { useState } from "react";
import React from "react";
export default function CarRental() {
  const prixParJour = 50;
  const [jours, setJours] = useState(1);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <label className="block text-sm font-medium">Nombre de jours :</label>
      <select 
        value={jours} 
        onChange={(e) => setJours(e.target.value)} 
        className="w-full p-2 border rounded-lg"
      >
        {[...Array(30).keys()].map((n) => (
          <option key={n + 1} value={n + 1}>{n + 1} jours</option>
        ))}
      </select>

      <p className="mt-2 text-lg font-semibold">Prix : {jours * prixParJour} MAD</p>
    </div>
  );
}
