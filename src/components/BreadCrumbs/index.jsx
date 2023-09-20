import "../BreadCrumbs/breadCrumb.css";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function BreadCrumbs({ open }) {
  const params = useParams();
  const routes = [
    { path: "/results", breadcrumb: "Search Results" },
    { path: "/myaccount", breadcrumb: "My Account" },
    { path: "/card", breadcrumb: "Shopping Cart" },
    { path: "/details/:id", breadcrumb: null },
    { path: "/details", breadcrumb: "Products" },
    { path: "/details/:id/:title", breadcrumb: params.title },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    !open &&
    !location.pathname.includes("/error") && (
      <section className="breadCrumbs">
        <div className="container">
          <nav className="breadcrumbs__items">
            {breadcrumbs.map(({ match, breadcrumb }) => (
              <Link
                key={match.pathname}
                to={
                  match.pathname === "/details"
                    ? (match.pathname = "/products")
                    : match.pathname
                }
                className={
                  match.pathname === location.pathname
                    ? "breadcrumbs__items--link breadcrumb-active"
                    : "breadcrumbs__items--link breadcrumb-not-active"
                }
              >
                {breadcrumb}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    )
  );
}

export default BreadCrumbs;
