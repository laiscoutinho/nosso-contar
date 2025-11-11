export default function TeamMemberCard({ avatar, name, role }) {
    return (
        <div className="relative border-2 border-(--pink-light) rounded-3xl shadow-md overflow-hidden w-[225px] md:w-[235px] lg:w-[325px]">
            <div className="absolute inset-0 shadow-[inset_0_3px_15px_var(--blue-light)] pointer-events-none rounded-xl"></div>

            <img
                src={avatar}
                alt={name}
                className="w-full h-[250px] md:h-[280px] lg:h-[375px] object-cover object-top"
            />

            <div className="bg-(--pink-light) p-3 text-center min-h-25 flex flex-col justify-center relative z-10">
                <h3 className="text-sm sm:text-base font-semibold">{name}</h3>
                <p className="text-xs sm:text-sm">{role}</p>
            </div>
        </div>
    );
}
