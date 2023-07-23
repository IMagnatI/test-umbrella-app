## Wprowadzenie

Prosimy Cię o wykonanie aplikacji js oraz ostylowanie elementów interfejsu użytkownika
przy użyciu css lub sass/less.
Po otrzymaniu Twojego kodu, który ma być odpowiedzią na poniższe zadanie będziemy chcieli ocenić Twój potencjał.

Rozwiązanie zadania chcielibyśmy otrzymać w terminie **5 dni**.

### Opis aplikacji

Potrzebujemy aplikacji, która umożliwi prezentację danych o stawkach transportowych w postaci tabelki na stronie wraz z opcją edycji bezpośredniej.
Dane do tabelki pobierane i aktualizowane poprzez api.

### Api 
Uruchomienie backendu:

```
cd backend
npm install
npm run start
```

Api oraz jego dokumentacja w postaci swaggera dostępne pod adresem http://localhost:3001

### Wymagania

- dane powinny być prezentowane w formie tabelarycznej 
- każda komóra przedstawia wartość stawki (rate) dla danej pary kraju źródłowego (sourceCountry) i docelowego (destincationCountry)
- stawki powinny być edytowalne bezpośrednio
- zapis zmiany powinien być automatyczny w każdej komórce tabeli
- stawka powinna być z zakresu (0, 100>
- po lewej stronie i nad tabelką powinna być wyświetlona legenda (Kraj źródłowy i Kraj docelowy)
- tabelka powinna zawierać nagłówki kolumn z kodami krajów docelowych (destintionCountry)
- tabelka powinna zawierać nagłówki wierszy z kodami krajów źródłowych (sourceCountry)
- aktywna komórka oraz odpowiadające jej nagłówki kolumn i wierszy powinny być oznaczone (np innym tłem)
- nagłówki wierszy i kolumn powinny zostawać w miejscu w przypadku przewijania tabelki w poziomie lub pionie
- tabelka powinno dać się zawężać (poprzez wybór kraju źródłowego i/lub docelowego - np z selectów)
- po zawężeniu tabelka pokazuje tylko jedną kolumnę (wybrany kraj docelowy), lub jeden wiersz (wybrany kraj źródłowy) lub jedną komórkę (wybrany kraj źródłowy i docelowy)
- jesli podczas zapisu zmiany przez api wystapi blad nalezy dana komórkę oznaczyć jako błędną

Aplikacja powinna być napisana w taki sposób aby umożliwiać jej przegląd zarówno w przeglądarce jak i na urządzeniach **mobilnych**.
Aplikacja powinna zostać pokryta **testami**.

Do napisania aplikacji użyj VueJS.

### Wygląd

Przykładowy wygląd tabelki został przedstawiony w pliku _sample.png_, ale pozostawiamy Ci dowolność co do ostatecznego wyglądu.
Chcemy jedynie aby tabelka spłeniała wymagania przedawione powyżej.

Pozycje niedostępne powinny zostać wyświetlone w sposób wyróżniający się od reszty, np. czerwona otoczka.

### Zasoby

w repozytorium zadania znajdziesz:
- to readme :)
- katalog _backend_, który po uruchomieniu będzie Twoim źródłem danych
- przykładowy plik z wyglądem tabelki _sample.png_

### Kryteria oceny

Ocenimy Twój kod pod kątem:

- znajomości języka oraz funkcji natywnych które używasz
- ustrukturyzowania i organizacji kodu w plikach
- dbania o czytelność kodu - kod powinien być napisany zgodnie ze standardem https://standardjs.com/
- jakości napisanych testów
- zgodności rozwiązania z treścią zadania

### Wskazówki

- jeżeli korzystasz z sass'a, do budowania wynikowego css'a idealnie byłoby użyć webpacka,
  jeżeli użyjesz czegoś innego opisz nam w README jak zbudować aplikację
- niezbędne będzie użycie AJAX'a do pobrania danych z api
- styl kodowania css - preferujemy wcięcia na dwie spacje
- styl kodowania js - postaraj trzymać się zasad opisanych na ``https://standardjs.com/``

### Schemat pracy z repozytorium

Prosimy Cię o utworzenie kopii (NIE FORK'a) aktualnego repozytorium na bitbuckecie oraz wysłanie adresu repozytorium na adres: ``kontakt@umbrella.limited``.

Pracuj na gałęzi odchodzącej od mastera. Zespół chciałby wykonać code review projektu, który wykonujesz.

### Kontakt i pytania
Jeżeli opis zadania jest dla Ciebie niejasny, lub będziasz mieć jakiekolwiek pytania do zadania, śmiało pisz na adres ``kontakt@umbrella.limited``, postaramy
się odpowiedzieć na pytania najszybciej jak się tylko da
Powodzenia
