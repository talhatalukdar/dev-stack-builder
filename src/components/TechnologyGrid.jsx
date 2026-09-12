import TechCard from "./TechCard.jsx";

/**
 * Responsive grid of technology cards: 1 column on mobile, 2 on tablet,
 * 3 on desktop. `stackIds` is a Set of ids already in "Your Stack",
 * used to flip each card into its disabled/added state.
 */
export default function TechnologyGrid({ technologies, stackIds, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
