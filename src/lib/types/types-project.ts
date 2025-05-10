import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type ProjectsDataTypes = {
    name: string,
    slug: string,
    cover: string,
    date: string,
    desc: string,
    content: string,
    url: string,
    stacks?: Array<string>,
    images?: Array<string>,
    links?: Array<{
        name: string,
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
        url: string,
    }>,
    summary: string,
}

