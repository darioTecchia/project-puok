export default function User({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>User {params.id} (Admin)</h1>
      Questa sezione permette la modifica della settimana di dieta e inserire dati sull&apos;andamento del paziente.
    </main>
  );
}