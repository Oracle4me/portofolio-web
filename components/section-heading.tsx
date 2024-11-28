type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-2xl font-bold text-center capitalize mb-8 text-gray-900">
      {children}
    </h2>
  );
};

export default SectionHeading;
