import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const API_URL = BASE_URL + "/api";

// Auth Urls :
export const LOGIN_URL = API_URL + "/auth/login";

// Chat Group Urls :
export const CHAT_GROUP_URL = API_URL + "/chat-group";

// Chat Group's Users :
export const CHAT_GROUP_USERS_URL = API_URL + "/chat-group-users";
