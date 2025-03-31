export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-[calc(100%-4rem)] bg-bg-secondary text-fg-primary p-6">
      {children}
    </section>
  );
};
