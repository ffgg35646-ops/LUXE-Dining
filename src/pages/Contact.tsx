import { FormEvent, useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(form);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message anytime."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <h2 className="text-3xl font-bold text-white">
              Get in Touch
            </h2>

            <p className="mt-6 leading-8 text-neutral-400">
              Whether you have a question about reservations, private events,
              catering, or our menu, our team is always ready to help.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="mt-2 text-neutral-400">
                  125 Luxury Avenue, Downtown
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="mt-2 text-neutral-400">
                  +1 (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="mt-2 text-neutral-400">
                  contact@luxedining.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Opening Hours
                </h3>
                <p className="mt-2 text-neutral-400">
                  Monday - Sunday
                  <br />
                  12:00 PM - 11:00 PM
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
          >
            <Input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm({ ...form, subject: e.target.value })
              }
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none transition focus:border-amber-500"
            />

            <Button
              type="submit"
              size="lg"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
