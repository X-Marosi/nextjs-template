interface ShowcaseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function ShowcaseCard({ title, description, icon }: ShowcaseCardProps) {
  return (
    <div className="card-themed p-6 rounded-xl hover:-translate-y-1 transition-all duration-300">
      {icon && (
        <div className="mb-4 text-[var(--color-accent-primary)]">{icon}</div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
