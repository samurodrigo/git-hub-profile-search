import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList : Repository[] = [
    {
        name : "Ionic 3 Camera",
        description : "This repository is for Native access to the device Camera.",
        owner : USER_LIST[0]
    },
    {
        name : "Ionic 3 Geolocation",
        description : "This repository is for Native access to the device Geolocation.",
        owner : USER_LIST[0]
    },
    {
        name : "Ionic 3 SMS",
        description : "This repository is for Native access to the device SMS.",
        owner : USER_LIST[0]
    },
    {
        name : "Ionic 3 Calendar",
        description : "This repository is for Native access to the device Calendar.",
        owner : USER_LIST[1]
    },
    {
        name : "Ionic 3 Contacts",
        description : "This repository is for Native access to the device Contacts.",
        owner : USER_LIST[1]
    },
    {
        name : "Ionic 3 Device",
        description : "This repository is for Native access to the device Device.",
        owner : USER_LIST[1]
    },
];

export const REPOSITORY_LIST = repositoryList;