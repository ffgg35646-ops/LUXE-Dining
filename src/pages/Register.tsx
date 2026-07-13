import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <>
      <PageHeader
        title="Create Account"
        subtitle="Join LUXE Dining and enjoy exclusive reservations, rewards, and premium experiences."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-md px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
          >
            <Input
              placeholder="Full Name"
              value={form.fullName}
              onChange={(event) =>
                setForm({ ...form, fullName: event.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />

            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(event) =>
                setForm({ ...form, phone: event.target.value })
              }
            />

            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
            />

            <Input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(event) =>
                setForm({
                  ...form,
                  confirmPassword: event.target.value,
                })
              }
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
            >
              Create Account
            </Button>

            <div className="text-center text-sm text-neutral-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-amber-400 hover:text-amber-300"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
