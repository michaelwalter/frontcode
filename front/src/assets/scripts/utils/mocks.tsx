export const Mocks = {
    "information": {
        "title": "Frontcode - we make a new reality from scratch"
    },
    "pages": {
        "list": [
            {
                "id": "0",
                "name": "Strona główna",
                "url": "/home"
            },
            {
                "id": "1",
                "name": "Produkty",
                "url": "/stuff"
            },
            {
                "id": "2",
                "name": "Usługi",
                "url": "/services"
            },
            {
                "id": "3",
                "name": "Kontakt",
                "url": "/contact"
            }
        ],
        "active": "0"
    },
    "languages": {
        "languages": [
            {
                "id": "0",
                "type": "pl",
                "name": "polish",
                "enabled": true
            },
            {
                "id": "1",
                "type": "en",
                "name": "english",
                "enabled": false
            }
        ],
        "active": "0"
    },
    "page-0": {
        "id": "page-0",
        "sections": [
            {
                "id": "section-1",
                "name": "section",
                "modifiers": "app-section--cover",
                "rows": [
                    {
                        "id": "row-1",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-1",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-1",
                                        "componentType": "Slogan",
                                        "title": "Tworzymy nową <br/> <strong>rzeczywistość</strong> <br/> od podstaw",
                                        "description": "Jesteśmy zespołem programistów Front End z wieloletnim doświadczeniem. Naszą misją jest wspieranie klientów w obszarze IT dostarczając przy tym oprogramowanie bardzo wysokiej jakości. Wiedzę zdobywaną przez nas latami wykorzystujemy skutecznie również w realizacji własnych pomysłów.",
                                        "specialWords": [
                                            "rzeczywistość",
                                            "jakość"
                                        ],
                                        "url": "/stuff",
                                        "titleTemplate": "Tworzymy nową <br/> <strong>${specialWord}</strong> <br/> od podstaw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "page-1": {
        "id": "page-1",
        "sections": [
            {
                "id": "section-1",
                "name": "section",
                "modifiers": "",
                "rows": [
                    {
                        "id": "row-1",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-1",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-2",
                                        "componentType": "CustomHeading",
                                        "title": "Autorskie produkty przez nas rozwijane",
                                        "subtitle": "Lista pomysłów oraz projektów aktualnie przez nas prowadzonych."
                                    },
                                    {
                                        "id": "component-3",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-4",
                                        "componentType": "Product",
                                        "counter": "01",
                                        "title": "dropp.",
                                        "subtitle": "Aplikacja społecznościowa bazująca na technologi Augmented Reality",
                                        "logoUrl": "assets/images/products/dropp.svg",
                                        "description": "<p>Aplikacja służy do dzielenia się ze społecznością swoimi wspomnieniami związanymi z wybranymi miejscami na świecie.</p>\n" +
                                            "<p>&nbsp;</p>\n" +
                                            "<p>Wykorzystując technologię AR możesz przeglądać zdjęcia i filmy osób, które znalazły się w miejscu obecnie przez Ciebie odwiedzanym. Ponadto sam możesz w tym miejscu \"upuścić\" własne zdjęcie i określić kto może je zobaczyć.</p>",
                                        "modifiers": ""
                                    },
                                    {
                                        "id": "component-5",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-6",
                                        "componentType": "Product",
                                        "counter": "02",
                                        "title": "startify.",
                                        "subtitle": "Środowisko do prowadzenia oraz rozwoju statycznych projektów Front End",
                                        "logoUrl": "assets/images/products/startify.svg",
                                        "description": "<p>Startify umożliwa błyskawiczne rozpoczęcie projektu z wykorzystaniem takich technologii jak Typescript, Sass, Nunjucks etc. przy wsparciu Gulpa oraz Webpacka.</p>\n" +
                                            "<p>&nbsp;</p>\n" +
                                            "<p>W projektach rozwijanych za pomocą Startify stawiamy na komponentowy podział funkcjonalności.</p>",
                                        "modifiers": "product--inverse"
                                    },
                                    {
                                        "id": "component-7",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-8",
                                        "componentType": "Product",
                                        "counter": "03",
                                        "title": "kret",
                                        "subtitle": "Aplikacja wspomagająca rehabilitację dzieci z zespołem Retta",
                                        "logoUrl": "assets/images/products/kret.svg",
                                        "description": "<p>Kret to zbiór zadań oraz gier efektywnie wspomagających rehabilitację dzieci cierpiących na zespół Retta.</p>\n" +
                                            "<p>&nbsp;</p>\n" +
                                            "<p>Aplikacja ta jest zupełnie darmowa i dostępna dla każdej osoby chcącej wesprzeć rozwój swojego dziecka ze wspomnianym zespołem.</p>",
                                        "modifiers": ""
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "page-2": {
        "id": "page-2",
        "sections": [
            {
                "id": "section-1",
                "name": "section",
                "modifiers": "",
                "rows": [
                    {
                        "id": "row-1",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-1",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-9",
                                        "componentType": "CustomHeading",
                                        "title": "W czym się specjalizujemy?",
                                        "subtitle": "Przeczytaj i dowiedz się w jakim zakresie jesteśmy w stanie Tobie skutecznie pomóc."
                                    },
                                    {
                                        "id": "component-10",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-11",
                                        "componentType": "AppText",
                                        "content": "<h3><strong>W kilku zdaniach</strong></h3>\n" +
                                            "<p>Nasz zespół specjalizuje się w wytwarzaniu oprogramowania warstwy Front End aplikacji oraz serwisów webowych.</p>\n" +
                                            "<p>Dostarczamy ponadto rozwiązania mobilne wykorzystując przy tym najnowsze i najbardziej wydajne aktualnie rozwiązania.</p>\n" +
                                            "<p>Ukierunkowani w myśl, że nie ma rzeczy niemożliwych do zrealizowania stale podnosimy poprzeczkę rozwijając przy tym swoje umiejętności i nabierając cennego doświadczenia.</p>\n" +
                                            "<p>Świadomie i starannie dobieramy technologie, architekturę oraz rozwiązania najbardziej odpowiadające potrzebom naszych klientów.</p>",
                                        "modifiers": ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                "id": "section-2",
                "name": "section",
                "modifiers": "app-section--wide",
                "rows": [
                    {
                        "id": "row-2",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-2",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-12",
                                        "componentType": "AppPicture",
                                        "title": "Office",
                                        "url": "assets/images/team-picture.jpg",
                                        "modifiers": "app-picture--wide"
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }, {
                "id": "section-3",
                "name": "section",
                "modifiers": "",
                "rows": [
                    {
                        "id": "row-3",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-3",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-13",
                                        "componentType": "AppText",
                                        "content": "<h3><strong>O nas</strong></h3>\n" +
                                            "<p>Jesteśmy grupą osób dobraną nie z przypadku a uzupełniającą się umiejętnościami w obszarze Front End Developmentu.</p>\n" +
                                            "<p>Każdy z nas posiada conajmniej kilkuletnie, komercyjne doświadczenie oferując tym samym usługi wysokiej jakości.</p>\n" +
                                            "<p>Na codzień współpracujemy wspólnie w jednym biurze choć spora część z nas docenia sobie pracę zdalną będąc przy tym bardzo elastycznym. To sprawia, że jesteśmy w stanie spotkać się z klientami na terenie niemalże całego kraju.</p>",
                                        "modifiers": ""
                                    },
                                    {
                                        "id": "component-14",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-15",
                                        "componentType": "AppText",
                                        "content": "<h3><strong>Jak możemy Tobie pomóc?</strong></h3>\n" +
                                            "<p>Generalnie jesteśmy programistami Front End. W tym zakresie działań czujemy się najpewniej i gwarantujemy dokładność, wysoką jakość oraz wytwarzanie oprogramowania zgodnie ze sztuką i najlepszymi zasadami.</p>\n" +
                                            "<p>&nbsp;</p>\n" +
                                            "<p>Ponadto jesteśmy w stanie realizować projekty kompleksowo - rozwój jest dla nas najcenniejszy. Współpracujemy na tej płaszczyźnie z wieloma doświadczonymi programistami oraz architektami. Krótko mówiąc - nie ma dla nas rzeczy niemożliwych.</p>",
                                        "modifiers": ""
                                    },
                                    {
                                        "id": "component-16",
                                        "componentType": "Separator",
                                        "modifiers": "separator--transparent"
                                    },
                                    {
                                        "id": "component-17",
                                        "componentType": "Banner",
                                        "modifiers": ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "id": "page-3",
    "page-3": {
        "sections": [
            {
                "id": "section-1",
                "name": "section",
                "modifiers": "",
                "rows": [
                    {
                        "id": "row-1",
                        "name": "row",
                        "modifiers": "",
                        "columns": [
                            {
                                "id": "column-1",
                                "name": "column",
                                "size": "12",
                                "modifiers": "",
                                "components": [
                                    {
                                        "id": "component-18",
                                        "componentType": "CustomHeading",
                                        "title": "Jesteś zainteresowany współpracą?",
                                        "subtitle": "Napisz do nas lub zadzwoń."
                                    },
                                    {
                                        "id": "component-19",
                                        "componentType": "Separator",
                                        "modifiers": "separator--small separator--transparent"
                                    },
                                    {
                                        "id": "component-20",
                                        "componentType": "AppText",
                                        "content": "<p>Jeżeli potrzebujesz naszej pomocy, chcesz wesprzeć jedną z naszych inicjatyw bądź szukasz zespołu, w którym mógłbyś się rozwinąć zapraszamy do kontaktu.</p>\n",
                                        "modifiers": ""
                                    },
                                    {
                                        "id": "component-21",
                                        "componentType": "Separator",
                                        "modifiers": "separator--small separator--transparent"
                                    },
                                    {
                                        "id": "component-22",
                                        "componentType": "ContactBoxes",
                                        "modifiers": ""
                                    },
                                    {
                                        "id": "component-23",
                                        "componentType": "Separator",
                                        "modifiers": "separator--x-small separator--transparent"
                                    },
                                    {
                                        "id": "component-24",
                                        "componentType": "Banner",
                                        "modifiers": ""
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};