import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Day planner",
        image: 'assets/images/projects/dayplanner.png',
        images: [{ link: 'assets/images/screenshots/dayplanner1.png', caption: "Widok logowania" }, { link: 'assets/images/screenshots/dayplanner2.png', caption: "Widok rejestracji" }, { link: 'assets/images/screenshots/dayplanner3.png', caption: "Widok zmiany hasła" }, { link: 'assets/images/screenshots/dayplanner4.png', caption: "Widok profilu po zalogowaniu" }, { link: 'assets/images/screenshots/dayplanner5.png', caption: "Szczegolowa informacja o dodanym elemencie" }, { link: 'assets/images/screenshots/dayplanner6.png', caption: "Lista elementow - podział" }, { link: 'assets/images/screenshots/dayplanner7.png', caption: "Tryb nocny!" }],
        description: "Aplikacja frontendowa korzystajaca z API Firebase Google autoryzacji. Dane zapisywane są w localStorage i ładowane za pomocą Reduxa (Aplikacja początkowo miałabyć tylko treningiem Reacta dopiero z czasem rozszerzyłem je o funkcjonalność autoryzacji, a miejsca przechowywania danych już nie zmieniałem). W czasie budowania tego projektu chciałem skupić się na frontendowym aspekcie budowania aplikacji internetowych. Aplikacja zaimplementowana ma wszystkie widoki związane z autoryzacja (logowanie, przypomnij hasło, rejestracja, zmień dane). Aplikacja pozwala na zapisywanie dniowych 24-godzinnych celów – po ukływie tego czasu zmieniają one kolor w aplikacji oraz są przeniesione do sekcji wygaśnietych. Aplikacja umożliwia wyświetlenie pojedyńczego zadania oraz usunięcie go. ",
        technologies: ["JavaScript", "HTML", "CSS"],
        demo: 'https://jakubjereczek.github.io/react-redux-dayplanner/',
        github: 'https://github.com/jakubjereczek/react-redux-dayplanner'
    },
    {
        id: 2,
        name: "Save place on map",
        image: 'assets/images/projects/saveplaceonmap.png',
        images: [{ link: 'assets/images/screenshots/saveplaceonmap1.png', caption: "Widok dodanej lokalizacji" }, { link: 'assets/images/screenshots/saveplaceonmap2.png', caption: "Lista dodanych lokalizacji" }, { link: 'assets/images/screenshots/saveplaceonmap3.png', caption: "Logo aplikacji" }],
        description: "Aplikacja napisana w środowisku Android Studio, której głównym celem jest zapisywanie punktów (markerów) na mapie względem kategorii. Każda z kategorii reprezenuję inną ikonę na mapie. Panel głównym aplikacji daję nam dwie opcje – przejścia do mapy oraz przejścia do listy zapisanych lokalizacji. W przypadku wybrania mapy zostanie odpalona mapa w lokalizacji jakiej znajduję się nasz telefon oraz zostana załadowane wszystkie dotychas dodane markery. Po naciśnięciu na dany marker wyświetli się informacja o nazwie, opisie i kategorii oraz możliwośc usunięcia. Dane punktu przechowywane są na lokalnej pamieci telefonu. Dodanie nowego markera odbywa się za pomocą dłuższego przytrzymania ekranu. A lista dodanych lokalizacji – wraz z odnosnikiem do nich znajduję się menu głównym. Aplikacja jest dwujęzyczna – (język polski oraz angielski).",
        technologies: ["Java", "biblioteka Osmdroid"],
        demo: 'https://play.google.com/store/apps/details?id=pl.edu.ug.saveplaceonmap',
        github: 'https://github.com/jakubjereczek/android-app-saveplaceonmap'
    },
    {
        id: 3,
        name: "Chat app",
        image: 'assets/images/projects/chatapp.png',
        images: [{ link: 'assets/images/screenshots/chatapp1.png', caption: "Widok startowy" }, { link: 'assets/images/screenshots/chatapp2.png', caption: "Widok listy dostepnych pokojow" }, { link: 'assets/images/screenshots/chatapp3.png', caption: "Popup dodawania pokoju" }, { link: 'assets/images/screenshots/chatapp4.png', caption: "Popup przy wejsciu do pokoju z haslem" }, { link: 'assets/images/screenshots/chatapp5.png', caption: "Widok pokoju chatu" }, { link: 'assets/images/screenshots/chatapp6.png', caption: "Widok pokoju chatu" }, { link: 'assets/images/screenshots/chatapp7.png', caption: "Popup dodawania pokoju - mobilny" }],
        description: "Fullstackowa aplikacja grupowego chatu. Jest to moja największa aplikacja. Pełnoprawny system krótkoterminowych pokojów chatu. Użytkownik gdy dołączy do aplikacji istnieje do momentu wyjścia z karty przerglądraki. Aplikacja umożliwia tworzenie pokojów prywatnych (chronionych hasłem) oraz publicznych. Wiadomości oraz komunikaty o między innymi ilości dostępnych użytkowników są wysyłane w czasie rzeczywistym dzięki użyciu Socket.io. Gdy użytkownik utworzy pokój chatu jest on aktywny do momentu gdy jest w nim przynajmniej jeden uzytnikownik. Zaimplementowałem emotikony, powiadomienia o tym, ze użytkownik piszę oraz historie wpisów, które pojawiły przed dołączeniem użytkownika.",
        technologies: ["JavaScript", "ReactJS oraz liczne dependencies", "Socket.io", "Node.js", "Express.js"],
        demo: 'https://socketio-chat-app-client.herokuapp.com/',
        github: 'https://github.com/jakubjereczek/socket.io-chat-app'
    },
    {
        id: 4,
        name: "Snake",
        image: 'assets/images/projects/snake.png',
        images: [{ link: 'assets/images/screenshots/snake1.png', caption: "Menu aplikacji - wybór gry z uzyciem klawiatury lub dotyku (mobilny)" }, { link: 'assets/images/screenshots/snake2.png', caption: "Przedstawienie gry" }],
        description: "Jest to mój najstarszy projekt. Myśle, że warto go pokazać dlatego, że logika została napisana całkowicie w czystym JS. Snake napisany stosujac się do podejścia OPP. Zaimplementowałem wersję na telefony, które responsywnie dostosowuje szerokość oraz wysokość do ekranu telefonu. W moim Snaku zaimplementowałem funkcje algorytmu liczącego detekcje kolizji oraz zaniechania generowania punktów na zajętych pozycjach przez postać. Dodatkowo wprowadziłem „supermoce” – które działają na zachowania postaci, typu przyśpieszenie, spowolnienie czy dodatkowe punkty. W przypadku wjechania w ogon, zostaje on „ucięty” a punkty odjęte.",
        technologies: ["Czysty JavaScript", "HTML", "CSS"],
        demo: 'https://jakubjereczek.github.io/js-snake/',
        github: 'https://github.com/jakubjereczek/js-snake'
    },
    {
        id: 5,
        name: "Library Rest API",
        image: 'assets/images/projects/libraryapi.png',
        images: [{ link: 'assets/images/screenshots/api1.png', caption: "Schemat API" }],
        description: "REST API napisane w Node.js bilioteki. API implemenuje RESTowe metody dla zapytania /books/ oraz /users/. Autor relacyjnie powiązany jest z książkami. W przypadku dodania dla nowej ksiązki nieistniejacego autora tworzymy go w bazie danych. W tablicy Authors w polu books zostaje dodane _id książki a w Books w polu author zastępuje przypisanie _id autora. Jeśli usuniemy książke to automatycznie z tablicy books (Authors) zostaję usunięta ta pozycja. Również jeśli usuniemy autora to wszystkie jego książki zostaną usunięte. Niektóre z metod potrzebują uwierzytelnienia. Pełna dokumentacja znajduję się na Githubie w pliku dokumentacjaPL.docs.",
        technologies: ["JavaScript", "Node.js", "Express.js", "jsonwebtoken", "mongodb", "mongoose", "bcrypt"],
        demo: 'https://github.com/jakubjereczek/express-restapi-library/blob/main/DokumentacjaPL.docx',
        github: 'https://github.com/jakubjereczek/express-restapi-library'
    },
    {
        id: 6,
        name: "jwt tokens auth",
        image: 'assets/images/projects/reactjwt.png',
        images: [],
        description: "Project jest w czasie tworzenia. Dotychczasowa praca pozwala na rejestrację oraz logowanie. Celem projektu jest stworzenie własnego systemu rejestracji. Aplikcja pozwala na autoryzacje uzytkownika za pomocą Tokenów (wykorzystuje AccessToken oraz Refresh token). W przyszłości chciałbym zaimplementować wysyłanie maili potwierdzających utworzenie oraz odzyskiwanie konta. W planach jest rownież implementacja przenoszenia tokenów między serwerem a klientem w Cookie only-http (aktualnie robie to w sposob nie zapewniajacy pełnego bezpieczeństwa).",
        technologies: ["JavaScript", "Node.js", "Express.js (bcrypt, body-parser, cors, jsonwebtoken, mongoose)", "mongoDB", "ReactJS"],
        demo: null,
        github: 'https://github.com/jakubjereczek/react-jwt-auth'
    },
    {
        id: 7,
        name: "Accouncements",
        image: 'assets/images/projects/announcements.png',
        images: [{ link: 'assets/images/screenshots/announcements1.png', caption: "Lista ogloszeń wczytywanych z bazy filtrowane względem miasta" }, { link: 'assets/images/screenshots/announcements2.png', caption: "Prezentacja ogloszenia dodanego przez uzytknika - opcja edycji i usuwania" }, { link: 'assets/images/screenshots/announcements3.png', caption: "Szczegoly ogloszenia" }],
        description: "Projekt ogłoszeń dzielonych na kategorię i filtrowanych względem miast. Zaimpementowane sa w nim metody CRUD. Tylko zalogowany użytkownik może dodać ogłoszenie, a ten konkretny który utworzyć – usunąć je lub zmodyfikować.",
        technologies: ["ASP.NET Core", "Entity Framework", "Bootstrap"],
        demo: null,
        github: 'https://github.com/jakubjereczek/aspnetcore-announcements'
    },
    {
        id: 8,
        name: "Intern profile",
        image: 'assets/images/projects/cv.png',
        images: [{ link: 'assets/images/screenshots/angular1.png', caption: "Aktualna strona!" },],
        description: "Strona prezentująca moje projekty na potrzeby rekrutacji na staż programistyczny. Specjalnie dla tego celu nauczyłem się frameworka Angular i zrobiłem w nim pełnoprawna responsywną witrynę. Jesteśli jesteś już tutaj nie potrzebuję więcej jej opisywać.",
        technologies: ["Angular", "SSCS"],
        demo: 'https://jakubjereczek.github.io/intern-profile/',
        github: 'https://github.com/jakubjereczek/intern-profile'
    },
]