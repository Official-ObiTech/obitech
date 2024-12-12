export default function Card({ skills }) {
  return (
    <>
      {skills.map((skil, index) => (
        <div
          key={index}
          className="rounded-xl w-36 shadow-sm dark:bg-slate-800 bg-slate-300/25 py-6 text-xl font-semibold "
        >
          <span className="flex items-center justify-center text-3xl">
            {skil.icon}
          </span>
          <p>{skil.text}</p>
        </div>
      ))}
    </>
  );
}
