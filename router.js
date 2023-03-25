const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    console.log("in route()")
    console.log("event.target.href: " + event.target.href)
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./pages/landing-page.html",
    "/projects": "./pages/projects.html",
    "/my_story": "./pages/my_story.html",
    "/resume": "./pages/resume.html",
    "/contact": "./pages/contact.html",
};

const handleLocation = async () => {
    console.log("in handleLocation()")
    // console.log("window.location.pathname: " + window.location.pathname)
    console.log("routes[window.location.pathname]: " + routes[window.location.pathname])
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    const html = await fetch(route).then((data) => data.text());
    // console.log("html found: " + html)
    if(route !== './pages/landing-page.html') {
        document.getElementById("landing-page").style.visibility='hidden'
    } else {
        document.getElementById("landing-page").style.visibility='visible'
    }
    document.getElementById("alternate-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();