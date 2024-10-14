import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message},${timestamp}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console({
      format: consoleLogFormat
    }),
    new transports.File({ filename: 'app.log' })
  ],
});

export default logger;

//maintianing logger is impt to measure so we can optimise things 
// here we are using the loggers to coustomize console logs to see what we are doing 
// we can explore more too here --for databases--logs all that