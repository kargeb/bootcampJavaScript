*****  ZADANIE 1 (Pokazwyanie ukrytego elementu)*****

-- 	NIE PRZEJMUJ SIE JESLI NIE OGRANIASZ PRZEJEBANYCH RZECZY
	Zaczynamy juz mieszac czysty JS z przegladarka
	
--	--	display:none	
	manipulowanie klasa to jest zazwyczaj najlepsze zastosowanie
	
	UWAGA !!! wg niego:		----------------------------------------
	po ID wylacznie wyszuykujemy elementów ALE NIE STYLUJEMY ICH W CSS !
		on w ogole nie uzywa w css IDków
	KLASY sluza do stylowania i sa w tym dokosnale
	-------------------------------------------------------------------	
	
-- dlatego wlasnie do kodu pobral przycisk i diva poprzez ID (a nie jakies inputy itp)

--	CLASSLIST contains, remowe, add--	

--	Co do trzeciego parametru w zdarzeniach (FLASE z regoly)	
	CAPTURING, BUBBLING w tym zadaniu po chuj a i  zasadzie mowi
	ZE W NORMALNEJ PRACY PRZEZ 99% CZASU JEST FALSE !!
	ale naperwno jest to cos co trzeba wiedziec bo te zjeby sie beda
	wypytywac na tych romozwach na bank !
	
--- UWAGA atrybuty HTML  data !!!
	odrazu z nich korzysta zeby zmieniac tekst w przycisku:
	
	NO I TERAZ NIEZWYKLE W CHUJ WAZNE !!!
	jesli wlasnie wlasne atrybuty w elemenecie masz dodane jako data-costam np
	on ma:  data-show  i  data-hide
	<button id="button" class="button" data-show="Pokaż" data-hide="Ukryj">Pokaż</button>
	
	TO W KODZIE JS MOZNA ODWOLAC SIE BEZPOSREDNIO DO NIEGO POPRZEZ "DATASET" !!!:
		button.dataset.hide
		
		-- CZYLI POD elem.dataset MAMY WSZYSTKIE ELEMENY data-costam DOSTEPNE POD NAZWA costam !
			data-hide="Ukryj"  ->	elem.dataset.hide
	Takie cuda robimy tylko dzieki temu ze data-... jest ustandaryzowany przez HTML5,
		bo mozna np dodac atrybut  show="pokaz" ale do niego trzebaby sie juz odwolac
		poprzez  button.getAttribute("show") no i to jest niezgone z dobra praktyka
		
		oczywiscie mozna tez nspiasac 	button.getAttribute("data-show") no ale po co.
		
	no i on robi to w ten sposob ze tekstu do buttona nie wpisuje z palca tylko pobiera z data-
	
	        elem.classList.add("hidden");
            button.textContent = button.dataset.show;
			
------- ponownie mowi JESLI TYLKO MASZ MOZLIWOSC ZROBIENIA CZEGOS W KLASIE TO ZAWSZE JEST TO
		NAJLEPSZA OPCJA !!
		czasami jednak nie da sie tego zrobic np w przypadku tooltipa no bo nie wiesz gdzie
			dokladnie taki tooltip w momencie wyolanai bedzie sie znajdowal
		 CZYLI Z REGOŁY NIE DA SIE TEGO ZROBIC JESLI STYLE CHCEMY WYLICZYC W TRAKCIE 
		 DZIAŁANIA PROGRAMU W JAKIS DYNAMICZNY SPOSOB
			
		CZYLI NIE PRZYPISUJE SYLI TYLKO KLASY kiedy tylko sie da !
			NIE KORZYSTAJ Z ele.STYLE !!

--	No to zeby tylko wiedziec ze da sie inaczej no i zebys wiedzial JAK NIE ROBIC:
		
		pokazyweanie:	elem.style.display = "block",
		pokazyweanie:	elem.style.display = "none",

--	GETCOMPUTED.STYLE  (window.getComputedStyle)	
		jak wjebiesz tam dowolny element HTML to dostajesz obiekt
		CSSStyleDeclaration ktory zawiera WSZYSTKIE JAKIE STYLE jakie tylko so 
		nadane przez przeglądarke
		
		Jest to ogromny obiekt wiec mozna sie odwolac do niego np tak:
		
		styles = window.getComputedStyle(elem);
		styles.display

-- KORZYTSANIE Z TEGO W TOOLSACH !!!
		-- WAZNE ------------------ ------------------------------------
		
	Pamiętaj że w toolsach kazdy OSTATNIO kliknięty obiekt JEST POD ZMIENNĄ	
		$0  !!!!!!!!!!!
		
	No i on bardzo czesto sobie spradwza te WBUDOWANE WARTOSCI wlasnie tak,
		ze klika konkretny element i w koncoli wpisuje:
		
	window.getComputedStyle($0).display  ->  "none"	--------------------
	
	CZYLI W KONCU ALTERNATYWNE ROZWIAZANIE TO:
		
		if( window.getComputedStyle(elem).display === "none") {
             elem.style.display = "block";
		} else {
             elem.style.display = "none";
			 
		ALE WIADOMO ZEBY TEGO ROZIWAZANIA UNIKAC !		

--	??????? Pyatnie kogos czy faktycznie korztystac z tego data- czy poprostu pobierac
		tekst z elementu 
		
		ODP ze data- jest na tyle spoko ZE PRZECHOWUJE PO PROSTU OBYWA TEKSTY OD RAZU
		W ELEMENCIE
		czyli nie musisz zasmiecac kodu stringami, tylko po prostu podmieniasz wartosci 
		w data-
		No bo inaczej ten tekst MUSIALBYS PRZEHCOWAC W JAKIEJS ZMIENNEJ ALBO COS
		a tak to masz go juz w kodzie HTMl
		
*****  ZADANIE 2 (Walidator formularza)*****	

-- OGÓLNIE TO TA CZESC KONSULTACJI TO JEST JEDNA WIELKA LEKCJA 
		PROGRAMOWANIA OBIEKTOWEGO
		
-- 	Mowi ze w KickOffie bylo w chuj na ten temat ...
	
	ogolnie to tam tez tlumaczyl czemu zrobil to na prototypie
	chodzi o to ze na stroni moglibysmy miec milion formularzy
	a walidowac sobie je dzieki tylko jednej klasie
	
	W ogole to nie bedzie sie spuszcal nad tym bo taka walidacje
	mozna zrobic na MILIOM sposobow

---- NOVALIDATE  - rezygnacja z przegladarkowej walidacji 
		ROBISZ TO W znaczniku FORM 
		
		<form action="#" id="form" class="contact-form" novalidate>
		
	Pobranie calego formularza w jednym id="form"
	
--	-- pamietaj ze wszystko pobraie z formularza do js TO JEST ZAWSZE STRING
	(przynjamniej z pol tekstowych)
	
-- Jesli tylko ktores z pol nie spelnia wymagan, DODAJE DO NIEGO KLASE INVALID !
	i wlasnie tak zmienia jego formatowanie na symbolozujace chujowe wypelnienie
		A JESLI SPOKO to ta klase wyjebuje	

--	WALIDACJA POLA WYMAGAJACEGO SAME LICZBY: (całkowite)

		OK CZYLI JA W SWOIM ZJEBALEM bo pobrany tekst daje do Number(tekst)
	A ON ROBI TO ZA POMOCA 		parseInt(tekst)
	No i to jest lepsze bo nikt nie poda numeru zmiennoprzeicnkowego 
	ALE ! parseInt z czegos takiego "23tekst" zwraca "23" wiec pozwala
	to wpisac takie gowno w ten formulraz
	wiec on sprawdaza jeszcze czy   
		var s = parseInt(tekst);
		
		s == tekst  !!! podwojny == nie potrojny !
		
		OGOLNIE MOWI ZE NAJLEPSZE BYLOBY ZROBIENIE WYARZENAMI REGULARNYMNI
		
--	--- WAZNE --- NaN ----------------------------------------------------
		PAMIETAJ O TYM ZE NaN === NaN  ->  FLASE !!!!
		DLATEGO NIGDY NIE PORÓWYJ NaN W TEN SPOSÓB !!!
		Jesli chcesz porónwac to robisz to tak:
			isNaN(value) !!!!!!!!!!!!	isNaN(NaN) -> true !
	----------------------------------------------------------------		
	
----- WAZNE !! OK 45 minuty MASZ CALE WYJASNIENEI PO CO ROBIL TO JAKO PROTOTYP !!!
		I CALE ZAJEBISTE OBIEKTOWE PODEJSCIE !!
		
	???? Rob oczywisce i proste nazwy metod to nie trzeba bedzoe dodawac komenatrzy
		komantarze dodawaj do niestandardowych metod i rozwiazan

		
*****  ZADANIE 3 (odlczanie od 1 do 10 Z PRZEKAZANIEM FUNKCJI)*****

-- zmienjsznie odlicznaia zrobil w osobnej fukncji

    function tick() {
        counter.textContent = value--;
    }

	zauważ że w textContent korzysta z POSTinkremenacji czyli najpierw wysiwetla 
	value a pozniej od razu ja pomniejsza 
	
--	Pamietaj czemu nie powinno sie uzywac set interval tylko set timeout
	(no bo przy malych interwalach np 10ms moze nie zdarzyc wykonac sie caly kod)
	a jesli pod koniec wywolania takiego ciezkiego kodu dasz settimeout jeszcze raz
	to on sobie bedzie spokojnie czekal na wykonanie 
	
	Za pomoca setInterval mozna to zadanie zrobic bardzo prosto no aale chuj
	robimy za pomoca set timeout

-- PAMIĘTAJ żeby w setTimeout(tick,1000) FUNKCJE PRZEKAZYWAC BEZ NAWIASÓW !!!

-- Zrobil ANONIMOWY CALLBACK bo zazwyczaj sie tak robie ALE NIE MA ABOSLUTNIE 
		ZADNEJ PRZESZKODY ZEBY SOBIE TA FUNKCJE NAZWAC I PRZEKAZAC SAMA NAZWE !	
		
	        count(function() {
            button.disabled = false;
            counter.textContent = "_ _";
            value = 10;

            console.log("Odliczanie zakończone.");
        });

--	FUNKCJE przekazuje sie IDENTYCZNIE JAK ZMIENNE z ta roznica ze jak ja przekazemy
	do ndanej funkcji to po prostyu mozemy sobie ja wywolac dodajc do jej nazwy () !
	
		function count(cb) -> cb to funkcja ! niczym nie rozni sie przekazanie od zmiennej
		
--	PRZYPOMNIENIE O TRICKU przerywania funkcji kiedy sie tylko chce
		czyli jesli w dowolnuym miejsci funkcji dasz return, to ona zwroci
		undefined A CALA ZAWARTOSC POD RETURN SIE NEI WYKONA NIC 

		Jest to zajebiste do przetestowania poprawnego dzialania jakiejs konketnej czesci funkcji
		
----------------------------------------------------------------------------		
--	------ NAJBARDZIEJ PRZEJEBANY PROBLEM W HISTROII CALEGO BOOTCAMPU ---- !
----------------------------------------------------------------------------

	function count(cb) {

        if(value >= 0) {
            tick();
            setTimeout( count , 1000);	-->  NIE DZIALA !!!!
        } else {
            cb();
        }
    }
	
	Ni chuja nie dziala no bo kurwa wywoluje sie count BEZ PRZEKAZANIA DO NIEJ "cb" !!!!
	
	UWAGA ! Nie mozna tego zrobic w ten sposób !!
	
		setTimeout( count(cb) , 1000);  
		
	NO BO TY JA PO PROSTU OD RAZU WYWOLASZ !!! A NIE PRZEKARZESZ !!!
	dokldanie to samo co dzieje sie z addEventListener gdy przekazesz tam funkcje
	prosto jako 2 argument a nie w ciele innej funkcji !!!		
	
	
--	---------- PIERWSZY SPOSÓB NA ROZWIĄZANIE PROBELMU Z SETTIMOUT -------
    
	function count(cb) {

        if(value >= 0) {
            tick();
            setTimeout(function(){		-->  wlasnie taki !
				count(cb);				--> 
			}, 1000);
        } else {
            cb();
        }
    }
	
	Czyli za kazdym razem przekazywanie jej nowej funkcji która
	odpala count Z PRZEKAZANYM ARGUMENTEM
	To dziala bo JS nie wykonuje OD RAZU funkcji cb

-- ------- DRUGI SPOSÓB NA ROZWIĄZANIE który robi praktycznie to samo co u góry----

	    function count(cb) {

        if(value >= 0) {
            tick();
            setTimeout(count.bind(this, cb), 1000);		---> TO
        } else {
            cb();
        }
    }
	
	bind WYWOLUJE SIE NA FUNKCJACH
	bind ZWRACA NOWĄ FUNKCJĘ!
	
	UWAGAA !!! -----------------------------
		W NASZYM PRZYPADKU NIE KORZYSTAMY Z THIS !!!
		WIĘC NIE MA KURWA NAJMNIEJSZEGO ZNACZENIA CO PRZEKAŻEMY JAK PIERWSZY ARGUMENT W BIND !!!
			rownie dobrze mozna zrobic:
			
			setTimeout(count.bind("chujDoDupy", cb), 1000);
			
			i też będzie super działać !
			
		U nas chcemy wyłącznie osiągnąć efekt zwrócenia nowej funkcji !
		
	CZYLI COUNT.BIND oznacza "zwroc nowa funkcje count z nowymi parametrami (i thisem)
		
		
	-- BIND NA PAMIEC !
	-- I CALL TEZ !!
	-- KIEDY ICH UŻYWAĆ kurwa
	
-- PAMIĘTAJ !! --------------------------------------
	W ELEMENTACH WYWOŁUJĄCYCH ZDARZENIE 
		THIS POKAZUJE WŁAŚNIE NA TEN ELEMENT !!!!!!!!!!!!
		
		czyli w:
		
		button.addEventListener("click", function() {
		
			button.disabled = true;
				TO JEST DOKŁADNIE TO SAMO CO: !!!!!!!!!!!!!
			this.disabled = true:	
			
--------------------------------------------------------	

-- JEGO PRZYCISK PO KLIKNIECIU ZROBIL SIE SZARY

	button.disabled = true;

	dlatego ze w css dodal sobie specjlana klase:
		
		button:disabled {
			background: #BDBFBF;
		}
		
	pozniej robi tylko:
		button.disabled = false;
	i z powrotem jest klikalny i z kolorkiem

-- UWAGA ! Bardzo niepozorna rzecz ale w CHUJ ISTOTNA ---
   button.addEventListener("click", function() {

        button.disabled = true;

        count(function() {
            button.disabled = false;
            counter.textContent = "_ _";
            value = 10;

            console.log("Odliczanie zakończone.");
        });
    }, false);
	
	TUTAJ MAMY TYPOWE DOMKNIĘCIE !!!
	
	czyli mimoze ze wywola sie fnukcja ze zdarzeni CLICK
	to ma ona dostep do miejsca gdzie byla zdefiniiowana
	I DLATEGO mozna sobie zmienic DOWOLNA WLASCIOWSC Button
	przktycznie w kazdym momnecie!!!

--	PAMIĘTAJ !!!  -------------------
	
		REFAKTORYZACJA !
		kazdy (większosc) zajebistych programistow pisze kod i moduly
		w ten sposob zeby najpier PO PROSTU DZIALALY
		a pozniej poprawiaja ten kod jeden raz, drugi albo i wiecej !
		Jest to po porstu zjaebiste podejscie do pisania programow
		
------------------------------------------------------------------

-- 1:17  DO KAZDEJ PRZEKAZYWANEJ FUNKCJI mozna oczywiscie tez przekazac parametr !!

--- PAMIĘTAJ !!!! ---------
	O ZASADZIE DRY czyli Dont Repeat Yourself 
	NIE POWTARZAJ W SKRYPCIE SWOJEG KODU !!
	Jesli tylko jakas czesc ci sie wyraznie powtarza TO WPIERDOL JA DO FUNKCJI
	albo co inne wymysl ewentulanie	
		
		
*****  ZADANIE 4 (Dziedziczenie z klasy EventEmitter)*****		

	WYTLUMACZENIE DZIEDZICZENIE
	ODWOLANIE DO LEKCJI O DZIEDICZENIU 
	
	W ES6 JEST TYLKO SYNTACTIC SUGAR
	WIEDZ WIEDZA O TYM CO SIE TUTAJ DZIEJE WCALE NIE JEST NIEPOTRZEBNA!
	JEST KURWA ZAJEBISTA !!!		
	
	OGÓLNIE to zajebisty przykłąd BO Z EVENT EMITTER korzysta sie bardzo
	czesto w programowaniu i trzeba zrozumiec jej dzialania w 100% !!!
	
	cos podobnego jest chyba w kursie Reacta
	

*****  ZADANIE 4 (Funkcja Debounce)*****			

-- jak w chuj szybko obejsc ze strona jest za mala zeby sie mogla scrolowac:
		document.body.style.height = "2000"px   :)
		
--	TRZEBA UWAZAC zeby nie napierdolic w kodzie zbyt duzo zdarzen ktore obciazaja
		przegladarke np:
			document.querySelector("div").offsetWitdh
		jesli cos takiego wywoalsz za kazdym zdarzeniem scrollowania
		czyli z 100 razy na sekunde TO JA PIERDOLE !!!

		NO I TAK NARODZILA SIE FUNCKJA DEBOUNCE
			(wykonaj mi cos, ale nie czesciej niz np 200ms)
		
--	jak robimy domkniecie TO ARGUMENTY JUZ W NAWISACH NA GORZE FNUKCJI SA DOMKNIETE
		czyli nie musiz robic czegos takiego:
			    
				function debounce(fn, time) {
					var time = time 
					
		Bo time juz i tak jest traktowany jako zmienna w tym zakresie konkretnym !

		
--	Ogólnie rozwiązanie jest banalne i składa się z:
		function debounce(fn, time) {

				var timeout = null;		// DEKLARUJEMY PRZED timeout dzieki temu
										// mozemy ja u dolu od razu wyczyscic
										// JEST ONA PONAD TO DOMKNIETA czyli dostepna zawsze dla
										//	 funkcji nizej
				return function() { 

					clearTimeout(timeout);	// NAJWAZNIEJSZE JEST TO ZE NULL POD TIMEOUT NIE GENERUJE
											// BLEDU !!!
											// dlatego to przechodzi bez problemu za pierwszym wywolaniem

					timeout = setTimeout(function() {	// No i tu juz prosciutko
						fn();							// jesli czas wywolania kolejnej funkcji 
					}, time);					// settimeou bedzie szybszy niz time
				};								// to clearTimeout ZAJEBIE setTimeout wyolwany poprzednio
			}									// i tak milion razy az w koncu time zdazy sie wykonac,
												// wtedy odpala sie cialo funkcji settimautu		
												
--	PO RAZ KOLEJNY PRZYPOMINA !!!
	W ZDARZENIACH POD THIS MAMY ELEMENT YWYWOLUJACY ZDARZENIE !!!
		czyli u nas bedzie to window

-- UWAGA ! ------
		Gdy jest Strict Mode THIS NIE POKAZUJE NA OBIKET GLOBALNY !!!!
		dlatego go tutaj zastosowal zeby pokazac JAK PRZEKAZAC THIS do debunce
	STRICT MODE NA PAMIEC	
	
----------------------------------------------------------------------------		
--	DRUGI NAJBARDZIEJ PRZEJEBANY PROBLEM W HISTROII CALEGO BOOTCAMPU ---- !
----------------------------------------------------------------------------

--	CALL !! NA PAMIEC KURWA !!!
		CALL jako pierwszy argument PRZEKAZUJE CO MA THISEM W FUNKCJI NA KTOREJ SIE WYWOLUJE !
			a kolejne argumnety no to juz argumnety tej funkcji koljene (zwykle)
		
		APPLY robi TO SAMO CO CALL !!! tylko ze po pierwszym argumnecie WSZYSTKIE INNE WJEBUJE
			W TABLICE !!

	    function debounce(fn, time) {

        var timeout = null;

        return function() { // handleScroll

            var context = this,				// MUSIMY PRZYPISAC THIS NO BO ..
                args = arguments;			// DOKLADNIE TEN SAM PROBLEM Z ARGUMENS !!!
											// POD TYM SA ARGUMENTY WLASNIE NASZE
            clearTimeout(timeout);

            timeout = setTimeout(function() {
                fn.apply(context, args);		// TUTAJ THIS JEST JUZ ZUPELNIE CZYMS INNYM
            }, time);							// BO JEST TO INNA FUNKCJA !!!
        };										// A ZE MAMY POD ZMIENNA TO GO PRZEKAZUJEMY !!
    }
					// TUTAJ SA ARGUMENTY FNUKCJI setTImeouta WIEC ZNOWU MUSIMY PRZEKAZAC TO
						// CO RPZYPISALISMY WCZENSIEJ "args"

-- ZMIENNA ARGUMENTS !!! NA PAMIEC

--------- CZYLI NAJWAŻNIEJSZE PODSUMOWANIE !!!!!!!!!!!!!! ------------------------------
----------------------------------------------------------------------------------------
		
			    "use strict";

					function debounce(fn, time) {		
														
						var timeout = null;				
														
						return function() { // handleScroll	|
															|
							var context = this,				|
								args = arguments;			|	TUTAJ INNE THIS !!!
															|	TUTAJ INNA ARGUMENTS !!
							clearTimeout(timeout);			|
															|
							timeout = setTimeout(function() {	***
								fn.apply(context, args);		***	TUTAJ INNE THIS
							}, time);							*** TUTAJ INNA ARGUMENTS !!!
															|
															| 	TUTAJ TO PIERWSZE THIS !!!
															|	TUTAJ TA PIERWSZA ARGUMENTS !
						};
    }
	
			Dlatego musimy przypisac THIS i ARGUMENTS zeby je przekazac
				dolnej funkcji, do dalszego przekazania  (ja pierdole )		
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------	

-- przy operacjach na RESIZE tez jest wlasnie zajebista debonuce

-- OBCZAJ WSZYSTKIE ZDARZENIA WINDOW !!!

-- UWAGA !!! 
	JEŻELI W FNUKCJACH THIS NIE ZOSTAL PRZEKIEROWANY POPRZEZ 
		APPLY CALL lub BIND
		TO BEDZIE ZAWSZE POKAZYWAL NA OBIEKT GLOBALNY !!!
		(chodzi o zwykle funkcje)
		
		No chyba ze to Strict Mode TO wtedy to juz w ogole UNDEFINED !

--	-- UWAGA funkcja DEBOUNCE TO JEST WIODACA FUNKCJA W PROGRAMOWANIU !!!	--------------
	CZYLI W CHUJ UZYWANA
	No i ona ma tez pewnego rodzaju alternatywe co sie nazywa 
		THROTTLE !!!
	No i one roznia sie tym ZE
		THROTTLE ODPALA SIE MINIMUM RAZ W CIAGU ZADANEGO CZASU 
			Czyli "ODPAL SIE NIE CZESCIEJ NIZ 200ms ALE CO 200 MUSZ CHOC RAZ !!!
	a debonuce NIE MUSI SIE ODPALAC ANI RAZU az do momentu spelnienia sie warunku !!!	
--------------------------------------------------------------------------------------------	

-- JA PIERDOLEEEEE --------------------------------
	
	1:59 !!!!!!!!!!!!!
	
	PATRZ KURWA JAK SIE WYSZUKUJE FUNKCJE W NECIE DO JS !!!!!!!!!!!
	PETARDA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
-- NULL nie jest potrzebny	w  
		var timeout = null;

		Ale on juz ma taka praktyke ze jak tworzy pusta zmienna
		to zawsze daje tam null zeby wiedziec ze to nie przypadek ze jest pusta

--	w funkcji throttle jesyt taki parametr IMIDIATE ktory odpala ja od razu na poczatku,
	a dopiero pozniej co zadany czas

--	Debounce czy Throttle ??????

	Zalezy !!
	Jesli cos sie wczytuje na stronie (no brazki) no to lepiej TROTYL no bo jak uzytkownik bedzie 
	napierdalala bez przwerwy jakies skrolowanie to niehc sie mimo wszystko czytuja co jakis
	czas te nowe rzeczy
	
	Za to Debounce to on sam wlasnie bardzo czesto uzywal w przypadku przypisywania funkcji do 
	skalowania okna !

--	ROWNIEZ ZAJEBISTY PRZYKLAD
	to zdarzenia w INPUTACH
	np mozesz sobie zrobic zdarzenie KeyUp zeby od razu wyszukiwalo wyszukiwanie rozpoczetych slow
	zanim jeszcze uzytwkjonuik wpisza cala fraze szukana
	no to BEZ SENSU URUCHAMIAC SZUKAJKE za kazdym nowym znakiem !
	
	NAWET JEST ONO W TYM KODZIE !!
			var input = document.querySelector("#input");
			var handleKeyup = debounce(function(e) {
				console.log(e.target.value);
			}, 500);

			input.addEventListener("keyup", handleKeyup, false);
			
		Świetny PRZYKŁAD
		ŚWIETNE ROZWIĄZANIE !!!
		

	