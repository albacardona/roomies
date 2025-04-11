interface Props {
  name: string;
  src: string;
}

export const Avatar = ({ name, src }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button type="button" className="size-32 sm:size-36 rounded-full border-4 border-bd-primary">
        <img className="rounded-full size-full" alt={name} src={src} />
      </button>
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};
