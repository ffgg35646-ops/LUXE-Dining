import { FormEvent, useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Reservations = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    alert("Your reservation request has been submitted.");

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  return (
    <>
      <PageHeader
        title="Reserve a Table"
        subtitle="Book your luxury dining experience in just a few steps."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-3xl px-6">
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
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
              />

              <Input
                type="time"
                value={form.time}
                onChange={(e) =>
                  setForm({ ...form, time: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">
                Number of Guests
              </label>

              <select
                value={form.guests}
                onChange={(e) =>
                  setForm({ ...form, guests: e.target.value })
                }
                className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-amber-500"
              >
                {[1,2,3,4,5,6,7,8,9,10].map((guest) => (
                  <option key={guest} value={guest}>
                    {guest} Guest{guest > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              size="lg"
              fullWidth
            >
              Book Now
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reservations;
