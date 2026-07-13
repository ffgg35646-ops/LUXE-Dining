interface EmptyStateProps {
  title: string;
  message?: string;
  description?: string;
}

const EmptyState = ({
  title,
  message,
  description,
}: EmptyStateProps) => {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-10 text-center">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-4 text-neutral-400">
        {message || description}
      </p>
    </div>
  );
};

export default EmptyState;
