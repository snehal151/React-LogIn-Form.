import React from "react";
import "./LogIn.css";

class LogIn extends React.Component {
  render() {
    return (
      <div class="form">
        <table>
          <tr>
            <th>
              <th>{this.props.name}</th>
              <form>
                <h1>Welcome</h1>
                <label>
                  Enter yourName:
                  <input type="text" name="name" />
                </label>
                <label>
                  Enter your password:
                  <input name="password" type="password" />
                </label>

                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </th>
          </tr>
        </table>
      </div>
    );
  }
}
export default LogIn;
