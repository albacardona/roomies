interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  const { title, children } = props;
  return (
    <div className="size-fit flex flex-col items-center justify-center gap-2 py-5 px-4 bg-bg-secondary rounded-lg shadow-md">
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};
