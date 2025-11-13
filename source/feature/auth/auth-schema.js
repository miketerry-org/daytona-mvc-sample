// auth-schema.js
import { Schema } from "daytona-mvc";

const authSchema = new Schema()
  .addPrimary("id", "string")

  // Relationship
  .addString("user_id", true, 1, 100)

  // Login credentials
  .addEmail("email", true)
  .addPassword("password_hash", true, { minLength: 8, maxLength: 255 })

  // Password reset
  .addString("reset_token", false)
  .addTimestamp("reset_expires_at", false)

  // Auth metadata
  .addBoolean("is_verified", false, false)
  .addDate("last_login_at", false)
  .addString("last_login_ip", false, 0, 45) // IPv6 compatible length

  // Standard timestamps
  .addTimestamps()

  // Indexes
  .addIndex("email", { unique: true })
  .addIndex("user_id");

export default authSchema;
