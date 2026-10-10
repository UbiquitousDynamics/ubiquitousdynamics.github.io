# Ubiquitous Dynamics: Resource-Aware Physical AI

Stato: proposta di ricerca. Revisione bibliografica, verifica della piattaforma e validazione sperimentale ancora da completare.

## 1. Idea unificante

Una macchina fisica dispone di calcolo, energia, connettività e attenzione umana limitati. Per ogni richiesta deve scegliere quale risorsa usare per produrre un risultato utile.

Efficienza, interazione naturale e supervisione umana sono aspetti dello stesso problema. Il meccanismo proposto seleziona tra algoritmo deterministico, modello piccolo locale, modello grande locale e richiesta all'utente. Il deferral verso una persona è una componente human-in-the-loop; non dimostra cooperazione in senso pieno. L'autonomia offline è un requisito di progetto.

## 2. Vision e mission

Vision: macchine intelligenti che interagiscono naturalmente con le persone rispettando i limiti del mondo fisico.

Mission: progettare, costruire e sperimentare sistemi Physical AI che selezionano le risorse in modo efficiente, interpretano istruzioni naturali e ricorrono alla supervisione umana quando necessario.

## 3. Domanda scientifica

Come può una macchina scegliere, per ogni richiesta, tra algoritmo deterministico, modello piccolo locale, modello grande locale e richiesta all'utente per massimizzare il successo dei task entro budget prestabiliti di energia e latenza, con limiti al tasso di errori e alle richieste di intervento umano?

I budget e i limiti saranno fissati dopo uno studio preliminare delle baseline e prima della valutazione finale. Il primo studio considera soltanto tipo di richiesta ed energia disponibile come variabili della politica; altri fattori restano controllati.

## 4. Ipotesi falsificabile

Una politica di selezione può ridurre l'energia per task completato rispetto alle baseline competitive, mantenendo il successo entro un margine di non inferiorità prestabilito e rispettando vincoli di latenza e un tetto alle richieste all'utente.

Target energetico, margine sul successo, vincoli di latenza e tetto alle richieste saranno definiti dopo il pilot, poi mantenuti fissi sulla valutazione finale. Il consumo comprende l'overhead della politica e tutti i tentativi, anche quelli falliti.

## 5. Esiti e costo umano

Una richiesta all'utente non conta come successo. Un task è completato solo quando soddisfa un criterio verificabile, definito prima dell'esperimento. Gli esiti distinguono successo autonomo, successo assistito, fallimento e mancato completamento entro il limite temporale.

Si riportano separatamente successo autonomo e totale, richieste per task, quota di task assistiti, tempo umano attivo, attesa della risposta e latenza complessiva. L'energia totale consumata su tutti i tentativi viene divisa per i task completati; si riporta anche l'energia per task tentato. Se nessun task viene completato, l'energia per completamento non è definita.

Il carico percepito richiede partecipanti reali. Nel pilot si possono usare risposte simulate o pochi test esplorativi, dichiarandone il protocollo e i limiti. Una simulazione non dimostra accettabilità o riduzione del carico umano.

## 6. Research questions

| RQ | Domanda | Misure principali |
| --- | --- | --- |
| RQ1 | La selezione riduce l'energia per task completato entro i vincoli di successo, latenza e intervento umano? | Energia per completamento e tentativo, successo autonomo e assistito, latenza, overhead |
| RQ2 | I modelli locali ridotti interpretano il linguaggio naturale con affidabilità sufficiente per i task definiti? | Accuratezza di interpretazione, successo, latenza |
| RQ3 | Il deferral nei casi incerti riduce errori ed energia sprecata entro un limite al costo umano? | Errori, energia, richieste per task, tempo umano; carico percepito solo con utenti reali |

## 7. Disegno sperimentale

Helios AI è il banco di prova iniziale previsto. Prima degli esperimenti occorre verificare disponibilità di un percorso deterministico, almeno due modelli locali eseguibili sulla Jetson e una misura di potenza adeguata. Se questi requisiti non sono soddisfatti, l'ipotesi non è ancora testabile sulla piattaforma.

Baseline: miglior modello piccolo statico, miglior modello grande statico, cascata piccolo-grande, router a regole e soluzione deterministica dove applicabile. Si confrontano sugli stessi task e nelle stesse condizioni. Ogni percorso deve essere valutato entro gli stessi limiti di tempo e assistenza umana, documentando eventuali differenze.

Il protocollo deve dichiarare strumento, punto di misura, frequenza di campionamento, condizioni operative e confine energetico misurato. Comprende selezione, inferenza, tentativi falliti e attesa secondo un criterio uniforme. Calibrazione, ripetizioni e incertezza delle misure vanno documentate. Pilot e valutazione finale usano insiemi distinti di richieste.

AGI-Rover e HelioRoute restano possibili estensioni future. La generalizzazione dell'architettura non è dimostrata e non costituisce evidenza per l'ipotesi iniziale.

## 8. Condizioni prima di presentare risultati

1. Completare la ricerca bibliografica su model cascades, early-exit, edge/cloud offloading, energy-aware planning e human-in-the-loop, posizionando il contributo rispetto ai lavori esistenti.
2. Verificare la piattaforma e misurare le baseline nel pilot.
3. Fissare budget, margini, criteri di successo e costo umano prima della valutazione finale.
4. Completare gli esperimenti e riportare risultati, incertezza e limiti.

Fino ad allora il sito usa "we are exploring" e presenta l'ipotesi come proposta, senza attribuire benefici già dimostrati. Il testo pubblico aggiornato è in `index.html`; il catalogo dei progetti è in `data/projects.json`.

Physical AI & Autonomous Systems è il dominio. Learning by Building è il metodo, con pratica STEM e team multidisciplinari. Eco-Pragmatism è il criterio: valutare utilità e risorse in contesto, usando un algoritmo semplice quando l'AI non è necessaria.
