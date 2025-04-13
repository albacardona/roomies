export const EventsList = () => {
  return (
    <section className="h-full flex flex-col gap-6 border border-bd-primary rounded-lg py-6 overflow-hidden">
      <h2 className="px-6">Aquí se verá la lista de eventos ya programados y aceptados:</h2>
      <div className="h-[95%] pl-10 overflow-hidden">
        <ul className="h-full flex flex-col gap-2 overflow-auto">
          <li>Evento 1</li>
          <li>Evento 2</li>
          <li>Evento 3</li>
          <li>Evento 4</li>
          <li>Evento 5</li>
        </ul>
      </div>
    </section>
  );
};
