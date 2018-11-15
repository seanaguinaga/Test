import * as React from "react";
import styled from "../../configs/styled-components";

interface ButtonProps {
  label?: string;
  font?: string;
  style?: string;
  dynamic?: string;
  shadowed?: boolean;
}

interface ButtonState {
    clicked?: boolean;
}

class Button extends React.Component<ButtonProps, ButtonState, {}> {

  Button = styled.div`
    /* all declarations will be prefixed */
    border: solid;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
  height: 300px;
  overflow: scroll;
    /* pseudo selectors work as well */
    &:hover {
      
    }

    /* media queries are no problem */
    @media (max-width: 600px) {
      background: tomato;

      /* nested rules work as expected */
      &:hover {
        background: yellow;
      }
    }

    > button {
      /* descendant-selectors work as well, but are more of an escape hatch */
      text-decoration: underline;
    }

    /* Contextual selectors work as well */
    html.test & {
      display: none;
    }
  `;

  constructor(props: ButtonProps) {
    super(props)

    this.state = {
      clicked: false
    }
  }

    showClick = () => {
      const { clicked } = this.state

      this.setState({
        clicked: !clicked
      })
    }
    
    
  render() {

    const { label } = this.props

    return (
        <this.Button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
          <button>{ label }</button>
        </this.Button>
    );
  }

  
}

export default Button;
