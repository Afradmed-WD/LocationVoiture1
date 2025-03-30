import React, { useEffect, useState } from "react";
import Customaxios from "../axios/Customaxios";

function Avis() {
  const [avis, setAvis] = useState([]);

  useEffect(() => {
    Customaxios.get("/avis").then(({ data }) => {
      Promise.all(data.map((a) => Customaxios.get(`/client/${a.id_client}`))).then((res) => {
        setAvis(data.map((a, i) => ({ ...a, nom: `${res[i].data.nom} ${res[i].data.prenom}` })));
      });
    });
  }, []);

  return (
    <div>
      <p className="text-3xl font-semibold text-center py-4">Avis de nos clients</p>
      <div className="grid grid-cols-3 gap-4 mx-10">
        {avis.map((item) => (
          <div key={item.id} className="bg-white border rounded-xl shadow-xl p-4">
            <p className="my-4">{item.commentaire}</p>
            <p className="bg-[#5937E0] text-white text-center p-4 rounded-b-xl">{item.nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avis;
