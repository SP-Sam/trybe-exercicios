import { Component } from 'react';
import Checkbox from './Checkbox';
import Input from './Input';

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
          <Input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            text="E-mail:"
          />
          <Input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            text="Senha:"
          />
        </fieldset>

        <Checkbox
          type="checkbox"
          id="git"
          value={this.state.git}
          onChange={this.handleChange}
          text="Manja de git?"
        />
      </form>
    )
  }
}

export default Form;