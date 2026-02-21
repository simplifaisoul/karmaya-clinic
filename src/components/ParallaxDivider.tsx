const ParallaxDivider = ({ image, quote }: { image: string; quote?: string }) => {
    return (
        <div className="relative h-[250px] md:h-[350px] overflow-hidden" aria-hidden="true">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-neutral-900/60" />
            {quote && (
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <p className="text-white text-lg md:text-2xl font-medium text-center max-w-2xl italic leading-relaxed text-shadow-md">
                        "{quote}"
                    </p>
                </div>
            )}
        </div>
    );
};

export default ParallaxDivider;
