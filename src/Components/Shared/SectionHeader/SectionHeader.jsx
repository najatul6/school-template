const SectionHeader = () => {
  return (
    <div className="text-white flex gap-6 flex-col justify-center items-start">
      <h6 className="text-primary-color text-sm font-bold tracking-[0.2px]">
        {subTitle}
      </h6>
      <h1 className="text-[40px] font-bold capitalize">{title}</h1>
      <p className="text-sm tracking-[0.2px] capitalize">
       {description}
      </p>
    </div>
  );
};

export default SectionHeader;
