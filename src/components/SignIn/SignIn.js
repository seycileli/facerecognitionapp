import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    };

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://still-everglades-31089.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    };

    render() {
        const { onRouteChange } = this.props;
        return (

            /* sign in logo */
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>

                            {/* user enter email */}
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>

                                <input onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email" name="email-address" id="email-address"/>
                            </div>

                            {/* user enter password */}
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>

                                <input onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password" name="password" id="password"/>
                            </div>
                        </fieldset>

                        {/* submit button */}
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow f6 dib pointer"
                                type="submit" value="Sign in"/>
                        </div>

                        {/* register button */}
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')}
                               className="f6 link dim black db pointer">Register</p>
                        </div>

                    </div>
                </main>
            </article>
        );
    };
}

export default SignIn;