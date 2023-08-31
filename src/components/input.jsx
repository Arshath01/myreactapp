import { useState } from "react";

function InputField() {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(name,email);
    }

    return (
        <div className="main_div">
            <input 
                type="text"
                placeholder="Name"
                id="input_field"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
                <br />
            <input 
                type="text"
                placeholder="Email"
                id="input_field"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

                <br />

            <button 
                id="btn"onClick={handleSubmit}
            >
                show value
            </button>

            <br />

            <div>
                {name}
                {email}
            </div>
        </div>
    )
}

export default InputField;