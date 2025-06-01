"use client"
import {useState} from "react";

type Photo = {
    id: number;
    title: string;
    category: string;
    url: string; 
};

const samplePhotos: Photo[] = [
    {id: 1, title: "Photo1", category: "Design", url: "/photos/photo1.jpg" },
    {id: 3, title: "Photo3", category: "City", url: "/photos/photo3.jpg" },
    {id: 2, title: "Photo2", category: "Scenery", url: "/photos/photo2.jpg" },
    {id: 4, title: "Photo4", category: "Location", url: "/photos/photo4.jpg" },
];

const categories = ["All", "Design", "City", "Scenery", "Location"];
 
export default function ListFilters() {
    const[selectedCategory, setSelectCategory] = useState("All");

    const filteredPhotos =
    selectedCategory === "All"
    ? samplePhotos
    : samplePhotos.filter((photo) => photo.category === selectedCategory);

return (
    <div style={{ 
        padding: "1rem", 
        backgroundColor: " #d9d0b4", 
        border: "1px solid #ccc", 
        borderRadius: "8px", 
        margin: "2rem auto",
    }}>
        
        <h2 style={{ textAlign: "center", marginBottom: "1.5", color: "#7d6b57" }}> Browse by Category </h2>

        <div style={{ textAlign: "center", marginBottom: "2rem"}}>
         {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectCategory(cat)} 
            style={{ margin: "0.3rem", 
                padding: "0.5 rem 1 rem", 
                backgroundColor: selectedCategory === cat ? "#444" :  "#eee", 
                color: selectedCategory === cat ? "#fff" : "#333",
                border: "none", 
                cursor: "pointer",
                transition: "background-color 0.5s"
            }}>
                {cat}   
            </button>
         ))}
        </div>

        <div style={{ backgroundColor:"#7d6b57", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem"}}>
            {filteredPhotos.map((photo) => (
                <div key={photo.id} 
                style={{ 
                    width: "120px", 
                    textAlign: "center",
                    backgroundColor: "#d9d0b4", 
                    padding: "0.5rem",
                    borderRadius: "8px", 
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",

                }}>
                    <img src={photo.url} alt={photo.title} 
                    style={{ width: "100px", height: "100px", 
                        objectFit: "cover", 
                        borderRadius: "8px"}}/>
                    <p style={{
                        color: "gray", 
                        fontFamily: "fantasy"}}>
                            {photo.title}</p>
                    </div>
            ))}
    </div>
    </div>
);
}