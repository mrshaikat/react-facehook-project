import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const submitFOrm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
          console.log("atuh");
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitFOrm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          className={`auth-input ${
            !!errors?.email ? "border-red-500" : "border-gray-200"
          }`}
          name="email"
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          className={`auth-input ${
            !!errors?.password ? "border-red-500" : "border-gray-200"
          }`}
          name="password"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your Password must be at least 8 characters",
            },
          })}
        />
      </Field>
      <p className=" text-red-500 mb-3">{errors?.root?.random?.message}</p>
      <Field>
        <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
          Login
        </button>
      </Field>
    </form>
  );
}
