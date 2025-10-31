export default function LearningCard({ title, text, icon }) {
  return (
    <div className="bg-[var(--white-soft)] rounded-3xl shadow-md p-6 m-[15px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 w-[320px] sm:w-[360px] h-[180px]">
      <div>
        <h3 className="text-[var(--pink-strong)] text-xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-base font-medium">{text}</p>
      </div>

      <div className="flex justify-end mt-4 text-[var(--pink-strong)] text-2xl">
        {icon}
      </div>
    </div>
  );
}
