Kratke instrukcije za povlačenje I pokretanje projekta na lokalnoj mašini

1) na desktopu se otovi git bash
git config --local user.name "Tvoj username"
git config --local user.email "Tvoj email sa Git-a"
2) git init 
3) git clone pa link sa ovog repozitorijuma
4) git pull origin main
5) git checkout -b src
6) radi se normalno
7) git add .
8) git commit -m "asdas"
9) git push origin src

Ove korake pratiti za dodavanje na zajednički git repozitorijum!
Opis funkcionalnosti projekta

Naša tema seminarskog rada je veb aplikacija za iznajmljivanje vozila. Konkretno u našoj aplikaciji imamo 5 aktivnih stracina koje predstavljaju početnu stranicu, stranicu o nama, stranicu sa ponudama automobila i naš kontakt. 
Na svakoj od njih imamo primenjene faktore responzivnosti, tako da je svaka od stranica pregledna na svim tipovima uređaja i pregledača. 
Osnovna ideja aplikacije jeste da svaki korisnik bude u mogućnsoti da veoma jednostavno dođe do njemu bitnih informacija o našoj agenciji. Konkretno osnovna ideja je bila da se na transparentan način prikaže sva ponuda automobila, ali i bitne informacije za kontakt kako bi svaki kupac veoma jednostavno mogao da kupi usluge naše agencije.
Kao prvu funkcionalnost na koju korisnik nailazi kada ima susret sa našim sajtom jeste dinamični navbar. U njemu imamo linkove ka svim našim stranicama, a ukoliko se korisnik u datom trenutku nalazi u nekoj od straica, ta konkretna stranica će biti osenčena drugom bojom. Sam navbar je responzivan, tako da u zavisnosti od vrste uređaja, imamo raziličite pristupe dizajna i izgleda istog.
Sledeća bitna funkcionalnost koju poseduje naša početna stranica je sekcija „pronađite Vaše vozilo“.U njoj imamo posebna polja za unos neophodnih podataka o preuzimanju vozila, a u to se podrazumeva adresa prijema vozila, adresa predaje vozila, vreme, datum i tako dalje. Kada korisnik unese sve neophodne informacije u polja koja su takođe sva neophodna za unos, podatke šalje nama preko dugmeta Pronađi vozilo. Nažalost, trenutno samo dugme ne prosleđuje korisniku neke odatne informacije, ali nadamo se da će se i to uskoro promeniti.
Ostatak početne stranice je vezan za neke statične informacije o nama, ali ispod toga se nalazi i sama ponuda nekog manjeg broja vozaila od kompletne ponude. Dakle, ukupno je prikazano šest automobila koje mi imamo u ponudi, i za svaki od automobila imamo prikazanu fotografiju, godište, cenu iznajmljivanja, kilometražu i tako dalje. Koristik može dobiti  dodatne informacije o automobilu tako što će kliknuti na dugme detalji, i tada će mu se otvoriti stranica sa konkretnim automobilom i svim informacijama o njemu. 
Ispod sekcije sa ponudom automobila, nalazi se dinamički sektor sa utiscima naših kupaca. Tu smo se malo našalili, pa smo stavili fotografije naših prijatelja i uglavnom na smešan način prikazali nihovo viđenje našeg sajta i konkretno naše agencije. Ispod sekcije sa utiscima klijenata, imamo prikaza naša tri bloga (ne postoji više od tri bloga u našim podacima sajta). Korisnik može da otovori svaki od njih i da ih čita.
Stranica „O nama“ ima već postojeću UI komponentu koja oktivrno prikaz informacije o nama, zatim još jednu komponentu koja takođe prikazuje neke informacije o našoj agenciji.
Zatim, na samom kraju imamo sekciju u kojoj se nalaze naši članovi tima, sa dinamičkim prikazom fotografija i linkova ka njihovim društvenim mrežama.

Stranica „Automobili“ sadrži elemente svim postojećih automobila koje mi imamo u okviru podataka upotrebljenih za naš sajt. Na početku same stranice koja pokazuje našu kompletnu ponudu, imamo implementiran filter koji može da sortira automobile po ceni iznajmljivanja rastuće ili opadajuće.
Stranica „Blog“ sadrži sve blogove koje imamo na sajtu. Konkretno mi imamo napisana samo tri bloga, pa smo pozvali dva puta Stranicu koja prikazuje sve blogove da bismo dobili malo na sadržajnosti same stranice. Svaki blog može da se otvori i pročita, a pri prikazu pojedinačnog bloga, sa strane imamo i manji prikaz ostalih blogova na stranici, tako da korisnik može da pročita i sve naše ostale blogove.
Naša poslednja stranica je „Kontakt“. U okvori ove stranice, korisnik može da nađe sve neophodne informacije o nama na jendom mestu. Na desnoj strani se nalaze Informacije za kontakt i linkovi ka našim društvenim mrežama, a na levoj stranice se nalazi forma za slanje poruka našoj agenciji. Korisnik unosi neophodne podatke i može nas obavestiti o nekom pitanju na veoma jednsotavan način.

