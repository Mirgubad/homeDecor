import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "../BreadCrumbs/breadCrumb.css";

const routes = [{ path: "/results", breadcrumb: "Search Results" }];

function BreadCrumbs({ open }) {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    !open && (
      <section className="breadCrumbs">
        <div className="container">
          <nav className="breadcrumbs__items">
            {breadcrumbs.map(({ match, breadcrumb }) => (
              <Link
                key={match.pathname}
                to={match.pathname}
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
