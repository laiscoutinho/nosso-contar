const TitleH2 = ({ children, className = "" }) => {
    return (
        <div>
            <h2 className={`text-base font-bold mb-12 sm:text-2xl md:text-4xl ${className}`}>
                {children}
            </h2>
        </div>
    )
}

export default TitleH2;