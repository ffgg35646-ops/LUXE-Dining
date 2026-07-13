import PageHeader from "@/components/layout/PageHeader";
import ProfileCard from "@/components/dashboard/ProfileCard";
import StatsCard from "@/components/dashboard/StatsCard";

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
                <StatsCard
                  title="Reservations"
                  value="18"
                  description="Completed bookings"
                />

                <StatsCard
                  title="Orders"
                  value="42"
                  description="Food orders"
                />

                <StatsCard
                  title="Reward Points"
                  value="2,450"
                  description="Available balance"
                />

                <StatsCard
                  title="Favorite Dishes"
                  value="16"
                  description="Saved items"
                />
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
