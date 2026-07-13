import PageHeader from "@/components/layout/PageHeader";
import ProfileCard from "@/components/dashboard/ProfileCard";

const Profile = () => {
  return (
    <>
      <PageHeader
        title="My Profile"
        subtitle="Manage your personal information and dining activity."
      />

      <section className="bg-neutral-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            <ProfileCard />

            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="text-sm uppercase tracking-wide text-neutral-500">
                    Reservations
                  </h3>
                  <p className="mt-3 text-3xl font-bold text-white">
                    18
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Completed bookings
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="text-sm uppercase tracking-wide text-neutral-500">
                    Orders
                  </h3>
                  <p className="mt-3 text-3xl font-bold text-white">
                    42
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Food orders
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="text-sm uppercase tracking-wide text-neutral-500">
                    Reward Points
                  </h3>
                  <p className="mt-3 text-3xl font-bold text-white">
                    2,450
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Available balance
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                  <h3 className="text-sm uppercase tracking-wide text-neutral-500">
                    Favorite Dishes
                  </h3>
                  <p className="mt-3 text-3xl font-bold text-white">
                    16
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">
                    Saved items
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                <h2 className="text-2xl font-semibold text-white">
                  Account Overview
                </h2>

                <p className="mt-4 leading-8 text-neutral-400">
                  Welcome back to LUXE Dining. Here you can review your
                  reservations, favorite dishes, rewards, and account
                  activity. More profile management features will be
                  available in future updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
