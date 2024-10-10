import ListEventos from "@/components/Panel/Eventos/ListEventos";
import { API_URL } from "@/const";
import { getAuthToken } from "@/lib/getUserDataServer";
import React from "react";

export default async function EventosPage() {
  const token = getAuthToken();

  const response = await fetch(`${API_URL}/eventos/listevents`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const res = await response.json();

  return (
    <>
      <ListEventos eventos={res} />
    </>
  );
}
