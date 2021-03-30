import { Project } from './project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Day planner",
        image: '/assets/images/projects/dayplanner.png',
        images: [{ link: '/assets/images/projects/dayplanner.png', caption: "Img 1" }, { link: '/assets/images/projects/dayplanner.png', caption: "Img 1" }],
        description: "Aplikacja frontendowa korzystajaca z API Firebase Google autoryzacji. Dane zapisywane są w localStorage i ładowane za pomocą Reduxa. W czasie budowania tego projektu chciałem skupić się na frontendowym aspekcie budowania aplikacji internetowych. Aplikacja zaimplementowana ma wszystkie widoki związane z autoryzacja (logowanie, przypomnij hasło, rejestracja, zmień dane). Aplikacja pozwala na zapisywanie dniowych 24-godzinnych celów – po ukływie tego czasu zmieniają one kolor w aplikacji oraz są przeniesione do sekcji wygaśnietych. Aplikacja umożliwia wyświetlenie pojedyńczego zadania oraz usunięcie go. ",
        technologies: ["JavaScript", "HTML", "CSS"]
    },
    {
        id: 2,
        name: "Save place on map",
        image: '/assets/images/projects/saveplaceonmap.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 3,
        name: "Chat app",
        image: '/assets/images/projects/chatapp.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 4,
        name: "Snake",
        image: '/assets/images/projects/snake.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 5,
        name: "Library Rest API",
        image: '/assets/images/projects/libraryapi.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 6,
        name: "jwt tokens auth",
        image: '/assets/images/projects/reactjwt.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 7,
        name: "Accouncements",
        image: '/assets/images/projects/announcements.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
    {
        id: 8,
        name: "Intern profile",
        image: '/assets/images/projects/cv.png',
        images: ['/assets/images/projects/dayplanner.png', '/assets/images/projects/dayplanner.png'],
        description: "",
        technologies: [""]
    },
]