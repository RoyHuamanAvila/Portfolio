import { ReactNode } from "react";

export interface WorkItemType {
    img: string;
    name: string;
    description?: string;
    tags: string[];
    linkCode: string;
    linkDemo: string;
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
    link?: string;
    children: ReactNode;
}

export interface ServiceItemType {
    name: string;
    description: string;
    children: ReactNode;
}
