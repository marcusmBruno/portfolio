
type BoxedItem = {
    name: string
    icon: string
}

type BoxedTechListProps = {
    items: BoxedItem[]
}

export function BoxedTechList({ items }: BoxedTechListProps) {
    return (
        items.map((item, index) => {
            return (
                <div key={index} className="w-24 h-24 flex flex-col items-center justify-center border border-zinc-800 gap-2">
                    <img src={item.icon} alt="" className="w-auto h-8 grayscale" />
                    <span className="text-xs font-light">{item.name}</span>
                </div>
            );
        })
    )
}