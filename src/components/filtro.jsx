import React, { useState } from "react";

export default function Filter({ filter }) {
  const onFilter = (e) => {
    filter(e);
  };

  return (
    <div>
      <section>
        <button onClick={onFilter} value="">
          Todas
        </button>
        <button onClick={onFilter} value={false}>
          Activas
        </button>
        <button onClick={onFilter} value={true}>
          Completadas
        </button>
      </section>
    </div>
  );
}
