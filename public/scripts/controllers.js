var handlebars = handlebars || Handlebars;

let controllers = {
    home: () => {
        var products;
        dataService.isLoggedIn()
            .then(isLoggedIn => {
                if (isLoggedIn) {
                  $(document.body).addClass("logged-in");
                  $('.visible-when-not-logged-in').hide();
                  $('.hidden-when-not-logged-in').show();
                    window.location = "#/home";
                    return;
                }
                });
        dataService.products()
            .then((productsResponse) => {
                products = productsResponse;
                console.log(products);
                return templates.get('home')
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(products);
                $("#main").html(html);

                $("#down-btn").click(function() {
                    console.log("clicked");
                    $('html, body').animate({
                        scrollTop: $("#home-products").offset().top - 50
                    }, 1500);
                });

                $('.products-slider').unslider();
            });
    },
    products: () => {

    },
    books: () => {
        var books;
        dataService.books()
            .then((booksResponse) => {
                books = booksResponse;

                return templates.get("books");
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(books.result);

                $("#main").html(html);


            });
    },
    singleBook: (params) => {
        var books,
            id = params.id;
        console.log(id);
        dataService.books()
            .then((booksResponse) => {
                for (i in booksResponse.result) {
                    if (booksResponse.result[i].id === Number(id)) {
                        books = booksResponse.result[i];
                        console.log(booksResponse.result[i].id);
                        console.log(books);
                    }
                }

                return templates.get("singleBook");
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(books);

                $("#main").html(html);
            });
    },
    magazines: () => {
        var magazines;
        dataService.magazines()
            .then((magazinesResponse) => {
                magazines = magazinesResponse;

                return templates.get('magazines');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(magazines.result);

                $('#main').html(html);
            });

    },
    singleMagazine: (params) => {
        var magazines,
            id = params.id;
        dataService.magazines()
            .then((magazinesResponse) => {
                for (i in magazinesResponse.result) {
                    if (magazinesResponse.result[i].id === Number(id)) {
                        magazines = magazinesResponse.result[i];
                        console.log(magazinesResponse.result[i].id);
                        console.log(magazines);
                    }
                }

                return templates.get("singleMagazine");
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(magazines);

                $("#main").html(html);
            });
    },
    comics: () => {
        var comics;
        dataService.comics()
            .then((comicsResponse) => {
                comics = comicsResponse;

                return templates.get('comics');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(comics.result);

                $('#main').html(html);
            });
    },
    singleComic: (params) => {
        var comics,
            id = params.id;
        dataService.comics()
            .then((comicsResponse) => {
                for (i in comicsResponse.result) {
                    if (comicsResponse.result[i].id === Number(id)) {
                        comics = comicsResponse.result[i];
                    }
                }
                return templates.get('singleComic');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(comics);

                $('#main').html(html);
            });
    },
    cds: () => {
        var cds;
        dataService.cds()
            .then((cdsResponse) => {
                cds = cdsResponse;

                return templates.get('cds');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(cds.result);

                $('#main').html(html);
            });
    },
    singleCd: (params) => {
        var cds,
            id = params.id;
        dataService.cds()
            .then((cdsResponse) => {
                for (i in cdsResponse.result) {
                    if (cdsResponse.result[i].id === Number(id)) {
                        cds = cdsResponse.result[i];
                    }
                }
                return templates.get('singleCd');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(cds);

                $('#main').html(html);
            });
    },
    dvds: () => {
        var dvds;
        dataService.dvds()
            .then((dvdsResponse) => {
                dvds = dvdsResponse;

                return templates.get('dvds');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(dvds.result);

                $('#main').html(html);
            });
    },
    singleDvd: (params) => {
        var dvds,
            id = params.id;
        dataService.dvds()
            .then((dvdsResponse) => {
                for (i in dvdsResponse.result) {
                    if (dvdsResponse.result[i].id === Number(id)) {
                        dvds = dvdsResponse.result[i];
                    }
                }
                return templates.get('singleDvd');
            })
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(dvds);

                $('#main').html(html);
            });
    },
    contact: () => {
        return templates.get('contacts')
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc(templateFunc);
                $("#main").html(html);
            });
    },
    login: () => {
        dataService.isLoggedIn()
            .then(isLoggedIn => {
                if (isLoggedIn) {
                  $(document.body).addClass("logged-in");
                  $('.visible-when-not-logged-in').hide();
                  $('.hidden-when-not-logged-in').show();
                    window.location = "#/home";
                    return;
                }

                templates.get("login")
                    .then((templateHtml) => {
                        let templateFunc = handlebars.compile(templateHtml);
                        let html = templateFunc();

                        $("#main").html(html);

                        $("#btn-login").on("click", (ev) => {
                            let user = {
                                username: $("#tb-username").val(),
                                passHash: $("#tb-password").val()
                            };

                            dataService.login(user)
                                .then((respUser) => {
                                    $(document.body).addClass("logged-in");
                                    $('.visible-when-not-logged-in').hide();
                                    $('.hidden-when-not-logged-in').show();
                                    document.location = "#/home";
                                });

                            ev.preventDefault();
                            return false;
                        });

                        $("#btn-register").on("click", (ev) => {
                            let user = {
                                username: $("#tb-username").val(),
                                passHash: $("#tb-password").val()
                            };

                            dataService.register(user)
                                .then((respUser) => {
                                    return dataService.login(user);
                                })
                                .then((respUser) => {
                                    $(document.body).addClass("logged-in");
                                    $('.visible-when-not-logged-in').hide();
                                    $('.hidden-when-not-logged-in').show();
                                    document.location = "#/home";
                                });

                            ev.preventDefault();
                            return false;
                        });

                    });
            });
    },
    logout: () => {
        dataService.logout()
            .then(() => {
                $(document.body).removeClass("logged-in");
                $('.visible-when-not-logged-in').show();
                $('.hidden-when-not-logged-in').hide();
            });
    },
    addBook: () => {
        templates.get("addBook")
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();

                $("#main").html(html);

                $("#btn-add").on("click", (ev) => {
                    let book = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val(),
                        price: $("#tb-price").val(),
                        category: $("#tb-category").val(),
                        author: $("#tb-author").val(),
                        pages: $("#tb-pages").val(),
                        cover: $("#tb-cover").val(),
                        summary: $("#tb-summary").val()
                    };

                    dataService.addBook(book);
                            document.location = "#/products/books";

                    ev.preventDefault();
                    return false;
                });

            });
    },
    addMagazine: () => {
        templates.get("addMagazine")
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();

                $("#main").html(html);

                $("#btn-add").on("click", (ev) => {
                    let magazine = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val(),
                        price: $("#tb-price").val(),
                        category: $("#tb-category").val(),
                          author: $("#tb-author").val(),
                        theme: $("#tb-theme").val(),
                        pages: $("#tb-pages").val()
                    };

                    dataService.addMagazine(magazine);
                            document.location = "#/products/magazines";


                    ev.preventDefault();
                    return false;
                });

            });
    },
    addComic: () => {
        templates.get("addComic")
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();

                $("#main").html(html);

                $("#btn-add").on("click", (ev) => {
                    let comic = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val(),
                        price: $("#tb-price").val(),
                        category: $("#tb-category").val(),
                        author: $("#tb-author").val(),
                        pages: $("#tb-pages").val(),
                        superheroName: $("#tb-superheroName").val(),
                        publisher: $("#tb-publisher").val()
                    };

                    dataService.addComic(comic);
                            document.location = "#/products/comics";

                    ev.preventDefault();
                    return false;
                });

            });
    },
    addCd: () => {
        templates.get("addCd")
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();

                $("#main").html(html);

                $("#btn-add").on("click", (ev) => {
                    let cd = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val(),
                        price: $("#tb-price").val(),
                        category: $("#tb-category").val(),
                        raiting: $("#tb-raiting").val(),
                        duration: $("#tb-duration").val(),
                        artist: $("#tb-artist").val(),
                        songCount: $("#tb-songCount").val()
                    };

                    dataService.addCd(cd);
                            document.location = "#/products/cds";

                    ev.preventDefault();
                    return false;
                });

            });
    },
    addDvd: () => {
        templates.get("addDvd")
            .then((templateHtml) => {
                let templateFunc = handlebars.compile(templateHtml);
                let html = templateFunc();

                $("#main").html(html);

                $("#btn-add").on("click", (ev) => {
                    let dvd = {
                        name: $("#tb-name").val(),
                        img: $("#tb-img").val(),
                        price: $("#tb-price").val(),
                        category: $("#tb-category").val(),
                        raiting: $("#tb-raiting").val(),
                        duration: $("#tb-duration").val(),
                        summary: $("#tb-summary").val(),
                        premiereYear: $("#tb-premiereYear").val()
                    };

                    dataService.addDvd(dvd);
                    document.location = "#/products/dvds";
                    ev.preventDefault();
                    return false;
                });

            });
    }
};
