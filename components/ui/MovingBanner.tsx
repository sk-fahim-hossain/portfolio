import { skills } from "@/Data";
import Marquee from "react-fast-marquee";

const MovingBanner = () => {

    return (
        <Marquee className="my-8" gradient gradientColor="#000319" autoFill>
            {
                skills.map( (item) =>(
                        <div key={item.id} className="flex ml-7">
                            <img className="aspect-square max-w-5" src={item.icon_link} alt={item.skill_name}  />
                            <p>{item.skill_name}</p>
                        </div>
                ))
            }
        </Marquee>
    );
};

export default MovingBanner;