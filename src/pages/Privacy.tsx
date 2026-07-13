import PageHeader from "@/components/layout/PageHeader";

const Privacy = () => {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy and personal information are important to us."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-4xl space-y-10 px-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Information We Collect
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              We may collect personal information such as your name,
              email address, phone number, reservation details, and
              payment information when you interact with LUXE Dining.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              How We Use Your Information
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Your information is used to process reservations, improve
              customer experience, communicate important updates,
              process orders, and maintain the security of our services.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Data Protection
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              We implement appropriate technical and organizational
              measures to protect your personal data against
              unauthorized access, disclosure, alteration, or loss.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Cookies
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              Our website may use cookies to enhance your browsing
              experience, remember preferences, and improve website
              performance.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-2xl font-bold text-white">
              Contact Us
            </h2>

            <p className="mt-4 leading-8 text-neutral-400">
              If you have any questions regarding this Privacy Policy,
              please contact our support team at
              contact@luxedining.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
