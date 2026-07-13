import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

const NotFound = () => {
  return (
    <>
      <PageHeader
        title="404"
        subtitle="The page you are looking for could not be found."
      />

      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-12 text-center">
            <h2 className="text-7xl font-black text-amber-400">
              404
            </h2>

            <h3 className="mt-6 text-3xl font-bold text-white">
              Oops! Page Not Found
            </h3>

            <p className="mt-6 leading-8 text-neutral-400">
              The page you requested may have been moved, deleted,
              or the URL might be incorrect.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg">
                  Back to Home
                </Button>
              </Link>

              <Link to="/menu">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Browse Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
