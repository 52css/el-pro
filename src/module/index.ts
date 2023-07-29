import { TextModule } from './text-module'
import { BooleanModule } from './boolean-module'
// import { RichTextModule } from "./rich-text-module";
import { DigitModule } from './digit-module'
// import { ArrayModule } from "./array-module";
// import { ObjectModule } from "./object-module";
import { EmailModule } from './email-module'
import { PhoneModule } from './phone-module'
import { WebModule } from './web-module'

export type Module =
  | TextModule
  | BooleanModule
  | DigitModule
  | EmailModule
  | PhoneModule
  | WebModule
