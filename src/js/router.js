import $ from "jquery";

$(document).ready(() => {
  const urlPageTitle = "Shared Docs";

  // create document click that watches the nav links only
  document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("div a")) {
      return;
    }
    e.preventDefault();
    urlRoute();
  });

  // create an object that maps the url to the template, title, and description
  const urlRoutes = {
    404: {
      template: "pages/404.html",
      title: "404 | " + urlPageTitle,
      description: "Page not found",
    },
    "/": {
      template: "pages/home.html",
      title: "Home | " + urlPageTitle,
      description: "This is the home page",
    },
    "/signup": {
      template: "pages/signup.html",
      title: "Sign Up | " + urlPageTitle,
      description: "This is the sign up page",
    },
    "/login": {
      template: "pages/login.html",
      title: "Log In | " + urlPageTitle,
      description: "This is the log in page",
    },
    "/docs": {
      template: "pages/docs.html",
      title: "Docs | " + urlPageTitle,
      description: "This is the docs page",
    },
  };

  // create a function that watches the url and calls the urlLocationHandler
  const urlRoute = async (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    await urlLocationHandler();
  };

  // create a function that handles the url location
  const urlLocationHandler = async () => {
    const location = window.location.pathname; // get the url path

    if (location.length == 0) {
      location = "/";
    }
    // get the route object from the urlRoutes object
    const route = urlRoutes[location] || urlRoutes["404"];
    // get the html from the template

    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    // document.querySelector('meta[name="description"]').setAttribute("content", route.description);
  };

  // add an event listener to the window that watches for url changes
  window.onpopstate = urlLocationHandler;
  // call the urlLocationHandler function to handle the initial url
  window.route = urlRoute;
  // call the urlLocationHandler function to handle the initial url
  urlLocationHandler();
});