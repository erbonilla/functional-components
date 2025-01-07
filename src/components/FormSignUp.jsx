import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";

function FormSignUp({handleSubmit}) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser 3 caracteres o mas"
        },
        lastname: {
            error: false,
            message: "Deben ser 3 caracteres o mas"
        },
        email: {
            error: false,
            message: "Email inválido"
        }
    });

    function validarNombre(nombre) {
        if (nombre.length >= 3) {
            return { name: { error: false, message: "" } };
        } else {
            return { name: { error: true, message: "Deben ser 3 caracteres o mas" } };
        }
    }

    function validarApellido(apellido) {
        if (apellido.length >= 3) {
            return { lastname: { error: false, message: "" } };
        } else {
            return { lastname: { error: true, message: "Deben ser 3 caracteres o mas" } };
        }
    }

    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            return { email: { error: false, message: "" } };
        } else {
            return { email: { error: true, message: "Email inválido" } };
        }
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        switch(id) {
            case 'name':
                setName(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            default:
                break;
        }
        
        setErrors({
            ...errors,
            [id]: {
                error: true,
                message: "Campo requerido"
            }
        });
    }

    return (
       <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(name, lastname, email, prom, nov);
       }}>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange(e)}
            value={name}
            error={errors.name.error}
            helperText={errors.name.message 
                ? errors.name.message : ""}
            onBlur={(e) => {
                setErrors({
                    ...errors,
                    ...validarNombre(e.target.value)
                });
            }}
        />

        <TextField 
            id="lastname" 
            label="Apellido" 
            variant="outlined" 
            fullWidth
            margin="normal"
            value={lastname}
            onChange={(e) => handleChange(e)}
            error={errors.lastname.error}
            helperText={errors.lastname.message 
                ? errors.lastname.message : ""}
            onBlur={(e) => {
                setErrors({
                    ...errors,
                    ...validarApellido(e.target.value)
                });
            }}
        />

        <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => handleChange(e)}
            error={errors.email.error}
            helperText={errors.email.message 
                ? errors.email.message : ""}
            onBlur={(e) => {
                setErrors({
                    ...errors,
                    ...validarEmail(e.target.value)
                });
            }}
        />

        <FormGroup>
            <FormControlLabel 
                control={
                    <Switch
                        checked={prom}
                        onChange={(e) => 
                            setProm(
                                e.target.checked
                            )
                        }            
                    />
                } 
                label="Promociones" 
                />

                <FormControlLabel 
                    control={
                        <Switch
                            checked={nov}
                            onChange={(e) => 
                                setNov(
                                    e.target.checked)
                        }            
                    />
                } 
                    
                label="Novedades" 
                />
        </FormGroup>
        <Button 
            variant="contained"
            type="submit"
            >
                Registrarse</Button>
       </form>
    )
}

export default FormSignUp;
