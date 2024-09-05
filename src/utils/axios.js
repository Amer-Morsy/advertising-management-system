import axios from "axios";
import { BASE_URL, API_DEFULT_TIMEOUT } from "./constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = API_DEFULT_TIMEOUT;
