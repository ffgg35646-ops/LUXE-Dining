import PageHeader from "@/components/layout/PageHeader";

const Terms = () => {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              By accessing or using LUXE Dining, you agree to comply with
              these Terms and Conditions. If you do not agree with any
              part of these terms, you should discontinue using our
              services.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Reservations & Orders
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Reservations are subject to availability. Orders may be
              modified or canceled based on restaurant policies and
              operational requirements.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Payments
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              All payments must be completed using approved payment
              methods. Prices displayed on the website are subject to
              change without prior notice.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              User Responsibilities
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Users agree to provide accurate information and not engage
              in any activity that may disrupt or compromise the website
              or its services.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              LUXE Dining shall not be liable for any indirect,
              incidental, or consequential damages arising from the use
              of this website or its services.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Changes to These Terms
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              We reserve the right to update these Terms and Conditions
              at any time. Continued use of the website constitutes
              acceptance of any revised terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
