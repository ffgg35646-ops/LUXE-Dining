interface LoaderProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  text?: string;
}

const sizeClasses = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

const Loader = ({
  size = "md",
  fullScreen = false,
  text = "Loading...",
}: LoaderProps) => {
  const spinner = (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-amber-500 border-t-transparent`}
      />

      <p className="text-sm text-neutral-400">
        {text}
      </p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {spinner}
    </div>
  );
};

export default Loader;
