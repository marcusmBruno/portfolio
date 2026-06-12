
type MarqueeItemProps = {
    icons: React.ElementType[]
}

export function MarqueeItem({ icons }: MarqueeItemProps) {
    return (
        <div className="flex gap-8">
            {icons.map((Icon, index) => (
                <Icon key={index} size={48} />
            ))}
        </div>
    );
}