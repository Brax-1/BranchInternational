import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Layout } from "../../Components";

const SignIn = () => {
	const [showSignup, setShowSignup] = useState(false);
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [mailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState({ state: false, msg: "" });

	return (
		<Layout>
			<div className="signin">
				<div className="signin_left">
					<div className="signin_featureText">
						<h1 className="signin_title">
							<span>Welcome</span> Back
						</h1>
						<p className="signin_subtitle">
							To keep connected with us please login with your personal
							information by email address and password
						</p>
					</div>
					<div className="signin_buttons">
						<input type={"text"} className="auth_input" placeholder="Email" />
						<input
							type={"text"}
							className="auth_input"
							placeholder="Password"
						/>
						<Button
							color="primary"
							variant="contained"
							className="signin_createBTN"
						>
							<LockOpenIcon />
							<p>Sign in</p>
						</Button>
					</div>

					<Divider
						style={{
							background: "rgba(255,255,255,0.1)",
							marginBottom: "50px",
						}}
					/>
					<div style={{ color: "white" }}>
						Don't have an Account
						<Link to={"/signup"} className="signin_createaccount">
							Create Account
						</Link>
					</div>
				</div>

				<div className="signin_right">
					<img
						className="signin_image"
						src="https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg?w=1380&t=st=1664680237~exp=1664680837~hmac=775ceb6693804749058263520686ead28e2679b7fe690faba9129e8be567baca"
						alt="Feature IMG"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default SignIn;
