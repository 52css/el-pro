import { TextModel } from './text-model'
import { BooleanModel } from './boolean-model'
// import { RichTextModel } from "./rich-text-model";
import { DigitModel } from './digit-model'
// import { ArrayModel } from "./array-model";
// import { ObjectModel } from "./object-model";
import { EmailModel } from './email-model'
import { PhoneModel } from './phone-model'
import { WebModel } from './web-model'
import { EnumModel } from './enum-model'
import { DateModel } from './date-model'

export type ModelItem =
  | TextModel
  | BooleanModel
  | DigitModel
  | EmailModel
  | PhoneModel
  | WebModel
  | EnumModel
  | DateModel
