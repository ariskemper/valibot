import { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'en',
  schema:           (issue) => `Invalid type: Expected ${issue.expected} but received ${issue.received}`,
  specific: {
    bic:            (issue) => `Invalid BIC: Received ${issue.received}`,
    bytes:          (issue) => `Invalid bytes: Expected ${issue.expected} but received ${issue.received}`,
    creditCard:     (issue) => `Invalid credit card: Received ${issue.received}`,
    cuid2:          (issue) => `Invalid Cuid2: Received ${issue.received}`,
    custom:         (issue) => `Invalid input: Received ${issue.received}`,
    customAsync:    (issue) => `Invalid input: Received ${issue.received}`,
    decimal:        (issue) => `Invalid decimal: Received ${issue.received}`,
    email:          (issue) => `Invalid email: Received ${issue.received}`,
    emoji:          (issue) => `Invalid emoji: Received ${issue.received}`,
    endsWith:       (issue) => `Invalid end: Expected ${issue.expected} but received ${issue.received}`,
    equal:          (issue) => `Invalid value: Expected ${issue.expected} but received ${issue.received}`,
    excludes:       (issue) => `Invalid content: Expected ${issue.expected} but received ${issue.received}`,
    finite:         (issue) => `Invalid finite: Received ${issue.received}`,
    hash:           (issue) => `Invalid hash: Received ${issue.received}`,
    hexColor:       (issue) => `Invalid hex color: Received ${issue.received}`,
    hexadecimal:    (issue) => `Invalid hexadecimal: Received ${issue.received}`,
    imei:           (issue) => `Invalid IMEI: Received ${issue.received}`,
    includes:       (issue) => `Invalid content: Expected ${issue.expected} but received ${issue.received}`,
    integer:        (issue) => `Invalid integer: Received ${issue.received}`,
    ip:             (issue) => `Invalid IP: Received ${issue.received}`,
    ipv4:           (issue) => `Invalid IPv4: Received ${issue.received}`,
    ipv6:           (issue) => `Invalid IPv6: Received ${issue.received}`,
    isoDate:        (issue) => `Invalid date: Received ${issue.received}`,
    isoDateTime:    (issue) => `Invalid date-time: Received ${issue.received}`,
    isoTime:        (issue) => `Invalid time: Received ${issue.received}`,
    isoTimeSecond:  (issue) => `Invalid time second: Received ${issue.received}`,
    isoTimestamp:   (issue) => `Invalid timestamp: Received ${issue.received}`,
    isoWeek:        (issue) => `Invalid week: Received ${issue.received}`,
    length:         (issue) => `Invalid length: Expected ${issue.expected} but received ${issue.received}`,
    mac:            (issue) => `Invalid MAC: Received ${issue.received}`,
    mac48:          (issue) => `Invalid 48-bit MAC: Received ${issue.received}`,
    mac64:          (issue) => `Invalid 64-bit MAC: Received ${issue.received}`,
    maxBytes:       (issue) => `Invalid bytes: Expected ${issue.expected} but received ${issue.received}`,
    maxLength:      (issue) => `Invalid length: Expected ${issue.expected} but received ${issue.received}`,
    maxSize:        (issue) => `Invalid size: Expected ${issue.expected} but received ${issue.received}`,
    maxValue:       (issue) => `Invalid value: Expected ${issue.expected} but received ${issue.received}`,
    mimeType:       (issue) => `Invalid MIME type: Expected ${issue.expected} but received ${issue.received}`,
    minBytes:       (issue) => `Invalid bytes: Expected ${issue.expected} but received ${issue.received}`,
    minLength:      (issue) => `Invalid length: Expected ${issue.expected} but received ${issue.received}`,
    minSize:        (issue) => `Invalid size: Expected ${issue.expected} but received ${issue.received}`,
    minValue:       (issue) => `Invalid value: Expected ${issue.expected} but received ${issue.received}`,
    multipleOf:     (issue) => `Invalid multiple: Expected ${issue.expected} but received ${issue.received}`,
    notBytes:       (issue) => `Invalid bytes: Expected ${issue.expected} but received ${issue.received}`,
    notLength:      (issue) => `Invalid length: Expected ${issue.expected} but received ${issue.received}`,
    notSize:        (issue) => `Invalid size: Expected ${issue.expected} but received ${issue.received}`,
    notValue:       (issue) => `Invalid value: Expected ${issue.expected} but received ${issue.received}`,
    octal:          (issue) => `Invalid octal: Received ${issue.received}`,
    regex:          (issue) => `Invalid format: Expected ${issue.expected} but received ${issue.received}`,
    safeInteger:    (issue) => `Invalid safe integer: Received ${issue.received}`,
    size:           (issue) => `Invalid size: Expected ${issue.expected} but received ${issue.received}`,
    startsWith:     (issue) => `Invalid start: Expected ${issue.expected} but received ${issue.received}`,
    ulid:           (issue) => `Invalid ULID: Received ${issue.received}`,
    url:            (issue) => `Invalid URL: Received ${issue.received}`,
    uuid:           (issue) => `Invalid UUID: Received ${issue.received}`,
    value:          (issue) => `Invalid value: Expected ${issue.expected} but received ${issue.received}`,
  },
};

export default language;
