import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

const CRYPTO_SECRET_KEY = process.env.CRYPTO_SECRET_KEY;
export const random = () => crypto.randomBytes(128).toString("base64");
export const authentication = (salt: string, password: string) => {
    return crypto
        .createHmac("sha256", [salt, password].join("/"))
        .update(CRYPTO_SECRET_KEY)
        .digest("hex");
};