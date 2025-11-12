import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";
import { BiSolidMedal } from "react-icons/bi";

export const stats: IStats[] = [
    {
        title: "1500+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "High Schools willing to increase their STEM offerings."
    },
    {
        title: "1st",
        icon: <BiSolidMedal size={34} className="text-yellow-500" />,
        description: "Scalable and trustful Italian Web3 education provider"
    },
    {
        title: "$9.39B ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Web3 Education market potential by 2033."
    }
];