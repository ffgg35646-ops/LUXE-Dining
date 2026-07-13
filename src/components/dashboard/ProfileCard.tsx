const ProfileCard = () => {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-800 text-3xl text-white">
          U
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-white">
          Guest User
        </h2>

        <p className="mt-2 text-neutral-400">
          Premium Dining Member
        </p>

        <button className="mt-6 rounded-xl border border-neutral-700 px-5 py-2 text-sm text-white transition hover:bg-neutral-800">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
