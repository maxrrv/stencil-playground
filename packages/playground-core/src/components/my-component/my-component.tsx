import { Component, Prop, h, AttachInternals } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @AttachInternals() internals: ElementInternals;

  @Prop() value: string;

  private input: HTMLInputElement;

  private handleOnInput = () => {
    this.value = this.input.value;
    this.setFormValue();
  };

  private handleOnChange = () => {
    this.value = this.input.value;
    this.setFormValue();
  };

  private setFormValue = () => {
    console.log('react-output-target-0.7.0');
    console.log(this.value);
    this.internals?.setFormValue(this.value);
  };

  render() {
    return <input ref={el => (this.input = el)} onChange={this.handleOnChange} onInput={this.handleOnInput} />;
  }
}
