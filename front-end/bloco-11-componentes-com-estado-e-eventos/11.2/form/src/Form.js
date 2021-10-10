import { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      mainSkill: 'html',
      git: false
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="skills">
          Principal habilidade:
          <select
            name="mainSkill"
            id="skills"
            value={this.state.mainSkill}
            onChange={this.handleChange}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="python">Python</option>
          </select>
        </label>

        <fieldset className="login-area">
          <legend>Login</legend>
          <label htmlFor="email">
            E-mail:
            <input 
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="password">
            Senha:
            <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}/>
          </label>
        </fieldset>


        <label htmlFor="git">
          <input
            type="checkbox"
            name="git"
            id="git" 
            checked={this.state.git}
            onChange={this.handleChange}
          />
          Manja de git?
        </label>
      </form>
    )
  }
}

export default Form;