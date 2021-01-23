import { RESTDataSource } from "apollo-datasource-rest";

// You can customize this path and create other paths for your various REST requests
const pathForRequest = (searchTerm) =>
  `some/path/${searchTerm}?key=${process.env.API_KEY}`;

// Extending RESTDataSource to form our own executable API class
export class DataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async quickExample(text) {
    // The API requests are triggered using `this` as the class instance followed by the
    // HTTP verb you'd like to use, so in this example it's a GET request
    const [result] = await this.get(pathForRequest(text));

    // Logging out the result of the request for demonstration purposes
    console.log(result);

    // Destructuring the values we need from the result
    const { some, values } = result;

    // Returning the values we need, or null if the value is not required
    return {
      some: some,
      values: values || null,
    };
  }
}
