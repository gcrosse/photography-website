"use client";
import { useState } from "react";


type Photo = {
    id: number;
    title: string;
    url: string;
};

const photos: Photo[] = [
    { id: 1, title: "Ferris-Wheel", url: "/photos/Photo1.jpg" },
    { id: 3, title: "Vegas", url: "/photos/Photo3.jpg" },
    { id: 2, title: "Mountains", url: "/photos/photo2.jpg"},
    { id: 4, title: "Banff", url: "/photos/photo4.jpg"}
];

export default function PhotoLikesCounter() {
    const [likes, setLikes] = useState<{ [key: number]: number}> ({});

    const incrementLike = (id: number) => {
        setLikes((prev) => ({
            ...prev, [id]: (prev[id] ?? 0) + 1,
        }));
    };

    return(
        <div style={{ padding: "1rem",
            backgroundColor: " #d9d0b4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "black",
            fontFamily: "inherit",

        }}>
            <h1 style={{color: "#7d6b57"}}>MY LATEST PHOTO GALLERY</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem,"}}>
            {photos.map((photo) => (
                <div key={photo.id} style={{ width: "220px", textAlign: "center"}}>
                    <img src={photo.url} alt={photo.title} style={{ width: "200px", borderRadius: "8px", objectFit: "cover"}}/>
                <p>{photo.title}</p>
                <p>Likes: {likes[photo.id] ?? 0}</p>
                <button onClick={() => incrementLike(photo.id)}>Like</button>
            </div>
            ))}
        </div>
        </div>
    );
}