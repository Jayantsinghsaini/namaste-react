# Routing in React
## 1. React Router

React Router is a library for handling client-side routing in React apps. It allows you to define URLs and map them to components so users can navigate your app without full page reloads.

Example:
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
```

Here:

path = URL path.

element = component to render.

## 2. Nested Routes

Nested routes let you render child routes inside parent routes. This is useful for layouts that stay the same (e.g., sidebar, header) while child content changes.

Example:
```jsx
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This can have a header/sidebar
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
```

In Layout component, you must render an `<Outlet />` where child routes will appear:

```jsx
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
      <nav>
        <Link to="dashboard">Dashboard</Link>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <div>
        <Outlet /> {/* Nested route content will render here */}
      </div>
    </div>
  );
}
```
## 3. Dynamic Routes

Dynamic routes allow URL parameters (like IDs) to make routes flexible. Use a colon : in the path to define a parameter.

Example:
```jsx
import User from "./User";

const router = createBrowserRouter([
  { path: "/user/:id", element: <User /> },
]);


In the User component, you access the dynamic parameter with useParams:

import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

So /user/123 will render User ID: 123.

## 4. Link

`<Link>` is used for client-side navigation (without page reload). It's like `<a>` but keeps React Router in control.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/123">User 123</Link>
    </nav>
  );
}
```

to = the path you want to navigate to.

Works with dynamic and nested routes.

# SSR and CSR

## 1. Server-Side Routing (SSR)

Server-side routing is when every URL request is sent to the server, and the server responds with a new HTML page. The server handles which page/component to render.

**How it works:**

* User navigates to example.com/about.

* Browser sends an HTTP request to the server.

* Server decides which HTML to send (e.g., about.html or rendered template).

* Browser reloads the page with the new content.

**Example:** Traditional websites using PHP, Django, Ruby on Rails, or even static HTML pages.

Pros:

* Works without JavaScript.

* Good for SEO because content is rendered on the server.

* Initial load is usually fully rendered.

Cons:

* Full page reload for every navigation → slower user experience.

* Cannot maintain app state between page reloads easily.



## 2. Client-Side Routing (CSR)

Client-side routing is when navigation is handled by JavaScript on the browser. Instead of requesting a new page from the server, the app updates the URL and renders the correct component dynamically.

How it works (React Router example):

* User clicks a `<Link to="/about">About</Link>`.

* React Router intercepts the click → no page reload.

* React renders the <About /> component inside the current page.

* URL changes in the browser, but only the DOM is updated.

Example: React, Angular, Vue, Single Page Applications (SPAs).

Pros:

* Faster navigation → no full page reloads.

* Can maintain app state across “pages.”

* Smooth, app-like experience.

Cons:

* SEO can be trickier (search engines need SSR or prerendering for content).

* Initial load may be slower because JS must download first.

* Users with JS disabled won’t see content.