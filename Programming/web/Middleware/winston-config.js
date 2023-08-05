import winston, { transports } from 'winston';
import { LogstashTransport } from 'winston-logstash-transport';

const logstashHost = process.env.LOGSTASH_HOST;
const logstashPort = process.env.LOGSTASH_PORT || 5044;  // Default to 5000 if not specified.

const logger = winston.createLogger({
    transports: [
        new transports.Console(),
        new LogstashTransport({
            host: logstashHost,
            port: logstashPort
        })
    ],
});

export default logger;
