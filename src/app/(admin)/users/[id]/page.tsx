export default function User({ params }: { params: { id: string } }) {
  return (
    <main id="user-id">
      <div className="container py-3">
        <div className='mb-4'>
          <h1 className='display-1'>[{params.id}]</h1>
          Questa sezione permette la modifica della settimana di dieta e inserire dati sull&apos;andamento del paziente.
        </div>
      </div>
    </main>
  );
}