*****  ZADANIE 1 (rabat w zaleznosci od warunku)*****

-- WSZYSTJI RÓB W TEJ SAMOWYWOLUJACYEJ FUNKCJI ANONIMOWEJ !
	chyba ze celowo tworzysz funkcje ktore mozna wykorlrzystac gdzie indziej

-- var discount = 0; // %  -- on sobie oznaczyl to jako wartosc procentowa
		WAZNIEJSZA JEST CZYTLENOSC KODU NIZ JAKIES CHUJ WIE JAKIE SZTUCZKI PROGRAMISTYCZNE !!!
		
--  pamietaj ze to co jest w ifie to mozna sobie np rpzypisac tez do zmiennej
	i tam bedzie true lub false 
		var dupa = products >= 5 && products <= 20		// TRUE lub FALSE
		
--	OPEARTOR  && !! 
	UWAGA ! Bardzo częste założenie jest takie że zwraca on true lub FALSE !
	Jeśli pierwszy jest FALSE to NAWET NIE DZIE DO DRUGIEGO !! czyli tam moze byc juz bodejco !
	A jesli pierwszy jest TRUE to zapomiona o pioerwszym I ZWRACA TO CO W DRUGIM !!
	
	CZYLI: 
	var dupa = "pies" && "kot"
	TO:
	dupa -> kot  !!! A NIE TRUE (ale oczywiscie dla ifa string NIEPUSTY to TRUE) !!
	
	Ale juz:
	var dupa = 0 && "kot"
	TO:
	dupa -> 0
	
--	&& jest DOKŁADNĄ ODWROTNOŚCIĄ ||  !!!

	No bo tutaj w || JESLI PIERWSZY JEST TRUE to od razu dostajemy jego wartosc I NAWET NIE 
	IDZIEMY DO DRUGIEGO
	A jesli pierwszy jest FALSE DO jebac pierwszy I ZWARACA TO CO NA DRUGIM !!!
	
	Dlatego to sie zajebiscie nadaje do tworzenia warunków przypisania wartosci (zamiast if)

--	w JS NIE MA ELSEIF !! :) to jest po prostu kolejny if po else, sa to dwie niezalezne instrukcje 
	(czyli z technicznego punktu widzenia nie ma "else if")

--	CIEKAWE !
	On nawet oczywistą kolejnośc wykonywania dzialan daje w nawiasty DLA LEPSZEJ CZYTELNOSCI KODU !
		total = price - (price * (discount / 100));
		
-- -------- ZAJEBISTA NOWOŚĆ !!! --------------
	console.log("Podstawowa cena produktu to %szł, po obniżce to %szł.", price, total);
	
		TO CO POD %s w console.logu to tam wskakuja kolejne argumnety console loga po przeicnku !!!
		
		tak sobei mozna zajebiscie sparadzac co jest co za pomoca %s
			console.log(" czosz: %s ", czosz);
			console.log(" czosz2: %s ", czosz2);
		
		%s dziala tylko w konsole log 
		console.log to nawet nie jest js tylko API przegladarki
		nie jest to ecmaScript
		
		(w node.js tez jest console.log)
		
--	Ja jebie w node.js mozna podac sciezke "node scripts.js" I TEZ SIE ODPALI TEN PLIK !!
		oczywiscie nie ma mowy o manipulowaniu DOM no bo jak, ALE WSZYSTKIE SKRYPTY JS VANILLA OK !
		

*****  ZADANIE 2 (petle) *****

-- JEDNA BARDZO WAZNA INFORMACJA ! ----------------

	Z PĘTLI FOR IN KORZYSTAMY Z REGUŁY NA OBIEKTACH !!!
	Nie na tablicach.
	Na tablicach korzystamy ze zwykłych pętli

	ALE UWAGA ! Za to dobrym też wyjściem byłoby zrobienie tego
	z pomocą pętli forEach !!
	
		for(var category in movies) {

			console.log(category + ":");

				for(var i = 0; i < movies[category].length; i++) {
					console.log(movies[category][i]);
				}

				// movies[category].forEach(function(elem) {	czyli to tez ok
				//     console.log(elem);
				// });

			console.log("=======================");
		}
	
	Czyli na [] albo for albo forEach

--	zabawa ze zmiennymi
	movies["Dla dzieci"]	- pierwsza tablica
	
	mozna oczywiscie tez tak
	var dupa = "Dla dzieci";
	movies[dupa]
	
*****  ZADANIE 3 (toBoolean) *****	

--	PAMIĘTAJ !
	Jeśli zrobisz skrypt i nie opleciesz go w ta samomwywolujaca sie anonimowa finkcje
	i podlaczysz go do strony
	TO KAZDY INNY SKRYPT BEDZIE MOGL Z NICH KORZYSTAC

--	------ UWAGA ! PETARDA !!!
	
	CHODZI WLASNIE O TO JEGO ROZWIAZANIE !!!
	I mowi ze czesto tak jest w kodach inych osob ze tak sobie 
	sprawdzaja czy cos jest false czy true
	No i to sie nazywa BANG BANG :)
	
	Wiedząc o tym że ! to zaprzeczenie:
	!true -> false
	
	No i uwaga z innymi prazwdziwymi wartosciami jest tak samo !
	!2 -> false
	!"" -> true
	
	czyli zeby zamienic ja no to :
	!!"" -> false !!!
	!!{} -> true - PUSTY OBIEKT JEST TRUE !!!
	!!2	 -> true
	!!"piesss"	->	true !!!!!!!
	
*****  ZADANIE 4 (sumowanie wartosci z podanej tabeli) *****	
		
--		ZAPAMIETAJ !
	TABLICE W JS DO FUNKCJI SA PRZEKAZYWANE PRZEZ REFERENCJE !!!
	Czyli funcje zmieniaja ich watosc !!!

----- WAŻNE -- REDUCE
	JEst to funckja na tablicach podobnie jak forEach
	
	REDUCE przyjmuje funkcje z dwoma (i więcej) parametrami 
	No i uwaga mozemy od razu w niej zrobic callbacka
	ALE MOZEMY TEZ PRZEKAZAC FUNKCJE ktora przyjmuje dokladnie takie same 
	parametry jak reduce !!!
	
				var sumValues = function(prevVal, currVal) {
					return prevVal + currVal;
				};

				return numbers.reduce(sumValues);	// callback BEZ NAWIASÓW 
	
	
	No ale zrobmy na nromlanej reduce:
	
	numbers.reduce(function(prevVal, currVal) {
		return prevVal + currVal
	)}
	
	
	REDUCE:	--------------------------------------------
	Działa jak PĘTLA !!!
	I pierwszy argument to jest to CO ZWRÓCIŁA TO DEJ PORY
	A drugi argument to jest to CO MA ZROBIĆ Z KOLEJNYM ELEMENTEM
	
	JEJ WYNIK Z REGÓŁY ZAWSZE NALEŻY PRZYPISAĆ DO ZMIENNEJ !
	CZYLI:
	
	var result =	numbers.reduce(function(prevVal, currVal) {
			return prevVal + currVal
		)}
	
	return result;	--------------------------------------
	
	Oczywiście moze tutaj byc cokolwiek a nie dodawanie
	BARDZO CIEKAWYM WYJSCIEM JEST ROBIC TO NA OBIEKATCH ! 
	Musisz kurwa ogarnac ta funkcje i byc mistrzem REDUCE
	
--	Callback NIE MUSI BYC ANONIMOWA !
	I UWAGA ! Jesli przekazujesz ja jako NIE ANONIMOWA
	TO BRON BOZE NIE PRZEKAZUJ JEJ Z funkcja() !!
	TYLKA SAMA NAZWA funkcja 
	No bo nie masz jej kurwa wywolac tylko przekazac !	
	

*****  ZADANIE 5 (zwracanie daty) *****

-- 	Date jest wbudowane w JS a wiec i w node jak i w przsegladarce dziala
	DATE na pamiec 
	
--	SKRÓCONY IF !!!
		day < 10 ? "0" + day : day
	
	? :		jest to operator TERNARNY
	
	Bardzo czesto korzysta sie z niego jak tworzy sie zmienna i chce sie od razu ja czyms zapisac