// Express
import express from "express";
import http from "http";
import bodyParser from "body-parser";

// Security
import cors from "cors";
import helmet from "helmet";

// Properties
import properties from "../properties.js";
//Data
import bmi_calculator from "../code/get_bmi_data";
class Server {
  constructor() {
    this.app = express();
  }

  /**
   * Start the server
   * @returns {Promise<void>}
   */
  async init() {
   console.log("Starting Job Search application");

    // Securitiy
    this.app.use(helmet());
    this.app.use(cors());

    // Start App Server
    const server = http.Server(this.app);

    await server.listen(properties.port);
    console.log("Server started on port " + properties.port);

    const router = express.Router();
    bmi_calculator.init(router);
    this.app.use("/", router);
  }
}

export default new Server();
