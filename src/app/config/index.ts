import dotenv from "dotenv"
import path from "path"

dotenv.config({path: path.join((process.cwd(), ".env"))})

export default{
    port: process.env.PORT,
    database_url : process.env.DATABASE_URL,
    node_dev: process.env.NODE_DEV,
    jwt_refresh_secret: process.env.JWT_REFRESH_TOKEN,
    jwt_access_secret: process.env.SECRET,
    jwt_access_expires_in: process.env.EXPIRES,
    jwt_refresh_expires_in: process.env.EXPIRES
}