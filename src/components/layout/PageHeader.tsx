interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  subtitle,
  backgroundImage = "/images/banner.jpg",
}: PageHeaderProps) => {
  return (
    <section
      className="relative flex h-[340px] items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
