// Logger utility - proper logging ke liye
import fs from "fs"
import path from "path"

const LOG_DIR = path.join(process.cwd(), "logs")

// Log directory banao agar nahi hai
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true })
}

// Log levels
const LOG_LEVELS = {
  ERROR: "ERROR",
  WARN: "WARN",
  INFO: "INFO",
  DEBUG: "DEBUG",
}

// Timestamp format karo
const getTimestamp = () => {
  return new Date().toISOString()
}

// Log file path
const getLogFilePath = (level) => {
  const date = new Date().toISOString().split("T")[0]
  return path.join(LOG_DIR, `${level.toLowerCase()}-${date}.log`)
}

// File me log likho
const writeToFile = (level, message, data = null) => {
  const timestamp = getTimestamp()
  const logEntry = {
    timestamp,
    level,
    message,
    ...(data && { data }),
  }

  const logString = JSON.stringify(logEntry) + "\n"
  const filePath = getLogFilePath(level)

  fs.appendFileSync(filePath, logString)
}

// Console me bhi print karo with colors
const logToConsole = (level, message, data = null) => {
  const timestamp = getTimestamp()
  const colors = {
    ERROR: "\x1b[31m", // Red
    WARN: "\x1b[33m", // Yellow
    INFO: "\x1b[36m", // Cyan
    DEBUG: "\x1b[90m", // Gray
  }
  const reset = "\x1b[0m"

  console.log(
    `${colors[level]}[${timestamp}] [${level}]${reset} ${message}`,
    data ? JSON.stringify(data, null, 2) : ""
  )
}

// Main log function
const log = (level, message, data = null) => {
  logToConsole(level, message, data)
  writeToFile(level, message, data)
}

// Public API
export const logger = {
  error: (message, data) => log(LOG_LEVELS.ERROR, message, data),
  warn: (message, data) => log(LOG_LEVELS.WARN, message, data),
  info: (message, data) => log(LOG_LEVELS.INFO, message, data),
  debug: (message, data) => log(LOG_LEVELS.DEBUG, message, data),
}

// Request logger middleware
export const requestLogger = (req, res, next) => {
  const start = Date.now()

  res.on("finish", () => {
    const duration = Date.now() - start
    logger.info(`${req.method} ${req.path}`, {
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
    })
  })

  next()
}

// Error logger
export const errorLogger = (err, req, res, next) => {
  logger.error(`${req.method} ${req.path} - ${err.message}`, {
    stack: err.stack,
    statusCode: err.statusCode || 500,
  })

  next(err)
}

export default logger
