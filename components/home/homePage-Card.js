

export default function Card(props) {
    return (
        <div className="flex flex-col w-80 h-62 rounded-[8px] p-5 gap-5 items-center bg-white text-center text-[#4D5055] md:w-60">
            <div className={props.class}>
                {props.image}
            </div>
            <span className="text-[#3A3D42] text-2xl">{props.title}</span>
            <p className="text-lg">{props.decription}</p>
        </div>
    )
    
}
