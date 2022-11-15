import { ReactNode } from "react";

export interface WorkItemType {
    img: string;
    name: string;
    tags: string[];
}

export interface EducationItemType {
    name: string;
    title: string;
    date: string;
}

export interface SkillType {
    name: string;
    progress: number;
}

export interface ContactInfoType {
    name: string;
    data: string;
    children: ReactNode;
}
