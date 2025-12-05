import mascoteNossoContar from "../../../assets/logo/mascote.png"

const ItemListLI = ({ index, text, icon, className = "" }) => {
    return (
        <li
            key={index}
            className={`
                flex items-center 
                gap-8
                text-lg text-gray-800
                mb-5
                ${className}
            `}
        >
            <img
                src={mascoteNossoContar}
                alt="Ilustração do mascote do site Nosso Contar, segurando um livro."
                className="w-20 min-w-[60px] object-contain"
            />

            <div className="flex items-center flex-end w-full gap-5">
                <p className="font-medium text-2xl leading-snug">
                    {text}
                </p>

                {icon && (
                    <span className="text-(--pink-strong) text-3xl shrink-0">
                    {icon}
                </span>
                )}
            </div>
        </li>
    )
}

export default ItemListLI;
