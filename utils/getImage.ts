import client from "@/sanity/sanity.client";
import { useNextSanityImage } from "next-sanity-image";

export default function GetImage(image: any, CustomImageBuilder: any) {
    const imageProps = useNextSanityImage(client, image, {
        imageBuilder: CustomImageBuilder
    });
    if (!image || !image.asset) {
        return null;
    }
    return imageProps;
}