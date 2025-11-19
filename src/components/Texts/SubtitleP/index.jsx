const SubtitleP = ({ children }) => {
    return (
        <div>
            <p className="  flex-1 text-left
                            text-lg sm:text-xl md:text-3xl 
                            text-gray-800 max-w-[700px] font-medium
                        "
            >
                {children}
            </p>
        </div>
    )
}

export default SubtitleP;