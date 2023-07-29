import { TextField } from "./text-field";
import { BooleanField } from "./boolean-field";
// import { RichTextField } from "./rich-text-field";
import { DigitField } from "./digit-field";
// import { ArrayField } from "./array-field";
// import { ObjectField } from "./object-field";
import { EmailField } from "./email-field";
import { PhoneField } from "./phone-field";
import { WebField } from "./web-field";

export type Field = TextField | BooleanField | DigitField | EmailField | PhoneField | WebField