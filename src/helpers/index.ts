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

class ApiError extends Error {
    success: number;

    constructor(message: string, success: number) {
        super(message);
        this.success = success;
    }

    static notFound() {
        return new ApiError("There is no record", -1);
    }

    static wrongInput() {
        return new ApiError("Wrong input", -2);
    }

    static doesNotMatch() {
        return new ApiError("Inputs do not match", -3);
    }

    static couldNotFindPost() {
        return new ApiError("Could not find post with that ID", -4);
    }

    static paginatingError() {
        return new ApiError("Error while paginating users", -5);
    }
}

