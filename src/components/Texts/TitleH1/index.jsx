const TitleH1 = ({ title, image, altImage, className = "" }) => {
    return (
        <div className=" w-full flex items-center justify-between 
                         gap-4 
                       "
        >
            <h1 className={` text-base sm:text-3xl md:text-5xl
                            font-bold leading-tight
                            max-w-[60%]
                            text-left
                            ${className}
                `}
            >
                {title}
            </h1>

            <img src={image}
                alt={altImage}
                className=" w-[40%] 
                            max-w-[300px]
                            object-contain
                            select-none
                "
            />
        </div>
    );
}

export default TitleH1;