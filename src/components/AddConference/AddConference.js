import React, { Component } from 'react';
import {Button, Card, FormLayout, TextField} from '@shopify/polaris';

export default class AddConference extends Component {

  state = {

  }

  handleChange = (value, name) => {
    this.setState({[name]: value});
  }

  output = () => {
    const {name, url, city, country, date} = this.state;
    return `{
      "name": ${name}
      "url": ${url}
      "city": ${city}
      "country": ${country}
      "date": ${date}
    }`;
  }

  render() {
    const {name, url, city, country, date} = this.state;

    return (
      <Card title="Add a conference">
        <Card.Section>
          <FormLayout>
            <TextField
              type="text"
              label="Output"
              value={this.output()}
            />
            <FormLayout.Group>
              <TextField
                type="text"
                label="Conference name"
                value={name}
                onChange={this.handleChange}
                name="name"
                id="name"
              />
              <TextField
                type="url"
                label="URL"
                value={url}
                onChange={this.handleChange}
                name="url"
                id="url"
              />
              <TextField
                type="date"
                label="Date"
                placeholder="July 26-28, 2018"
                value={date}
                onChange={this.handleChange}
                name="date"
                id="date"
              />
            </FormLayout.Group>
            <FormLayout.Group>
              <TextField
                type="text"
                label="City"
                onChange={this.handleChange}
                name="city"
                id="city"
              />
              <TextField
                type="text"
                label="Country"
                onChange={this.handleChange}
                name="country"
                id="country"
              />
            </FormLayout.Group>
            <Button primary onClick={this.showJSON}>Submit</Button>
          </FormLayout>
        </Card.Section>
      </Card>
    );
  }
}
