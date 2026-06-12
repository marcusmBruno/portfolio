
type Info = {
    role: string
    institution: string
    descriptions?: string[]
    date?: string
    miniDesc?: string
}

type InfoCardProps = {
    info: Info
}

export function InfoCard({ info }: InfoCardProps) {
    return (
        <div className="border md:flex justify-between border-zinc-800 rounded-md px-5 py-4">
            <div className="flex items-start gap-4">
                <div>
                    <h3 className="font-semibold">{info.institution}</h3>
                    <h3 className="text-sm font-light">{info.role}</h3>
                    <ul className="list-disc text-sm ml-4 mt-2 text-zinc-300">
                        {
                            info.descriptions?.map((desc, index) => {
                                return (<li key={index}> {desc} </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:items-end">
                <p className="text-sm text-zinc-400 whitespace-nowrap">{info.date}</p>
                {info.miniDesc && <p className="text-sm text-zinc-200">{info.miniDesc}</p>}
            </div>
        </div>
    );
}