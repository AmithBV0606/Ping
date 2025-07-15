export { default } from "next-auth/middleware";

// For private routes :
export const config = { matcher: ["/dashboard"] };
