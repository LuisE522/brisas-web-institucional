import EventoInfo from "@/components/Panel/Eventos/EventoInfo";
import { API_URL } from "@/const";

export default async function page({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `${API_URL}/eventos/listareventos/${params.slug}`,
    {
      method: "GET",
      cache: 'no-store'
    }
  );

  const res = await response.json();

  console.log(res);

  return (
    <>
      <EventoInfo evento={res} />
    </>
  );
}
