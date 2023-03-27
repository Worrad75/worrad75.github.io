import { init } from './index.js'

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./pages/landing-page.html",
    // "/projects": "./pages/projects.html",
    "/my_story": "./pages/my_story.html",
    "/resume": "./pages/resume.html",
    "/contact": "./pages/contact.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];
    const html = await fetch(route).then((data) => data.text());
    if(route !== './pages/landing-page.html') {
        document.getElementById("landing-page").style.display ='none'
    } else {
        document.getElementById("landing-page").style.display='block'
    }
    document.getElementById("alternate-page").innerHTML = html;
};

init()
window.onpopstate = handleLocation;
window.route = route;
handleLocation();
window.onresize = init