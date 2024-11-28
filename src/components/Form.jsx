import useInput from '../hooks/useInput';

function Form() {
    const { value: username, onChange: onChangeUsername, onClear: onResetUsername } = useInput('');
    const { value: password, onChange: onChangePassword, onClear: onResetPassword } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);

        onResetUsername();
        onResetPassword();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br />
            <input value={username} onChange={onChangeUsername} type="text" id="username" name="username" required />
            <br />

            <label htmlFor="password">Password</label>
            <br />

            <input
                value={password}
                onChange={onChangePassword}
                type="password"
                id="password"
                name="password"
                required
            />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
