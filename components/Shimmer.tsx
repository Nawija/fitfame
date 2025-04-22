export default function Shimmer({ imageLoaded }: { imageLoaded: boolean }) {
    return (
        <>
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-50 rounded-md overflow-hidden">
                    <div className="w-full h-full shimmer" />
                </div>
            )}
        </>
    );
}
