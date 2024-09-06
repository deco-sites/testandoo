interface tag{
    text: string;
}

export interface Props{
    title: string;
    tags: tag[];
}

const DEFAULT_PROPS: Props = {
    title: "Built for young professionals looking for an unprecedented future",
    tags: [
        {
            text: "Age: 20 - 25",
        },
        {
            text: "Developers",
        }
    ]
};

export default function SectionTags(props : Props) {
    const { title, tags = [] } = {  ...DEFAULT_PROPS, ...props }
    return (
        <section class="w-full min-h-[982px] flex flex-col items-start justify-center bg-black p-[96px] text-[64px] leading-[70px] gap-16">
            <div class="max-w-[760px] max-h-[320px] text-white font-semibold">
                <h1 class="">{title}</h1>
            </div>
            <div class="min-w-[100px] min-h-[20px] bg-white text-black text-center font-semibold py-4 px-4 text-2xl leading-[25px] rounded-3xl gap-2">
                {tags.map((tag) => (
                    <p class="">{tag}</p>
                ))}
            </div>
        </section>
    )
}