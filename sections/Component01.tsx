interface CardProps {
    text: string;
    value: string;
    additionalStyles?: string;
}

const Card = ({ text, value, additionalStyles = "" }: CardProps) => (
    <div className={`w-full h-full bg-gray-300 border-2 border-black rounded-3xl flex flex-col items-start justify-between p-3 ${additionalStyles}`}>
        <p className="text-xl text-black">{text}</p>
        <p className="text-5xl text-black font-semibold">{value}</p>
    </div>
);

export interface Props {
    title: string;
    firstCard: CardProps;
    secondCard: CardProps;
    thirdCard: CardProps;
}

const DEFAULT_PROPS: Props = {
    title: "In 2028, the Pitch Platform is the first and obvious choice for any startup founder",
    firstCard: {
        text: "Serviceable Obtainable Market",
        value: "$1B"
    },
    secondCard: {
        text: "Serviceable Available Market",
        value: "$10B"
    },
    thirdCard: {
        text: "Total Addressable Market",
        value: "$100B"
    }
};

export default function SectionMarket(props: Props) {
    const { title, firstCard, secondCard, thirdCard } = { ...DEFAULT_PROPS, ...props };
    
    return (
        <section className="w-full min-h-[982px] flex flex-col items-start justify-center bg-black p-[96px] gap-10">
            <div className="max-w-[760px] text-6xl text-white font-semibold">
                <h1>{title}</h1>
            </div>
            <div className="w-full h-full flex">
                <Card {...secondCard} additionalStyles="min-w-[480px] max-w-[480px] min-h-[500px] max-h-[500px] absolute left-[120px] bg-[#cbd5e1]" />
                <Card {...firstCard} additionalStyles="min-w-[180px] max-w-[180px] min-h-[500px] max-h-[500px] bg-[#94a3b8] relative left-[1px]" />
                <Card {...thirdCard} additionalStyles="min-w-[880px] max-w-[880px] min-h-[500px] max-h-[500px] bg-[#e2e8f0] left-[720px]" />
            </div>
        </section>
    );
} 