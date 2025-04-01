import React from "react";
export default function ReservationForm() {
  return (
    <div className=" mx-auto w-[500px] bg-white p-6 mt-10 rounded-lg shadow-md px-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Formulaire de Réservation</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">ID Client</label>
          <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">ID Voiture</label>
          <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Date Début</label>
          <input type="date" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Date Fin</label>
          <input type="date" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Statut</label>
          <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>En cours</option>
            <option>Terminée</option>
            <option>Annulée</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-[#5937E0] text-white py-2 rounded-lg ">
          Soumettre
        </button>
        
        
        
      </form>
    </div>
  );
}
