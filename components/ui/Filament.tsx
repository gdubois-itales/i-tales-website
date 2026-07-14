export default function Filament({ path }: { path: string }) {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-full w-full opacity-[0.16]"
            >
                <path d={path} stroke="#E8734A" strokeWidth="1.5" fill="none" />
            </svg>
        </div>
    );
}