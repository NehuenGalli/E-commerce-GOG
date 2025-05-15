import "./login.css";

const LoginForm = ({ email, password, onEmailChange, onPasswordChange, onSubmit, error }) => {
    return (
        <div className="login-container">
            <h2 className="mb-4">Sign in</h2>
            {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit} noValidate>
                    <div className="mb-3">
                        <label className="form-label">Sign in with Email</label>
                        <input type="email" 
                        className="form-control"
                        value={email}
                        onChange={onEmailChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">PASSWORD</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={onPasswordChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-login">Sign in</button>
                </form>
        </div>
    );
};

export default LoginForm; 