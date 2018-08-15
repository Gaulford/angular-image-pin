export type ImagesListType = {
    id: number,
    label: string,
    url: string
}[];

export type ImagesItemType = {
    id: number,
    label: string,
    url: string
};

export type PinFormType = {
    file: File,
    title: string,
    description: string
};

export type PinListType = {
    imagesId: number,
    top: number,
    left: number,
    title: string,
    content: string,
    img: File
}[];

export type PinSendType = {
    imagesId: number,
    top: number,
    left: number,
    title: string,
    content: string,
    img: File
};

export type PinUpdateType = {
    id: number,
    imagesId: number,
    top: number,
    left: number,
    title: string,
    content: string,
    img: File
};
