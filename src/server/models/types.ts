export type Status =
  | "Potential"
  | "New"
  | "NotActual"
  | "InProgress"
  | "Active"
  | "BlackList"
  | "Delete"
  | "Test";

export enum StatusEnum {
  Potential = "Potential",
  New = "New",
  NotActual = "NotActual",
  InProgress = "InProgress",
  Active = "Active",
  BlackList = "BlackList",
  Delete = "Delete",
  Test = "Test",
}

export type OrderStatus =
  | "New"
  | "Active"
  | "Finished"
  | "Canceled"
  | "Delete"
  | "Test"
  | "InProgress";

export type SupType =
  | "VAT_Bis"
  | "Licensed_Bis"
  | "Company_LTD"
  | "NPO"
  | "GovOrg";

export type ClientType = "Person" | SupType;

export enum SupTypeEnum {
  VAT_Bis = "VAT_Bis",
  Licensed_Bis = "Licensed_Bis",
  Company_LTD = "Company_LTD",
  NPO = "NPO",
  GovOrg = "GovOrg",
}

export enum ClientTypeEnum {
  Person = "Person",
  VAT_Bis = "VAT_Bis",
  Licensed_Bis = "Licensed_Bis",
  Company_LTD = "Company_LTD",
  NPO = "NPO",
  GovOrg = "GovOrg",
}

export type ProductCat = {
  [key: string]: string[];
};

export const Categories: ProductCat = {
  BodyMind: ["Yoga", "QiGong", "Tai Chi"],
  ActiveLeisure: ["Bouldering"],
  Outdoor: ["Hiking"],
};
