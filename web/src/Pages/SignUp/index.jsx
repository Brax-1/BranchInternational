import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import { Layout } from "../../Components";

const SignUp = () => {
	const [showSignup, setShowSignup] = useState(false);
	const [loading, setLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [mailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState({ state: false, msg: "" });


	return (
		<Layout>
			<div className="signup">
				<div className="signup_left">
					<div className="signup_featureText">
						<h1 className="signup_title">
							Welcome to <span>Family</span>
						</h1>
						<p className="signup_subtitle">
							A few click away for creating your account with Blazing mist
						</p>
					</div>
					<div className="signup_buttons">
						<input type={"text"} className="auth_input" placeholder="Full Name" />
						<input type={"text"} className="auth_input" placeholder="Email" />
						<input
							type={"text"}
							className="auth_input"
							placeholder="Password"
						/>
						<input
							type={"text"}
							className="auth_input"
							placeholder="Confirm Password"
						/>
						<Button
							color="primary"
							variant="contained"
							className="signup_createBTN"
						>
							<LockIcon />
							<p>Sign Up</p>
						</Button>
					</div>
					<Divider
						style={{
							background: "rgba(255,255,255,0.1)",
							marginBottom: "50px",
						}}
					/>
					<div style={{ color: "white" }}>
						Already have an Account
						<Link to={"/signin"} className="signup_createaccount">
							Sign In
						</Link>
					</div>
				</div>

				<div className="signup_right">
					<img
						className="signup_image"
						src="https://www.hrkatha.com/wp-content/uploads/2021/08/Branch.png"
						alt="Feature IMG"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default SignUp;
