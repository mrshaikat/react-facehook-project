import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const submitFOrm = (formData) =>{
        console.log(formData);
        navigate('/');
    }
    return (
       <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(submitFOrm)}>
            <Field label="Email" error={errors.email}>
            <input
                className={`auth-input ${!!errors?.email ? "border-red-500": "border-gray-200"}`}
                name="email"
                type="email"
                id="email"
                {...register("email", {required: "Email is required"})}
                />
            </Field>
            <Field label="Password" error={errors.password}>
            <input
                className={`auth-input ${!!errors?.password ? "border-red-500": "border-gray-200"}`}
                name="password"
                type="password"
                id="password"
                {...register("password", {required: "Password is required",minLength: {value: 8, message: "Your Password must be at least 8 characters"}})}
                />
            </Field>
            <Field>
            <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
                Login
            </button>
          </Field>
       </form>
    );
}