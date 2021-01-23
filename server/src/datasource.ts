import { RESTDataSource } from "apollo-datasource-rest";

// Extending RESTDataSource to form our own executable API class
export class DataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL || "https://swapi.dev/";
  }

  // You can create as many methods as you'd like here for your various REST requests
  async quickExample(id: string) {
    // The API requests are triggered using `this` as the class instance followed by the
    // HTTP verb you'd like to use, so in this example it's a GET request
    const result = await this.get(`/api/people/${id}`);

    // Logging out the result of the request for demonstration purposes
    console.log(result);

    // Destructuring the values we need from the result
    const { name, films } = result;

    // Returning the values we need, or null if the value is not required and return empty
    return {
      name,
      films,
    };
  }
}
