import "./RegisterForm.css";

const RegisterForm = ({ formData, onChange, onSubmit, error }) => {
    return (
        <div className="register-container">
            <h2 className="mb-4">Register</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={onSubmit} noValidate>
                <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">PASSWORD</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">NAME</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">IMAGE</label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={formData.image}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">BACKGROUND IMAGE</label>
                    <input
                        type="text"
                        className="form-control"
                        name="backgroundImage"
                        value={formData.backgroundImage}
                        onChange={onChange}
                        required
                    />
                </div>

                <button type="submit" className="btn-login">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm; 