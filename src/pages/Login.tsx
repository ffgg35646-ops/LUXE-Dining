import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <>
      <PageHeader
        title="Welcome Back"
        subtitle="Sign in to manage your reservations, orders, and rewards."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-md px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-neutral-800 bg-neutral-900 p-8"
          >
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
            >
              Sign In
            </Button>

            <div className="text-center text-sm text-neutral-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-amber-400 hover:text-amber-300"
              >
                Create one
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
