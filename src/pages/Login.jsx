import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="151694659552-h0ftgtujq9nd3s2567rbhjn8m4qhipnt.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://gen-food.vercel.app/login"
        data-auto_prompt="false"
      ></div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>

      <Link to={"https://gen-food.vercel.app/login"}>Login com Google</Link>
    </>
  );
};


export default Login;