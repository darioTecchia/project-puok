This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Progetto PUOK
Progetto giocattolo per lo studio del framework React/Next.

## Attori
- Dottore
- Paziente

## Scenari
- Dottore
    1. Può aggiungere uno o più pazienti all’interno della piattaforma.
    2. Per ogni paziente, può creare una o più diete composte a loro volta da una più settimana e gestire l'andamento di quest'ultima.
    3. Visualizzazione appuntamenti tramite calendario.
- Paziente
    1. Consultare la propria dieta.
    2. Modificare le proprie credenziali d’accesso.
    3. Calcolare la spesa da fare in base alle quantità delle pietanze all’interno delle caselle selezionate all’interno della settimana.
    4. Export della dieta.

## Requisiti Funzionali
- Dottore
    1. Aggiunta di pazienti all’interno della piattaforma web.
    2. Per ogni paziente, creazione/modifica/ripristino delle credenziali d’accesso.
    3. Per ogni paziente, creazione/modifica di diete composte da 1 o più settimane
    4. Ogni settimana conterrà per ogni riga un giorno della settimana (Lun -> Dom) e per ogni colonna i vari pasti (Colazione, Spuntino 1, Pranzo, Spuntino 2, Cena).
    5. Ogni pasto conterrà le pietanze (per facilitare il calcolo spesa, vedi scenario *Paziente - 3*).
    6. Per ogni paziente, inserimento/modifica di dati riguardanti l’andamento della dieta (KPI) sotto forma di grafici.
    7. Storicizzare/Archiviare diete passate
    8. Visualizzazione appuntamenti tramite calendario.
- Paziente
    1. Visualizzazione della dieta.
    2. Modificare le proprie credenziali d’accesso.
    3. Selezionando le celle (giorni/pasto) di una settimana, deve essere calcolata la spesa necessaria da fare.
    4. Esportazione della dieta in formato excel o PDF (stampa).

## Views
Qui di seguito sono indicate le path attualmente accessibili, il simbolo indica lo stato attuale dei lavori. Anche le view con ✅ sono da considerarsi in WIP.

- ✅ Home Page (/) Login
- ✅ Dottore (/dashboard) **Pazienti, utenze, calendario appuntamenti**
    - 🚧 Utenti (/users/[id]) **Modifica credenziali paziente, andamento dieta, statistiche, impostazioni dieta**
- ✅ Paziente (/diet) **Visualizzazione dieta, andamento dieta, modifica credenziali**

## Primi Passi

Per prima cosa, avvia il server di sviluppo:

```bash
npm run dev
# oppure
yarn dev
# oppure
pnpm dev
```

Apri [http://localhost:3000/project-puok](http://localhost:3000/project-puok) nel tuo browser per vedere il risultato.

Puoi iniziare a modificare la pagina modificando `app/page.tsx`. La pagina si aggiornerà automaticamente mentre modifichi il file.

Questo progetto utilizza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) per ottimizzare e caricare automaticamente Inter, un carattere personalizzato di Google Font.
