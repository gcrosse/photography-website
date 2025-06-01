"use client";
import{ useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        //All Fields must be filled
        if(!name || !email || !message ) {
            alert("Alert! Please fill all valid fields");
            return;
        }
        //Simulate form submission
        console.log("Your request has been Submitted: ", {name, email, message});
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
    };

return (
    <div style={{  padding: "1rem", 
        border: "1px solid #ccc", borderRadius: "8px", marginTop: "2rem", 
        width: "500px", height: "300px", backgroundColor: "#7d6b57"}}>
            
        <h2 style={{ textAlign: "center", color: "#fff"}}>Request To Purchase A Photo</h2>
        {submitted ? (
            <p style={{ color: "green"}}> Thank you! Your request has been submitted</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem"}}>
                    <label>Name: <br />
                    <input type= "text" value={name} onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem"}} />
                    </label>
                </div>
                 <div style={{ marginBottom: "1rem"}}>
                    <label>Email: <br />
                        <input type= "text" value={email} onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem"}} />
                    </label>
                <div style={{ marginBottom: "1rem"}}>
                    <label>Message: <br />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                        style={{ width: "100%", padding: "0.5rem"}} />
                    </label>
                </div>
                </div>
                <button type="submit" style={{ padding: "0.5rem 1rem"}}> Submit Request</button>
            </form>
        )}
    </div>
);
}
