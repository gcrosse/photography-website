import PhotoLikesCounter from "../components/Counter"; // Adjust path as needed
import Form from "../components/Form";
import ListFilters from "../components/ListFilter";

export default function HomePage() {
  return (
    <main
    style={{padding: "1rem",backgroundColor: " #879e82 "}}>
      <h1 style={{color: " #fff", fontFamily: "unset", fontWeight: "bold"}}>WELCOME TO MY PHOTOGRAPHY PORTFOLIO</h1>
      <PhotoLikesCounter />
      <ListFilters />
      <Form />
    </main>
  );
}