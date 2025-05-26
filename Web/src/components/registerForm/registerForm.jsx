import "./RegisterForm.css";

const RegisterForm = ({ email, password, onEmailChange, onPasswordChange, onSubmit, error }) => {
    return (
        <div className="login-container">
            <h2 className="mb-4">Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit} noValidate>
                    <div className="mb-3">
                        <label className="form-label">EMAIL</label>
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
                    <div className="mb-3">
                        <label className="form-label">NAME</label>
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            onChange={onPasswordChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">IMAGE</label>
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            onChange={onPasswordChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">BACKGROUND IMAGE</label>
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            onChange={onPasswordChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn-login">Register</button>
                </form>
        </div>
    );
};

export default RegisterForm; 