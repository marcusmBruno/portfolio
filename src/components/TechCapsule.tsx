
type TechCapsuleProps = {
    names: string[]
}

export function TechCapsule({ names }: TechCapsuleProps) {
    return (
        names.map((name, index) => (
            <div key={index} className="flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1">
                <span className="text-xs font-light text-zinc-300">{name}</span>
            </div>
        ))
    );
}
